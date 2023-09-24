 
const cards = document.querySelectorAll('.card');

// Iterate through each card
cards.forEach((card) => {
    const textElement = card.querySelector('.text');
    const showTextButton = card.querySelector('.showTextButton');
    const maxLength = 300; // Maximum character length

    let originalText = textElement.textContent;
    let flig = true;

    if (originalText.length > maxLength) {
        const truncatedText = originalText.slice(0, maxLength - 3) + "...";
        textElement.textContent = truncatedText;

        showTextButton.addEventListener('click', function () {
            if (flig) {
                textElement.textContent = originalText;
                flig = false;
            } else {
                textElement.textContent = truncatedText;
                flig = true;
            }
        });
    }
});
