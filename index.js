// Function to create thank you messages
function writeCards(names, event) {
    const messages = []; // Create a new array to hold messages
  
    for (let i = 0; i < names.length; i++) {
      // Create thank you message for each name
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
  
    return messages; // Return the array of messages
  }
  
  // Example usage of writeCards
  const thankYouMessages = writeCards(["Charlie", "Samip", "Ali"], "birthday");
  console.log(thankYouMessages);
  
  // Function to count down from a given number
  function countDown(number) {
    while (number >= 0) {
      console.log(number); // Log the current number
      number--; // Decrement the number
    }
  }
  
  // Example usage of countDown
  countDown(10);
  