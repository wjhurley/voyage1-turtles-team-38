# Leoh Extension Clone

This is turtles-team-38's project cloning the [Leoh Chrome extension](https://chrome.google.com/webstore/detail/leoh-new-tab/ijhhakihjccpanbibbcceofpjnebokcb/related).

## Tech Stacks

### Front-End:
1. React.js
2. CSS3

### Back-End:
1. Github
1. Node.js

## Progress

Track our project on our Leoh Clone GitHub [Kanban Board](https://github.com/chingu-coders/voyage1-turtles-team-38/projects/1).  

## Contributing

Once the project is finished, We will welcome pull requests from other members too. Found an **issue** or like to add a **feature**? Please submit an issue.
<br/>

| Contributors |
| ------------ |
| **[Josh Morel](https://github.com/joshmorel)** |
| **[Adam Abundis](https://github.com/abuna1985)** |
| **[Will Hurley](https://github.com/wjhurley)** |

Let us know you, if are working on any *issue/feature* by creating an **issue**.
<br/>

### Prerequisites

|Prerequisite                                              | Version   |
|----------------------------------------------------------|-----------|
| [Node.js](http://nodejs.org)                             | `~ ^6`    |
| npm (comes with Node - npm install -g npm@5 to upgrade)  | `~ ^5`    |
| create-react-app (npm install -g create-react-app        | `^1.0.10` |

> _Updating to the latest releases is recommended_.
<br/>

### Dependencies

|Packages              | Version  |
|----------------------|----------|
| react                |`~ ^15.6.1`|
| react-dom            |`~ ^15.6.1`|
<br/>

### Dev-Dependencies

|Packages              | Version  |
|----------------------|----------|
| gh-pages             |`~^1.0.0`|
| react-scripts        |`^1.0.10`|


If you have already installed Node.js in your system, then run the following command to validate the versions.

```shell
node -v
npm -v
```

If your versions are lower than suggested, then you should update to avoid any errors.

### Repo Structure

  * **public/index.html**: the page template
  * **src/index.js**: the JavaScript entry point, React is rendered into DOM here, Redux store is configured, and Redux is connected to React
  * **src/actions**: Redux actions, related actions should be in a shared file, e.g. `weatherActions.js`.
  * **src/components**: All React components are defined here. `App.js` is the top-level component.
  * **src/reducers**: Redux reducers are defined here. Reducers take initial state and actions called by components and return new state to the application.
  * **src/styles**: Site-wide styles. External styles may be installed via NPM (e.g. materializecss).

### Making your Contribution

#### Cloning The Repo

1. Open a Terminal / Command Line / Bash Shell in your projects directory.
2. Clone this repo

```shell
$ git clone https://github.com/chingu-coders/voyage1-turtles-team-38.git
```

#### Maintaining Your Fork

Now that you have a copy of the repo, there is work you will need to do to keep it current.


##### **Rebasing from Upstream**

Do this prior to every time you create a branch for a PR:

1. Make sure you are on the `master` branch

  > ```shell
  > $ git status
  > On branch master
  > Your branch is up-to-date with 'origin/master'.
  > ```

  > If your aren't on `master`, resolve outstanding files / commits and checkout the `master` branch

  > ```shell
  > $ git checkout master
  > ```

2. Do a pull with rebase against `upstream`

  > ```shell
  > $ git pull --rebase upstream master
  > ```

  > This will pull down all of the changes to the official master branch, without making an additional commit in your local repo.

3. (_Optional_) Force push your updated master branch to your GitHub fork

  > ```shell
  > $ git push origin master --force
  > ```

  > This will overwrite the master branch of your fork.

### Create Issue (for bug, feature, documentation, etc.)

Go to issues tab on GitHub repository page and click on **New Issue**.

### Create A Branch

Before you start working, you will need to create a separate branch specific to the issue / feature you're working on. You will push your work to this branch.

### Squash Your Commits

Do work locally, make as many (or as few) commits as you'd like (can act as save points) - we'll squash them before merging for a clean master history - [https://github.com/blog/2141-squash-your-commits](https://github.com/blog/2141-squash-your-commits) (you can also do this locally, however).

### Creating A Pull Request

Push and open a pull request into master, assigning another person in the team - include text "Resolves #issuenum".

Once satisfied, the reviewer will complete the pull request into master which closes the issue.

If there is anything that needs to be resolved before pulling, use the PR as discussion, the worker may need to do further work and additional commits until reviewer satisfied.
