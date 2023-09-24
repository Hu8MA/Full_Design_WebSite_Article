document.addEventListener("DOMContentLoaded", function() {
    var sentences = [
    'Programmer',
    'Web developer',
    'Software engineer',
    'Algorithm designer',
    'Software architect',
    '.NET developer'
    ];
    
    var container = document.getElementById('animated-text');
    var span = document.getElementById('span');

    var currentIndex = 0;
    
    function animateSentence() {
        var sentence = sentences[currentIndex];
        var letters = sentence.split('');
      
        letters.forEach((letter, index) => {
            setTimeout(() => {
                span.textContent += letter;
            }, index * 100); // Adjust the delay to 100ms (0.1 seconds)
        });

        setTimeout(() => {
            span.textContent ='';
            currentIndex = (currentIndex + 1) % sentences.length; // Move to the next sentence or loop back to the first
            setTimeout(animateSentence, 1000); // Adjust the delay before the next sentence appears
        }, letters.length * 100 + 1000); // Adjust the delay to include the letter animation time
    }
    
    animateSentence();
});