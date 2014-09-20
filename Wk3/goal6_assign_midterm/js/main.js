/*
	* Cathleen Carbonell
	* 9/20/2014
	* Mid Terms for PWA-1

*/
//START-- SELF-EXECUTING FUNCTION
(function() {

// VARIABLES
//var i = 0; // Global object to count objects
var students = [
        {                       // Student's info object array
            name: "The Doctor",
            address: {
                street: '1 Gallifrey Planet',
                city: 'Distant Galaxy',
                state: 'Universe'},
            gpa: [4, 4.25, 5],
            date: new Date()
        },
        {
            name: "Diana Lance",
            address: {
                street: '2020 Amazon Place',
                city: 'Themyscira',
                state: 'Bermuda Triangle'},
            gpa: [4, 3.8, 3.9],
            date: new Date()
        }
    ];

    /*{
     name: "Avatar Korra",
     address:{
     street: '4 Yue Lane' ,
     city: 'Southern Water Tribe',
     state: 'South Pole'},
     gpa: [2.8, 3.2, 3.6]
     }*/

// DOM: QUERYSELECT GETELEMENTBYID

    /*
     var name = document.querySelector("#name"); // For the "name" object
     var address = document.querySelector("#address"); // For the "address" object
     var gpa = document.querySelector("#gpa"); // For the "gpa" object
     var gpaavg = document.querySelector("#gpaavg"); // For the "avg" object
     var date = document.querySelector("#date"); // For the "date object
     var button = document.querySelector(".buttonred"); // Global red button
     */
// DOM: INNERHTML


// FUNCTIONS

// Logging the student objects/infos
var consoleData = function (){
        for (var i = 0, j = students.length; i < j; i++) {
            console.log('Name: ' + students[i].name);
            console.log('Address: ' + students[i].address.street + ' ' + students[0].city + ' ' + students[0].state);
            console.log('GPA: ' + students[i].gpa);
            console.log('Date: '
                    + students[i].date.getMonth() + "/"
                    + students[i].date.getDate() + "/"
                    + students[i].date.getFullYear()
            );
        }
        return false;
    };

//Create and add new student to the original students array
var addData = function(newname, newstreet, newcity, newstate, newgpa, newdate){

        //.push method
        students.push({
            name: newname,
            address: {
                street: newstreet,
                city: newcity,
                state: newstate},
            gpa: newgpa,
            date: newdate
        });
    };

//GPA AVG function
var gpaAvg = function(myAry){
        //console.log(myAry.length);
        var gradeAvg = 0;
        for (var i = 0, max = Ary.length; i < max; i++){
            gradeAvg = gradeAvg + myAry[i];
        }

        var num = gradeAvg/max;
        return num.toFixed(2);
    };


//Button for click event
button.onclick = displayData;

console.log('*** ORIGINAL OBJECTS ***');
consoleData();

}());