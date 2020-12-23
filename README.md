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
