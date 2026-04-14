# გაკვეთილი 1 — HTML-ის საფუძვლები

**კურსი:** HTML საფუძვლები  
**გაკვეთილი:** 1  
**სტუდენტი:** ************\_\_\_\_************

---

## რა ვისწავლეთ

| თემა                       | დოკუმენტაცია                                                        |
| -------------------------- | ------------------------------------------------------------------- |
| HTML-ის ძირითადი სტრუქტურა | [w3schools.com](https://www.w3schools.com/html/html_basic.asp)      |
| HTML ელემენტები და ტეგები  | [w3schools.com](https://www.w3schools.com/html/html_elements.asp)   |
| სათაურები (h1–h6)          | [w3schools.com](https://www.w3schools.com/html/html_headings.asp)   |
| პარაგრაფები და ტექსტი      | [w3schools.com](https://www.w3schools.com/html/html_paragraphs.asp) |
| ტექსტის ფორმატირება        | [w3schools.com](https://www.w3schools.com/html/html_formatting.asp) |
| ხაზის გადატანა `<br>`      | [w3schools.com](https://www.w3schools.com/tags/tag_br.asp)          |
| ქვედა ინდექსი `<sub>`      | [w3schools.com](https://www.w3schools.com/tags/tag_sub.asp)         |
| ზედა ინდექსი `<sup>`       | [w3schools.com](https://www.w3schools.com/tags/tag_sup.asp)         |

---

## საშინაო დავალება

საშინაო დავალების სრული პირობა: [exercises.md](./exercises.md)

**შექმენი `homework/` საქაღალდე შემდეგი ფაილებით:**

```
homework/
├── index.html       ← დავალება 1–4
├── address.html     ← დავალება 5
├── formulas.html    ← დავალება 6
└── profile.html     ← დავალება 7 (ბონუს)
```

---

## სასარგებლო რჩევები

- ყოველთვის შეამოწმე კოდი ბრაუზერში გახსნით
- ტეგები დახური (`<p>...</p>`)
- `<br />` და `<meta />` არის **self-closing** ტეგები — არ სჭირდება დახურვა
- ვებ-გვერდის ენა მიუთითე `<html lang="ka">` ატრიბუტით

---

## სწრაფი ცნობარი

```html
<!-- სათაურები -->
<h1>ყველაზე დიდი</h1>
<h6>ყველაზე პატარა</h6>

<!-- პარაგრაფი -->
<p>ტექსტი</p>

<!-- ფორმატირება -->
<strong>მნიშვნელოვანი</strong>
<em>ხაზგასმული</em>
<mark>მონიშნული</mark>
<del>გადახაზული</del>

<!-- ხაზის გადატანა -->
პირველი სტრიქონი<br />
მეორე სტრიქონი

<!-- ინდექსები -->
H<sub>2</sub>O
<!-- ქვედა: H₂O -->
x<sup>2</sup>
<!-- ზედა: x² -->
```
