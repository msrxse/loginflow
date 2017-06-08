/*
 * Dashboard
 *
 * The Dashboard is only visible to logged in users
 * Route: /dashboard
 *
 */

import React from 'react';

const Dashboard = () =>
  <article>
    <section className="text-section">
      <h1>Dashboard</h1>
      <p>Welcome, you are logged in! To have a look at the code behind this application, go to <a href="https://github.com/jmarcosuarez/loginflow">Github</a>. To run it locally:</p>
      <ol>
        <li><p>Clone the repo using <code>git clone https://github.com/jmarcosuarez/loginflow.git</code></p></li>
        <li><p>Run <code>npm install</code> to install the dependencies.</p></li>
        <li><p>Run <code>npm start</code> to start the local web server</p></li>
        <li><p>Go to <a href="http://localhost:8080"><code>http://localhost:8080</code></a> and you should see it running!</p></li>
      </ol>
      <p>Registered users will shortly be saved securely to localStorage. So the next time you visit the website with this browser, you will be able to login with that username/password combination.</p>
    </section>
  </article>;

export default Dashboard;
