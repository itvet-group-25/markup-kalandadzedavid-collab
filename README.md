# MarkUp

ეს არის HTML კურსის workspace, სადაც გაკვეთილები დალაგებულია ცალკე საქაღალდეებად.

## სტრუქტურა

```
MarkUp/
├── .github/
│   ├── classroom/autograding.json
│   └── workflows/check-homework-lesson-01.yml
├── lesson-01-html-basics/
│   ├── README.md
│   ├── student.md
│   ├── exercises.md
│   ├── examples/
│   └── tests/check_homework.js
└── .gitignore
```

## გაკვეთილები

- [Lesson 1 — HTML Basics](lesson-01-html-basics/README.md)

## Lesson 1 რესურსები

- [Student Guide](lesson-01-html-basics/student.md)
- [Homework Exercises](lesson-01-html-basics/exercises.md)
- [Examples](lesson-01-html-basics/examples/01-basic-structure.html)
- [Homework Checker (JS)](lesson-01-html-basics/tests/check_homework.js)

## GitHub Classroom

- ავტოშემოწმების ქულები და ტესტები კონფიგურირებულია აქ: [.github/classroom/autograding.json](.github/classroom/autograding.json)
- GitHub Actions workflow აქ: [.github/workflows/check-homework-lesson-01.yml](.github/workflows/check-homework-lesson-01.yml)

## სწრაფი გამოყენება

### მასწავლებლისთვის

1. შექმენი Classroom Assignment template repo-დან.
2. დარწმუნდი, რომ Actions ჩართულია.
3. გადაამოწმე, რომ Autograding Run წარმატებით ეშვება.

### სტუდენტისთვის

1. მიიღე GitHub Classroom assignment link.
2. შეასრულე დავალება `lesson-01-html-basics/homework/` საქაღალდეში.
3. გააკეთე `git push` და ნახე შედეგი Actions ჩანართში.
