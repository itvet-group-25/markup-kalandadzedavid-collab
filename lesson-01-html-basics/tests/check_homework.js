#!/usr/bin/env node
/*
HTML Homework Checker — Lesson 1
ავტომატური შემმოწმებელი: გაკვეთილი 1 — HTML-ის საფუძვლები
*/

const fs = require("fs");
const path = require("path");

const PASS = "✅";
const FAIL = "❌";
let errors = 0;
const args = process.argv.slice(2);
const checkArgIndex = args.indexOf("--check");
const selectedCheck = checkArgIndex >= 0 ? args[checkArgIndex + 1] : "all";

function check(condition, passMsg, failMsg) {
  if (condition) {
    console.log(`  ${PASS} ${passMsg}`);
  } else {
    console.log(`  ${FAIL} ${failMsg}`);
    errors += 1;
  }
}

function readFileIfExists(filePath) {
  if (!fs.existsSync(filePath)) {
    return null;
  }
  return fs.readFileSync(filePath, "utf8");
}

function normalizeHtml(raw) {
  return raw
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "");
}

function hasDoctype(raw) {
  return /<!doctype\s+html>/i.test(raw);
}

function hasHtmlLang(raw) {
  return /<html[^>]*\slang\s*=\s*["'][^"']+["'][^>]*>/i.test(raw);
}

function hasMetaCharset(raw) {
  return /<meta[^>]*\scharset\s*=\s*["']?utf-?8["']?[^>]*>/i.test(raw);
}

function hasNonEmptyTitle(raw) {
  const match = raw.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return Boolean(match && match[1].trim());
}

function hasTag(raw, tag) {
  const re = new RegExp(`<${tag}(\\s|>)`, "i");
  return re.test(raw);
}

function countTag(raw, tag) {
  const re = new RegExp(`<${tag}(\\s|>)`, "gi");
  const matches = raw.match(re);
  return matches ? matches.length : 0;
}

function getTagContents(raw, tag) {
  const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "gi");
  const values = [];
  let match;
  while ((match = re.exec(raw)) !== null) {
    values.push(match[1]);
  }
  return values;
}

