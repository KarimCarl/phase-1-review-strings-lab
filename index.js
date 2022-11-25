// Write your code in this file!

const currentUser = 'Charles Ndungu';
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;
const excitedWelcomeMessage = welcomeMessage.toUpperCase();

const shortGreeting = `Welcome, ${currentUser.charAt(0)}!`; 
// Or use ${currentUser.slice(0,1) string method to pick character from 0 inder and before 1st index,
//which is the first letter