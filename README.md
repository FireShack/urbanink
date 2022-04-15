# Urban INK

A modern and very complete E-commerce developed with the last technologies. If you are a client, you can use Urban INK in all your favorites devices and buy a lot of pretty clothes, footwear and accessories. If you are an administrator, in the Admin panel you can see all your ecommerce data: charts with statistics, totals earned, manage your products and much more.

## Here you have the project documentation

[Go to english documentation](https://docs.google.com/document/d/1edq3DMbFkMcT6GvYW1VymlRjF20ZBvv2JMnYcyCX1Yo/edit?usp=sharing)

[Go to spanish documentation](https://docs.google.com/document/d/1CUZgsqRY5YKX7cBR1T-3JP089XJaECT8UYDoXrtfH68/edit?usp=sharing)

[Go to italian documentation](https://docs.google.com/document/d/19lZC9L_sGZStbdk0dfaLQNkWAa4BKse4W2295ZwO-t4/edit?usp=sharing)

## Here are some scripts to execute the project

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

## How to deploy this app in firebase hosting

1. First you run "npm install -g firebase-tools" with npm or some other package manager like yarn
2. After that go to your project's directory and run "npm run build" to compile your project into a folder
3. In the same directory run "firebase init hosting" and answer firebase questions to complete the setup.
       - Set up build folder as the public !IMPORTANT 
       - Note that, in this case, i use react-route-dom, so at the question "set up like a SPA" select "y" !IMPORTANT
5. After the setup, you need to deploy the app, so run "firebase deploy"
6. Done!
