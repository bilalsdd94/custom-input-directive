# Custom Input directive 
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

Run ' ng serve -o ' to run the project in browser.


What is it ?
-In angular applications alot of user input fields needed simple checks like minimum and maximum range, decimal allowed or not.
for this purpose alot of duplicate code needed to be written in each component for performing error checks.So I made a directive to apply it on <input> tag and make it easier to apply validations on every component

For now, it applies following checks on input fields.

-Minimum and maximum of number
-allowDecimal or not
-Mobile number with +92 format 


Some other functions added -(use as your requirement):

-setTwoNumberDecimal -> Convert to 2 decimal places
- onKeydown -> Remove +,-,e from number fields
-convertToNumber -> remove multiple zero's eg 0000 to 0

