const faqQuestions = document.querySelectorAll('.faq-question');
const faqAnswers = document.querySelectorAll('.faq-answer');
const plusIcons = document.querySelectorAll('.plus-icon');
const minusIcons = document.querySelectorAll('.minus-icon');

faqQuestions.forEach((question, index) => {
  question.addEventListener('click', () => {
   
    faqAnswers[index].style.display = faqAnswers[index].style.display === 'block' ? 'none' : 'block';

    if (question.querySelector('.plus-icon')) {
      question.querySelector('.plus-icon').style.display = 'none';
      question.querySelector('.minus-icon').style.display = 'inline-block';
    } else {
      question.querySelector('.minus-icon').style.display = 'none';
      question.querySelector('.plus-icon').style.display = 'inline-block';
    }
  });
});
