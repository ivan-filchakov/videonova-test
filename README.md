#### Storybook deployed:
https://storybook.dkyo3mhci8qo7.amplifyapp.com/

#### App deployed with AWS Amplify: 
https://main.d2iduzz2hxv18i.amplifyapp.com/

#### Figma layout: 
https://www.figma.com/file/ZNdHyn6insRi3WwLqSv34Z/VideoNova-%3A%3A-source

# VideoNova project 

#### App brief:
Videonova web app allows users to watch and add youtube videos on their pages. Based on `create-react-app` template.
#### Scenarios implemented: 
1. Create user profile
2. Login into exsisting profile (e.g. log: `test`, pass: `qwer`)
3. Add new YT video on logged user's page 
#### Project features:
* **React Router** - used for seamless navigation through the app without page reloading;
* **Global Store (Redux)** - keeps all static and dynamic app info. Uses middleware side effects from `@reduxjs/toolkit` for:
  * proceeding REST API and updating store based on its responses;
  * saving data in preloaded state to keep user logged in after page refresh (and clearing it after log out);
* **Storybook.js** - contains prediscribed reusable react-components, allows to preview and ajust their possible variations;
* **Eslint** and **Prettier** were used to keep code clean, unified and readable (with addons `eslint-config-airbnb` and `eslint-plugin-jsx-a11y` included);


