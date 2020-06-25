React architecture is to provide the quick way scaffolding React application and State management in [Redux](https://redux.js.org/). 
It's supported the most effective way of Organizing Folders Structure for scalable project.

### Folders Structure

| Name                       | Purpose                                                                                                                                                                                                                                                                                                                       |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| :file_folder: constants    | Used for static data that doesn't change                                                                                                                                                                                                                                                                                      |
| :file_folder: environments | Used for API endpoints, static info that might change in different environments                                                                                                                                                                                                                                               |
| :file_folder: models       | Used for shared models/interfaces                                                                                                                                                                                                                                                                                             |
| :file_folder: selectors    | Used for bussiness logic code, models/interfaces generated for views                                                                                                                                                                                                                                                          |
| :file_folder: stores       | Store data management <br> :white_check_mark: **models** : API related models <br> :white_check_mark: **actions** : Events to trigger application changes <br> :white_check_mark: **effects** : Handles APIs and sanitizes response data <br> :white_check_mark: **reducers** : Adds/removes/edits data from the global store |
| :file_folder: utilities    | Used for helper code, abstract code to prevent duplication                                                                                                                                                                                                                                                                    |
| :file_folder: views        | Used for all view components, pages                                                                                                                                                                                                                                                                                           |

> Check out source code in different branch
> - [React-Redux Javascript](https://github.com/vanthienpc/react-architecture/tree/redux-js)
> - [React-Redux Typescript](https://github.com/vanthienpc/react-architecture/tree/redux-ts)

##

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
