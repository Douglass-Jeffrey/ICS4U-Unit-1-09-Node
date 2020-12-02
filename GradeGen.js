/*
* Generates random numbers from user inputted parameters and stores them in an
* an array before averaging and outputting them and the average.
*
* @author  Douglass Jeffrey
* @version 1.0
* @since   2020-12-02
* Class GradeGen.
*/


/**
 * Function finds average of all numbers in a 2D array.
 */
function avgFinder(NUM_ARRAY) {

  //Defines the number that will be divided by 24 later
  let addVal = 0;

  // adds all numbers in array together
  for (let avgD1Counter = 0; avgD1Counter < NUM_ARRAY.length; avgD1Counter++) {
    for (let avgD2Counter = 0; avgD2Counter < NUM_ARRAY[avgD1Counter].length; avgD2Counter++) {
      addVal += (NUM_ARRAY[avgD1Counter][avgD2Counter]);
    }
  }
  // finds average of all numbers in array
  const markAvg = addVal / 24;
  return markAvg;
}

/**
 * Creates the array of random numbers and prints them as well as the 
 * generated random numbers.
 */
// Initialize primary array
let NUM_ARRAY = [];

// Begins array construction/ random number generation loop
for (let d1Counter = 0 ; d1Counter < 4; d1Counter++) {
  
  // Print student number
  console.log();
  console.log("student: " + (d1Counter + 1));

  // Initialize secondary array
  NUM_ARRAY[d1Counter] = [];
  for (let d2Counter = 0; d2Counter < 6; d2Counter++) {
    NUM_ARRAY[d1Counter][d2Counter] = Math.floor(Math.random() * ((99 - 1)) 
                                      + 1);

    //prints students grades
    console.log(NUM_ARRAY[d1Counter][d2Counter]);
  }
}

// Calls averaging function to find average of all marks values
const finalMarkFl = avgFinder(NUM_ARRAY);
// turns decimal number to integer
const finalMarkAvg = parseInt(finalMarkFl, 10);
// prints average of all marks 
console.log("mark average: " + (finalMarkAvg) + "%");


