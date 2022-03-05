# VACATION APP #
https://vacation-website-tal.herokuapp.com/

## IN A SENTENCE ##

The app displays a catalog of vacations, the user can create an account and follow vacations. 
The app also contains an admin panel to edit / create vacations and show reports. 

## HOW TO USE ##
  Login & press on the "♡" to follow vacations
  
  In order to see the admin panel use:
     Username: "x"
     password: 123

## TECHNOLOGIES I USED ##
Technology  | Usage
------------- | -------------
React  | Interface
Node.js  | Server
MySql  | Database
Axios  | Api services
JWT  | Authentication
react-charts | Reports
Heroku | Cloud hosting

## DATABASE STRUCTURE  ##
* users
    * user_id, first_name, last_name, username, password
* vacations
    * vacation_id, title, country, start_date, price, end_date
* follows
    * follow_id, user_id, vacation_id
    

## HOW TO INSTALL ##
1) Install sql with the database structure above
2) Run npm install
3) cd server -> node server.js
4) cd client -> npm start



