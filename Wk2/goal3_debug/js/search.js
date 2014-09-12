// Cathleen Carbonell || Due Date: September 12, 2014
// Create privatized scope using a self-executing function
(function(){            // self-executing function loads when the user arrives onto search site
	
	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"),        // document.getElementById method returns an element with the attributed ID name with the specified value
		searchInput = document.forms[0].search,                 // retrieves any input information/characters/etc from the form on the site
		currentSearch = '';                                      // by default, the search box is left blank
	
	// Validates search query
	var validate = function(query){       // corrected spelling error variable calling a function -- took away one equal sign (=)
		
		// Trim whitespace from start and end of search query
		while(query.charAt(0) === " "){     //added triple equal-sign
			query = query.substring(1, query.length);       //query.length -- checks the length the user query (what is typed into the search box)
		} //end while statement

		while(query.charAt(query.length-1) === "") {
            query = query.substring(0, query.length - 1);     //method .substring takes the characters from the specified string and returns a new sub string
            //end while statement
        }
		// Check search length, must have 3 characters
		if(query.length < 3){               //alerts user that their search query is too small, it must be more than 3 characters
			alert("Your search query is too small, try again."); // SYNTAX -- needed to add the ending quote
			
			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus();        // the .focus method gives emphasis or focus onto the searchInput variable--what is searched for
			return;                     // returns the searchInput function
		} //end if statement
		
		search(query);                  // calling the search FN
	};
	
	// Finds search matches
	var search = function(query){        // search FN
		
		// split the user's search query string into an array
		var queryArray = query.join(" ");       //joins method -- joining the search query into a string, returning it to the console as an array
		// array to store matched results from database.js
		var results = [];                       //I seriously do not know what happened here. Is this supposed to be a function?

		// loop through each index of db array
		for(var i=0, j=db.length; i<j; i++) {        //db = database, checks the back-end server side database (in this case: database.js) and matches the length of user-side query with the information in the db

            // each db[i] is a single video item, each title ends with a pipe "|"
            // save a lowercase variable of the video title
            var dbTitleEnd = db[i].indexOf('|');
            var dbitem = db[i].tolowercase().substring(0, dbTitleEnd);

            // loop through the user's search query words
            // save a lowercase variable of the search keyword
            for (var ii = 0, jj = queryArray.length; ii < jj; ii++) {   //if the variable jj length is greater than ii, then this for-loop adds 1 to ii
                var qitem = queryArray[ii].tolowercase();       //the query item takes the ii variable and converts it to lowercase

                // is the keyword anywhere in the video title?
                // If a match is found, push full db[i] into results array
                var compare = dbitem.indexOf(qitem);        //
                if (compare !== -1) {     //if the compare variable is NOT -1, result array is pushed-- in this case it is the video title is added to the results array
                    results.push(db[i]);
                } // end if statement
            } //end for statement

        }

		results.sort();     // method organizes results
		
		// Check that matches were found, and run output functions
		if(results.length = 0){
			noMatch();  // runs the no match FN
		}else{
			showMatches(results);       // runs the showMatches FN which prints the results
		}  //end if-else statement

	};
	
	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){       //noMatch FN
		var html = ''+
			'<p>No Results found.</p>'+
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'
		;
		resultsDIV.innerHTML = html;        //resultsDiv elements are returned; retrieved from the HTML file
	};
	
	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){    //showMatches FN
		
		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>',        //the syntax displayed for the results
			title, 
			url
		;
		
		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){       //if the variable "i" is less than variable "j"--which is the char length of results--adds 1 to i
		
			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|');
			title = results[i].subString(0, titleEnd);
			
			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length);
			
			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>'; //html adds the HTML link tag with the url and title of the video link
		}  //end for loop

		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
	};
	
	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function(){        //document.forms is executed/submitted and this function runs
        var query = searchInput.value;  //search input value is wholly submitted to the server from where the form is submitted
        validate(query);    //validate FN is run

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
        return false;   // makes sure this validate query doesn't bubble
    };      // end document.forms function

        })(); //closed self-executing function