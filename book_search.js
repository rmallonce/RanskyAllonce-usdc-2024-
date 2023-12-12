/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 

    /*Pop-up prompt to enter a term to search within the JSON object */

    let searchTerm = prompt("Please enter your search term", "");

 function findSearchTermInBooks(searchTerm, scannedTextObj) {

    /*Holds the results of the the search function */

    var result = {
        "SearchTerm": "",
        "Results": []
    };
    
    /*Pushes the users search term into the result array */

    result.SearchTerm = searchTerm;

    /*For loop to that adds entries in to results array if there are  mataches with the query */


     for(let i = 0; i < scannedTextObj[0].Content.length; i++){

        

       if(scannedTextObj[0].Content[i].Text.search(searchTerm) != -1){


            result.Results.push({"ISBN": scannedTextObj[0].ISBN, "Page": scannedTextObj[0].Content[i].Page, "Line": scannedTextObj[0].Content[i].Line, "Text": scannedTextObj[0].Content[i].Text});
        
        }
        
    }

    /*Prints results to console to verify final contents of results object*/

    console.log(result);

    return result; 
}

/*JSON Object to be inputed into the search function*/

const superBookObj =[

    {
        "Title": "Super Book object that's very intersting",
        "ISBN": "789042057549",
        "Content": [
            {
                "Page": 71,
                "Line": 1,
                "Text": "Bacon is too crunchy and oily so I don't like it"
            },
            {
                "Page": 44,
                "Line": 4,
                "Text": "Calling soccer, soccer instead of football is-"
            },
            {
                "Page": 99,
                "Line": 8,
                "Text": "Minimalistic design is vastly superior to loud complicated ones"
            }
        ]
    }

]

/*Intializes the function to search the JSON object*/

findSearchTermInBooks(searchTerm, superBookObj);
/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/* Tests to see if there should be matches in the loop*/
for(let i = 0; i < superBookObj[0].Content.length; i++){
       

    if(superBookObj[0].Content[i].Text.search(searchTerm) == -1){

        console.log("Fail: No match was found in entry " + [i+1]);
     
     } else {
        console.log("Pass: A match was found in entry " + [i+1]);
     }
     
 }

 