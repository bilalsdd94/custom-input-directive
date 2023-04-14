# Custom Input directive 
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

Run ' ng serve -o ' to run the project in browser.

<b> Less talk </b> : See project here:
https://stackblitz.com/edit/angular-cutom-input-directive?file=main.t


<b> More Talk? </b> Read below if you have time:

What is it ? </br>
-In angular applications alot of user input fields needed simple checks like minimum and maximum range, decimal allowed or not.
for this purpose alot of duplicate code needed to be written in each component for performing error checks.So I made a directive to apply it on <input> tag and make it easier to apply validations on every component

For now, it applies following checks on input fields.

-Minimum and maximum of number</br>
-allowDecimal or not</br>
-Mobile number with +92 format</br> 


Some other functions added -(use as your requirement):</br>

- setTwoNumberDecimal -> Convert to 2 decimal places</br>
- onKeydown -> Remove +,-,e from number fields</br>
- convertToNumber -> remove multiple zero's eg 0000 to 0</br>

