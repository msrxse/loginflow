# Adding Login and Authentication Sections to a React app
## Warning! This project is very old at this point! Some of the ideas may be fine would not recommend you use it as a modern reference

Boilerplate by
  - [jmarcosuarez/minimal-react-boilerplate](https://github.com/jmarcosuarez/minimal-react-boilerplate)

### Install dependencies

Execute `npm install` to install all dependencies.

### Development environment

#### Start the app

Execute `npm start` to run the development server on **[http://localhost:8080](http://localhost:8080)**.

- - - -

## ABOUT

This application demonstrates what a React.js based register/login workflow might look like on the Frontend. I used my react-boilerplate as a starting point — the app thus uses Redux, PostCSS and react-router.

## Authentication and authorizations are usual tasks when writing applications. 
### Authentication
Is the process or action of verifying the identity of a user. Everything authentication related is in the js/utils folder. The actual auth happens in auth.js, using fakeRequest.js and fakeServer.js.

fakeRequest is a fake XMLHttpRequest wrapper. It simulates network latency, so loading states are visible. fakeServer responds to the fake HTTP requests and pretends to be a real server.

### Role based authorization
Is a method of regulating access to resources based on the roles of the user possess. 
A higher order component (HOC) moves the authorization logic completely outside of the route handler. It inspects the current logged in user and renders the wrapped component if the user has a sufficient role.

I have curried the HOC and moved the function call that applies the HOC into the router configuration. Now, I just define a set number of roles in advance, and “seed” the authorization HOC with those roles, eliminating the need to define them over and over for each route.
Of course, client-side authorization is only one part of it. The backend should always enforce user roles as well, because all data on the client can be changed from the devtools.


- - - -

## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D
## History
TODO: Write history
## Credits
TODO: Write credits
## License
TODO: Write license
