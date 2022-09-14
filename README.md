<!-- <p align="center">
    LOGO
</p> -->

# Olimpo Backend
In this repository are the files and the backend project.

## Project brief
Olimpo is a knowledge management system, which aims to help Teaching and Students to improve the absorption of knowledge.

## Links
+ [Notion](https://www.notion.so/Team-Home-f6436a085756411387b82bca9b436481)
+ [Database Modeling - IN PROGRESS]

## Technology

* **[Typescript](https://www.typescriptlang.org/)** - TypeScript is an open source programming language developed by Microsoft. It is a strict syntactic superset of JavaScript and adds optional static typing to the language. 
* **[Express](https://expressjs.com/)** - Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. 
* **[Jest](https://jestjs.io/)** - Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
* **[PostgreSQL](https://www.postgresql.org/)** - PostgreSQL is a powerful, open source object-relational database system.
* **[Prisma](https://www.prisma.io/)** - Prisma is an ORM that helps app developers build faster and make fewer errors.

<!-- ### Requirements -->

## First Steps

Initially, clone the repository:

```
git clone https://github.com/lima-vinicius/olimpo-if977-backend.git
```

Enter the project folder:

```
cd olimpo-if977-backend
```

<!-- ### Running the Project -->

## GitHub

### Branches
They can be:
+ master
+ feature
+ bugfix
+ hotfix

Their names must follow this template: `feature/branch-name`

### Commits
Must begin with the name of the branch you developed on, following the model: _“Feature(name-of-feature) : What was done…”._

Must be simple and show briefly what you just did.

- Ex: `git commit -m “Feature(issue_name) : Added ...”`
- Ex: `git commit -m “Bugfix(issue_name) : Changed ...”`
- Ex: `git commit -m “Hotfix(issue_name) : Fix ...”`

### Pull Requests
First, proceed with _rebase_:
1. _commit_ the changes on your branch
2. Go to the original branch (master) with `git checkout master`
3. Run `git pull`
4. Go back to your branch with `git checkout "your-branch"`
5. Run `git rebase master`
6. Follow the steps to conclude the _rebase_, solving conflicts and running `git add .` and then `git rebase --continue`
7. When finished rebasing, run `git push -f origin "your-branch"`. Now your Pull Request can be opened on GitHub.

Use this template for the pull request body:
```
### Issue Name
**What I did:**
- First thing I did...
- Second thing I did...
**How to test:**
- First step to execute the project...
- Second step to execute the project...
```

## Team
* **Vinícius Lima** - *Back-end* - vrpl@cin.ufpe.br - [lima-vinicius](https://github.com/lima-vinicius)
* **Valter Junior** - *Back-end* - vjsj@cin.ufpe.br - [valter-junior](https://github.com/valter-junior)
* **Lucas da Silva** - *Back-end* - lls3@cin.ufpe.br - [LucasLeoSil](https://github.com/LucasLeoSil)
