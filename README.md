# Overview
This exercise reads the file.txt file, extracts it's contents and calculates the pay of each employee based on the time and day of the week.

## Criteria to calculate the hourly amount
### Monday - Friday

00:01 - 09:00 : 25 USD

09:01 - 18:00 : 15 USD

18:01 - 00:00 : 20 USD

### Saturday and Sunday

00:01 - 09:00 : 30 USD

09:01 - 18:00 : 20 USD

18:01 - 00:00 : 25 USD

## Architecture
The app is split into a couple of modules. The **functions.js** file has a function that checks if a day is a weekday or a weekend. The main function **calculateAmount()** calculates the total amount that is owed to each employee.

The app reads the **.txt** in a very specific way, so it's important to format the file correctly.

## Algorithm
- Read the file using fs module
- Split each line of the file as an item, creating an array.
- Extract name, day, and hours from each item.
- Compare the extracted data with the table above to calculate the respective amount
- Console log the total amount for each employee

> If the hours coincide then the respected amount will be calculated accordingly. Example: **MO08:00-10:00** will result in $25 + $15 (1 hour for 8:00 to 9:00 and 1 hour for 9:00 to 10:00)

## To run the app
Simply clone the repo in your local machine, and run:
```
node index.js
```

## To run tests
There are 7 tests including 1 test suite. The **package.json** file has been configured to install **Jest**, and to run the test script. Run the below command to install Jest as a dev dependency: 
```
npm install
```
And then to run the tests:
```
npm test
```