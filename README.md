# Simple Express APP 

## About

- It is a simple express app that support one RESTful API 'accounts' to get some data.

## Getting Started

Getting up and running is as easy as 1, 2, 3, 4, 5.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

2. Install your dependencies

    ```
    cd path/to/simple-express-app; npm install
    ```

3. Make sure you have [mongoDB](https://www.mongodb.com/)  installed and "problemsolutions".

4. Go to   "./problemsolutios/config/default.json" and update "mongoDB" key with your connection string.

5. Start your app "will run on port 3000"

    ```
    npm start
    ```

6. Download  [Studio3T](https://studio3t.com/) "GUI of MongoDB" or any other GUI. and import this [file](https://drive.google.com/open?id=1RrCrVvqO2VH1jUSGp2oBfAU7LpNJtdSk) to accounts collection for "simple-express-app" db.

7. To test accounts api, download postman and import this [collection](https://www.getpostman.com/collections/1e84e8703d48f5fdd2ac) 

    -query paramters available for pagination($skip, $limit)  with prefix $

    -result will be limited to 20 with skip 0 if you didn't send (skip,limit) query paramters.

