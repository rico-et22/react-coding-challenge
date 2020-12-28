![magicul-logo](https://user-images.githubusercontent.com/5519740/102984834-a3dad200-4527-11eb-83da-237d3c63cea9.png)

# React Coding Challenge

## The task
Your job is to create a SPA which stores file details in the browsers local storage and keeps a history. The files are not uploaded to any service. Only the file meta deta is stored in the browser storage.

## Tech stack:
* React: [Create react app starter](https://github.com/facebook/create-react-app)
* State Managment: [Redux](https://github.com/reduxjs/react-redux)
* Styled Components: (if you like to style things): [Styled Components](https://github.com/styled-components/styled-components)

## Screens:
* `Main Screen` 
    * Displays an upload dialog
    * Once a file was dropped on the file upload dialog area it will dispaly the file name and a "Save File" and "Reset File" button
    * Only PDF, DOCX, DOC are allowed
    * Clicking "Save File" will persist the file meta data in the browsers local storage
    * Clicking "Reset File" will reset the upload dialog
    * List all previously saved files (if any) in a table
    * Clicking on the "X" icon in the file list will remove the item and remove it from the browser storage
    * The table contains filename, file size (in bytes, kilobytes, megabytes, gigabytes, terabytes) and the file format (extension without the dot)

![Desktop HD](https://user-images.githubusercontent.com/5519740/102994797-35067480-4539-11eb-947f-eec8ef49a7d4.jpg)
![Desktop HD 2](https://user-images.githubusercontent.com/5519740/102994795-346dde00-4539-11eb-8640-bf511582a70c.jpg)
![Desktop HD 3](https://user-images.githubusercontent.com/5519740/102994792-320b8400-4539-11eb-851d-c285bd9f5b4e.jpg)

## Must-have:
1. React, Redux
2. Validation on forms
3. Usage of modern js functionality (ES6+)
4. Pull Request to to this repo once the task is completed

## Good to have:
1. Typescript
2. Clean code (linters, prettier)
3. Tests
4. App deployed to [Vercel](https://www.vercel.com/)

## What will we be paying attention to:
1. How you split code for components
2. How your store looks like and how you communicate with redux.
3. Reusability of the components.
4. Code repetitions and reusability (keep your code [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) and simple [KISS](https://en.wikipedia.org/wiki/KISS_principle)).
5. How and where you put your business logic.
6. Code optimization and the solution&#39;s performance.
7. Working in accordance with good practices in general.
8. How you communicate with the browser storage API.
9. Handling unexpected errors or potential exceptions.

# Getting Started with this challenge

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

