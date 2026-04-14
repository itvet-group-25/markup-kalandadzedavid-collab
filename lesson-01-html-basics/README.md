# გაკვეთილი 1 — HTML-ის საფუძვლები

ეს საქაღალდე შეიცავს **HTML-ის პირველი გაკვეთილის** მასალებს — სადაც ვსწავლობთ HTML-ის ძირითად სტრუქტურას, ელემენტებს და ტექსტის ფორმატირებას.

---

## გაკვეთილის თემები

| თემა                                                   | დოკუმენტაცია                                                        |
| ------------------------------------------------------ | ------------------------------------------------------------------- |
| HTML-ის ძირითადი სტრუქტურა                             | [w3schools.com](https://www.w3schools.com/html/html_basic.asp)      |
| HTML ელემენტები და ტეგები                              | [w3schools.com](https://www.w3schools.com/html/html_elements.asp)   |
| სათაურები (h1–h6)                                      | [w3schools.com](https://www.w3schools.com/html/html_headings.asp)   |
| პარაგრაფები და ტექსტი                                  | [w3schools.com](https://www.w3schools.com/html/html_paragraphs.asp) |
| ტექსტის ფორმატირება (`strong`, `b`, `i`, `em` და სხვა) | [w3schools.com](https://www.w3schools.com/html/html_formatting.asp) |
| ხაზის გადატანა `<br>`                                  | [w3schools.com](https://www.w3schools.com/tags/tag_br.asp)          |
| ქვედა ინდექსი `<sub>`                                  | [w3schools.com](https://www.w3schools.com/tags/tag_sub.asp)         |
| ზედა ინდექსი `<sup>`                                   | [w3schools.com](https://www.w3schools.com/tags/tag_sup.asp)         |

---

## საქაღალდის სტრუქტურა

```
lesson-01-html-basics/
├── README.md          ← ეს ფაილი
├── student.md         ← სტუდენტის სახელმძღვანელო და სწრაფი ცნობარი
├── exercises.md       ← საშინაო დავალებები
└── examples/
    ├── 01-basic-structure.html
    ├── 02-headings-paragraphs.html
    ├── 03-text-formatting.html
    └── 04-br-sub-sup.html
```

---

## საშინაო დავალების ჩაბარება — GitHub Classroom

### ნაბიჯი 1 — მიიღე დავალება

მასწავლებელი მოგცემს **GitHub Classroom-ის ბმულს**.  
დააჭირე ბმულს → **Accept this assignment** → GitHub ავტომატურად შექმნის შენს პირად რეპოს.

### ნაბიჯი 2 — Clone

```bash
# Accept-ის შემდეგ გახსენი შენი დავალების repo, დააკოპირე "Code" URL
git clone <your-assignment-repo-url>
cd <your-assignment-repo-folder>
```

### ნაბიჯი 3 — შექმენი homework/ საქაღალდე

```
lesson-01-html-basics/
└── homework/
    ├── index.html
    ├── address.html
    ├── formulas.html
    └── profile.html   (ბონუს)
```

### ნაბიჯი 4 — ატვირთე

```bash
git add .
git commit -m "lesson-01: homework"
git push
```

> ⚡ ატვირთვის შემდეგ **GitHub ავტომატურად შეამოწმებს** შენს დავალებას.  
> შედეგი ჩანს: რეპო → **Actions** ჩანართი → "Autograding — Lesson 1"  
> `✅ passing` — სწორია | `❌ failing` — შეამოწმე რომელი პუნქტი ჩავარდა

---

## ტესტის ლოკალურად გაშვება

`lesson-01-html-basics` საქაღალდიდან შეგიძლია ტესტი გაუშვა ატვირთვამდე:

```bash
cd lesson-01-html-basics
node tests/check_homework.js
```

ცალკეული ბლოკების შემოწმება:

```bash
node tests/check_homework.js --check structure
node tests/check_homework.js --check headings
node tests/check_homework.js --check paragraphs
node tests/check_homework.js --check formatting
node tests/check_homework.js --check address
node tests/check_homework.js --check formulas
```

---

## საშინაო დავალება

სრული პირობა: [exercises.md](./exercises.md)

| #     | დავალება                     | ფაილი                    |
| ----- | ---------------------------- | ------------------------ |
| 1     | HTML სტრუქტურა               | `homework/index.html`    |
| 2     | სათაურები h1–h6              | `homework/index.html`    |
| 3     | პარაგრაფები (მინ. 3)         | `homework/index.html`    |
| 4     | ფორმატირების ტეგები (8 ცალი) | `homework/index.html`    |
| 5     | მისამართი `<br>`-ით          | `homework/address.html`  |
| 6     | ფორმულები `<sub>` / `<sup>`  | `homework/formulas.html` |
| ბონუს | პროფილის გვერდი              | `homework/profile.html`  |

---

## სწრაფი ცნობარი

```html
<!-- სრული HTML სტრუქტურა -->
<!DOCTYPE html>
<html lang="ka">
  <head>
    <meta charset="UTF-8" />
    <title>გვერდის სათაური</title>
  </head>
  <body>
    <!-- შიგთავსი -->
  </body>
</html>

<!-- სათაურები -->
<h1>ყველაზე დიდი</h1>
...
<h6>ყველაზე პატარა</h6>

<!-- ფორმატირება -->
<strong>მნიშვნელოვანი</strong> <em>ხაზგასმული</em> <mark>მონიშნული</mark> <del>გადახაზული</del>

<!-- სპეციალური ტეგები -->
პირველი<br />მეორე სტრიქონი H<sub>2</sub>O x<sup>2</sup>
```
