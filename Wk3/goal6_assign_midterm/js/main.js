/*
	* Cathleen Carbonell
	* 9/20/2014
	* Mid Terms for PWA-1

*/
//START-- SELF-EXECUTING FUNCTION
(function() {

// VARIABLES
// Global button w/ DOM element
var button = document.querySelector(".buttonred");

// Global object to count objects
var i = 0;

// Student's info object array
var students = [
        {
            name: 'The Doctor',
            address: {street: '1 Gallifrey Planet',  city: 'Distant Galaxy', state: 'Universe'},
            gpa: [4, 4.25, 5],
            date: new Date()
        },
        {
            name: 'Diana Lance',
            address: {street: '2020 Amazon Place', city: 'Themyscira', state: 'Bermuda Triangle'},
            gpa: [4, 3.8, 3.9],
            date: new Date()
        }
    ];

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

//Dynamically add new student to the original students array
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

//DISPLAY all student info on HTML page
var displayData = function(){
    var innerName = document.getElementbyId("name");
    var innerAddress = document.querySelector("#address");
    var innerGpa = document.querySelector("#gpa");
    var innerDate = document.querySelector("#date");
    var innerAvgGpa = document.querySelector("#gpaavg");

    if (i !== max+1){
        innerName.innerHTML = 'Name: ' +  students[i].name;
        innerAddress.innerHTML = 'Address: ' + students[i].address.street + ' ' + students[i].address.city + ' ' + students[i].address.state;
        innerGpa.innerHTML = 'GPA: ' + students[i].gpa;
        innerDate.innerHTML = 'Date: '
            + students[i].date.getMonth() + "/"
            + students[i].date.getDate() + "/"
            + students[i].date.getFullYear();
        console.log(students[i].gpa);
    }
}

//Button for click event button.onclick = displayData;

console.log('*** ORIGINAL OBJECTS ***');
consoleData();  //console logs all the data
addData('Avatar Korra','4 Yue Lane' , 'Southern Water Tribe','South Pole', [2.8, 3.2, 3.6], new Date());



}());