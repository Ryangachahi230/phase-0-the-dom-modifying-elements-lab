// Write your code here!

const main = document.querySelector('#main');
if (main) main.remove();

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'Alice is the champion'; // Replace 'Alice' with your name