  
const cards = document.querySelectorAll('.card');

// Iterate through each card
cards.forEach((card) => {
    const textElement = card.querySelector('.text');
     const maxLength = 500; // Maximum character length

    let originalText = textElement.textContent;
 
    if (originalText.length > maxLength) {
        const truncatedText = originalText.slice(0, maxLength - 3) + "...";
        textElement.textContent = truncatedText;
 
    }
});
