// Function to remove duplicates from an array
function removeDuplicate(inputArray) {
    // Initialize an empty array to store unique values
    var uniqueValues = [];
  
    // Loop through each element in the input array
    for (var count = 0; count < inputArray.length; count++) {
      // Retrieve the current element from the input array
      var currentElement = inputArray[count];
  
      // Check if the currentElement is not already in the uniqueValues array
      if (uniqueValues.indexOf(currentElement)==-1) {

        uniqueValues.push(currentElement);
      }
    }                
  
    // Return the array containing unique values
    return uniqueValues;
  }
  
  // Example usage:
  // Define an input array with duplicate elements
  var inputArray = [1, 2, 3, 4, 5, 1, 6, 2, 7, 1, 3];
  
  // Call the removeDuplicates function with the input array
  var result = removeDuplicate(inputArray);
  
  // Print the result (array with unique values) to the console
  console.log(result);
  

