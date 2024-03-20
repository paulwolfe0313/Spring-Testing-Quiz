document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('quiz-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let score = 0;
        const totalQuestions = 4;
        
        document.querySelectorAll('.question').forEach(function(question) {
            const correctAnswer = question.dataset.correct;
            const selectedAnswer = question.querySelector('input[type="radio"]:checked');
            if (selectedAnswer && selectedAnswer.value === correctAnswer) {
                score++;
                question.firstElementChild.style.color = '#003015'; 
            } else {
                question.firstElementChild.style.color = '#FFB81C'; 
            }
        });
        
        const scorePercentage = (score / totalQuestions) * 100;
        
        // Display result
        const resultContainer = document.getElementById('result');
        resultContainer.innerHTML = `<p>Your score is ${scorePercentage}%.${scorePercentage >= 70 ? ' Congratulations!' : ''}</p>`;
        
        if (scorePercentage >= 70) {
            showConfetti();
        }
    });
});

function showConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}
