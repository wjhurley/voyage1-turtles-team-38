# Leoh Extension Clone

This is turtles-team-38's project cloning the [Leoh Chrome extension](https://chrome.google.com/webstore/detail/leoh-new-tab/ijhhakihjccpanbibbcceofpjnebokcb/related).

## Tech Stacks

### Front-End:
1. React.js
1. Redux
1. ReduxPersist (for local storage)
1. ReduxThunk
1. CSS3

### DevOps:
1. GitHub
1. npm
1. CreateReactApp

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

If you have already installed Node.js in your system, then run the following command to validate the versions.

```shell
node -v
npm -v
```

If your versions are lower than suggested, then you should update to avoid any errors.

To install dependencies:

```shell
npm install
```

### Repo Structure

  * **public/index.html**: the page template
  * **src/index.js**: the JavaScript entry point, React is rendered into DOM here, Redux store is configured, and Redux is connected to React
  * **src/actions**: Redux actions, related actions should be in a shared file, e.g. `weatherActions.js`.
  * **src/components**: All React components are defined here. `App.js` is the top-level component.
  * **src/reducers**: Redux reducers are defined here. Reducers take initial state and actions called by components and return new state to the application.
  * **src/styles**: Global styles

### Making your Contribution

See [CONTRIBUTING.md](./CONTRIBUTING.md)
