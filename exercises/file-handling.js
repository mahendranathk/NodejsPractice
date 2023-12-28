//                      Exercises

/**
 *  1.  Read the data.js file and write 
 *          to the new file called "data-output.js"
 */

var fs = require("fs");  
fs.readFile('exercises/data.js', function (err, data) {  
   if (err) {  
       return console.error(err);  
   }  
   console.log("Asynchronous read: " + data.toString());  
});  



   
// Use readFile() method 
fs.readFile('exercises/data.js', function(err, data) { 
    // Write the data read from data.js
    // to a file data1.js.
    if( !err ) 
        fs.writeFile('exercises/data1.js',data, (err)=>{ 
            if( err ) { 
                throw err; 
            } 
        }); 
    else
        throw err; 
}); 