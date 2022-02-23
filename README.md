# Mesh Website

<a href="https://github.com/MeshSocialNetwork"><img alt="repo size" src="https://img.shields.io/github/languages/code-size/MeshSocialNetwork/Website?style=flat-square"></a>  <a href="https://github.com/MeshSocialNetwork/Website/issues"><img alt="open issues" src="https://img.shields.io/github/issues-raw/MeshSocialNetwork/Website?style=flat-square" ></a> 

### Mesh is an attempt to surpass all existing social networks, help us to achieve this goal!

If you find any bugs, have suggestions for improvement or anything else, create an issue [here](https://github.com/MeshSocialNetwork/Website/issues).   
You can also reach us via our email, we will try to answer asap.

## If you want to participate:
## Setup
### 1. Clone the repo
``git clone https://github.com/MeshSocialNetwork/Website``
### 2. Open your preferred IDE
### 3. Open your terminal and install dependencies
``npm i``
### 4. Start the project
``npm start``
## Workflow
There is a **main** branch, a **dev** (development) branch and other branches are **'featureX'** or **'bugFixY'**. **main** branch is always what is in production, tested and complete.
**'dev'** is the branch closest to **main** but has changes that should be merged to main and deployed next.
## New feature
Anyone who starts working on a new feature should always branch out from **dev**.   
Try not to fix things directly in **dev**, a branch for every bug (unless it's something like a hotfix).