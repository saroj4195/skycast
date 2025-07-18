# Steps to Initialize a Project and Push to GitHub

This document outlines the steps taken to initialize this project and push it to a GitHub repository.

## 1. Initialize a New Node.js Project

The first step is to initialize a new Node.js project. This is done using the `npm init` command.

```bash
npm init -y
```

This creates a `package.json` file with default values.

## 2. Install Dependencies

Next, install the necessary dependencies for the project. In this case, we installed `express` as a dependency and `nodemon` as a development dependency.

```bash
npm install express
npm install nodemon --save-dev
```

## 3. Create the Application File

Create the main application file, which is `index.js` in this case. This file contains the basic Express server code.

## 4. Initialize Git Repository

Initialize a new git repository in the project's root directory.

```bash
git init
```

## 5. Create a `.gitignore` File

Create a `.gitignore` file to prevent the `node_modules` directory from being tracked by git.

```
node_modules
```

## 6. Add and Commit Files

Add all the files to the staging area and commit them.

```bash
git add .
git commit -m "Initial commit"
```

## 7. Create a New Repository on GitHub

Create a new repository on GitHub. This can be done through the GitHub website or using the `gh` CLI.

## 8. Add Remote Repository

Add the remote repository URL to your local repository.

```bash
git remote add origin <your-repository-url>
```

## 9. Push Changes to GitHub

Push the committed changes to the remote repository.

```bash
git push -u origin master
