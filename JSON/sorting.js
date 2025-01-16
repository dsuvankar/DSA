function AscendingSort(jsonArray) {
  // Sort the array based on 'libraryID' in ascending order
  jsonArray.sort((a, b) => a.libraryID - b.libraryID);

  // Iterate through the sorted array and print the formatted string
  jsonArray.forEach((item) => {
    console.log(`${item.title}-${item.author}-${item.libraryID}`);
  });
}

// Input: Read JSON array from input (for example purposes, hardcoded here)
let inputJson =
  '[{"title":"Bill Gates","author":"The Road Ahead","libraryID":1254},' +
  '{"title":"Steve Jobs","author":"Walter Isaacson","libraryID":4264},' +
  '{"title":"Mockingjay: The Final Book of The Hunger Games","author":"Suzanne Collins","libraryID":3245}]';

// Parse the JSON string into an array of objects
let jsonArray = JSON.parse(inputJson);

// Call the AscendingSort function to sort and print the result
AscendingSort(jsonArray);