function stripTags(raw) {
  return raw
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const homeworkDir = path.join(__dirname, "..", "homework");

console.log("=".repeat(50));
console.log("  საშინაო დავალება — გაკვეთილი 1: HTML საფუძვლები");
console.log("=".repeat(50));

check(
  fs.existsSync(homeworkDir) && fs.statSync(homeworkDir).isDirectory(),
  "homework/ საქაღალდე არსებობს",
  "homework/ საქაღალდე ვერ მოიძებნა — შექმენი!",
);

console.log("\n📄 index.html — სათაურები, პარაგრაფები, ფორმატირება");

const indexPath = path.join(homeworkDir, "index.html");
const indexRawRaw = readFileIfExists(indexPath);
const indexRaw = indexRawRaw ? normalizeHtml(indexRawRaw) : null;
check(Boolean(indexRaw), "ფაილი index.html არსებობს", "ფაილი index.html ვერ მოიძებნა");

if (indexRaw && (selectedCheck === "all" || selectedCheck === "structure")) {
  check(
    hasDoctype(indexRawRaw),
    "<!DOCTYPE html> მითითებულია",
    "<!DOCTYPE html> არ არის — დაამატე ფაილის პირველ სტრიქონში",
  );
  check(
    hasHtmlLang(indexRaw),
    "<html lang='...'> ატრიბუტი მითითებულია",
    "<html> ტეგს lang ატრიბუტი აკლია  მაგ: <html lang='ka'>",
  );
  check(
    hasMetaCharset(indexRaw),
    "<meta charset='UTF-8'> მითითებულია",
    "<meta charset='UTF-8'> <head>-ში ვერ მოიძებნა",
  );
  check(hasNonEmptyTitle(indexRaw), "<title> შევსებულია", "<title> ცარიელია ან საერთოდ არ არის");
}

if (indexRaw && (selectedCheck === "all" || selectedCheck === "headings")) {
  console.log("");
  ["h1", "h2", "h3", "h4", "h5", "h6"].forEach((h) => {
    check(
      hasTag(indexRaw, h),
      `<${h}> გამოყენებულია`,
      `<${h}> ვერ მოიძებნა — ყველა სათაური h1-დან h6-მდე საჭიროა`,
    );
  });
}

if (indexRaw && (selectedCheck === "all" || selectedCheck === "paragraphs")) {
  console.log("");
  const pContents = getTagContents(indexRaw, "p").map(stripTags).filter(Boolean);
  check(
    pContents.length >= 3,
    `<p> პარაგრაფები: ${pContents.length} ცალი (საჭირო: მინიმუმ 3)`,
    `პარაგრაფები: ნაპოვნია ${pContents.length} შევსებული <p>, საჭიროა მინიმუმ 3`,
  );
}

if (indexRaw && (selectedCheck === "all" || selectedCheck === "formatting")) {
  console.log("");
  ["strong", "b", "em", "i", "mark", "small", "del", "ins"].forEach((tag) => {
    check(
      hasTag(indexRaw, tag),
      `<${tag}> გამოყენებულია`,
      `<${tag}> ვერ მოიძებნა — გამოიყენე მინიმუმ ერთხელ`,
    );
  });
}

console.log("\n📄 address.html — ხაზის გადატანა <br>");

const addressPath = path.join(homeworkDir, "address.html");
const addressRawRaw = readFileIfExists(addressPath);
const addressRaw = addressRawRaw ? normalizeHtml(addressRawRaw) : null;
check(Boolean(addressRaw), "ფაილი address.html არსებობს", "ფაილი address.html ვერ მოიძებნა");

if (addressRaw && (selectedCheck === "all" || selectedCheck === "address")) {
  check(hasDoctype(addressRawRaw), "<!DOCTYPE html> მითითებულია", "<!DOCTYPE html> არ არის");
  const pContents = getTagContents(addressRaw, "p").map(stripTags).filter(Boolean);
  check(pContents.length >= 1, "<p> ტეგი შევსებულია", "<p> ცარიელია ან ვერ მოიძებნა");
  const brCount = countTag(addressRaw, "br");
  check(
    brCount >= 3,
    `<br> გამოყენებულია ${brCount}-ჯერ`,
    `საჭიროა მინიმუმ 3 <br>, ნაპოვნია: ${brCount}`,
  );
}

console.log("\n📄 formulas.html — <sub> და <sup>");

const formulasPath = path.join(homeworkDir, "formulas.html");
const formulasRawRaw = readFileIfExists(formulasPath);
const formulasRaw = formulasRawRaw ? normalizeHtml(formulasRawRaw) : null;
check(Boolean(formulasRaw), "ფაილი formulas.html არსებობს", "ფაილი formulas.html ვერ მოიძებნა");

if (formulasRaw && (selectedCheck === "all" || selectedCheck === "formulas")) {
  check(hasDoctype(formulasRawRaw), "<!DOCTYPE html> მითითებულია", "<!DOCTYPE html> არ არის");
  const subCount = countTag(formulasRaw, "sub");
  const supCount = countTag(formulasRaw, "sup");
  check(
    subCount >= 3,
    `<sub> გამოყენებულია ${subCount}-ჯერ`,
    `საჭიროა მინიმუმ 3 <sub>, ნაპოვნია: ${subCount}`,
  );
  check(
    supCount >= 4,
    `<sup> გამოყენებულია ${supCount}-ჯერ`,
    `საჭიროა მინიმუმ 4 <sup>, ნაპოვნია: ${supCount}`,
  );
}

console.log(`\n${"=".repeat(50)}`);
if (errors === 0) {
  console.log("🎉 ყველა შემოწმება წარმატებით გავიდა! გილოცავ!");
} else {
  console.log(`🔴 ${errors} შეცდომა ნაპოვნია.`);
  console.log("   გაასწორე მონიშნული პუნქტები და კვლავ ატვირთე.");
  process.exit(1);
}
