# Project Name: E-commerce project 

live Demo: https://conjs.herokuapp.com

## Team

  - __Product Owner__: @jwanzerkani94
  - __Scrum Master__: @Hananmajali
  - __Development Team Members__: @areejmayadeh , @atallah-salah

## Table of Contents

1. [About](#About)
2. [Summary](#Summary)
3. [Tools](#tools)
4. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    2. [Roadmap](#Roadmap)



## About
E-commerce is a full-stack MEAN (MongoDB, Express.js, Angular.js, Node.js) website that allows users to sign up for an account and browse   items to their account.

## Summary

#Front-End:

> On the frontend, a custom Angular.js component service allows the e-commerce controller to make AJAX requests to the website's API endpoints. The website uses Angular's $routeProvider to serve partial html views according to defined URL routes, and ngRepeat is used to render maketing items. ngShow provides a simple method of conditionally showing/hiding elements in the navbar (toolbar) depending on whether there to the authentication issues and what allow to all users and what allowed to authorized ones.
also we used bootstrap for styling the website.

#back-End:

> We declared two schemas for Users and Items with one to many relationship,
A normalized data structure with two separate MongoDB collections are used to store User accounts (username with password ) and items. Each item  stores a reference to the User ID that the item belongs to. A MongoDB search on the items collection, by user ID,  and in the cart we ensures that each user only sees added items they own.
Also in the server side we use Node.js(Express) as a technical tool,
and we used the REST-API's ('GET','POST','PUT') to store items in the data base and retrieve those items back to the client side also edit on users own items . 

Authentiction process is used to allow users to add items and show thier own shopping cart and and buy those items,we create a session after login, and the attaches req.user when a user is logged into a session. req.user is attached to the window object as window.user to allow Angular.js to conditionally show/hide elements, like a Logout link, if the user is logged in.



## Tools
Built With the Following Technologies/Tools:
- Node.js (Express)
- MongoDB (Mongoose)
- Angular.js
- Bootstrap 3
- Postman
- Robu mongo
As midlleware:
 - Morgan  
 - Body parser


## Development

### To Run an Instance of this App locally :


Run npm install to install frontend dependencies
Run npm install to install backend dependencies
Start the server with node index.js (Default: http://localhost:3000)

### Roadmap

client/index.html
The main page with all components

client/component/add.js
Add item button function that lets the user to add his own items that can be sold on our website.

client/component/imageSlide.js
slide show for image that shown at the top of the website.

client/component/navbar1.js 
A toolbar that includes a home button,login,signup,add Item,shopping cart and logout.


Database/index.js
main database with all of the schemas

Server/index.js
main server for all the routing and hosting
