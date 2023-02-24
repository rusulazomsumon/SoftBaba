 // Get all the form elements
 const form = document.querySelector('form');
 const questions = form.querySelectorAll('.form-group');

 // Add event listener to the form
 form.addEventListener('submit', (event) => {
 event.preventDefault(); // Prevent form submission
 
 let totalScore = 0;
 
 // Loop through each question and get the selected value
 questions.forEach(question => {
     const selectedOption = question.querySelector('input:checked');
     if (selectedOption) {
     const score = parseInt(selectedOption.value);
     totalScore += score;
     }
 });
 
 // Display the total score
 if (totalScore >= 8 && totalScore <= 12) {
     alert(`Your total score is ${totalScore}. You enjoy solitude and nature, and prefer calm and peaceful environments.`);
    } else if (totalScore >= 13 && totalScore <= 17) {
        alert(`Your total score is ${totalScore}. You're open-minded and adventurous, and enjoy a mix excitement and relaxation.`);
    } else if (totalScore >= 18 && totalScore <= 22) {
        alert(`Your total score is ${totalScore}. You're outgoing and social, and enjoy vibrant and dynamic environments.`);
    } else if (totalScore >= 23 && totalScore <= 28) {
        alert(`Your total score is ${totalScore}. You thrive in busy and stimulating environments, and have a passion for learning and discovery. You embrace challenges and have a positive outlook on life.`);
    } else{
        alert(`Please, answere all of the question`);
    }
 });