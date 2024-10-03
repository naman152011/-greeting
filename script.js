const greetings = {
    birthday: [
        "Happy Birthday, Wishing you a year filled with love and joy. -{name}",
        "Cheers to you on your special day, Have a fantastic birthday! -{name}"
    ],
    new_year: [
        "Happy New Year, May this year bring you happiness and prosperity.-{name}",
        "Cheers to a new year and another chance for us to get it right. -{name}"
    ],
    thanksgiving: [
        "Happy Thanksgiving, May your day be filled with joy and gratitude. -{name}",
        "Wishing you a bountiful Thanksgiving with all the trimmings. -{name}"
    ],
    valentines: [
        "Happy Valentine's Day, You make my heart smile. -{name}",
        "Sending you love and hugs on this special day -{name}"
    ],
    christmas: [
        "Merry Christmas, May your holiday season be filled with joy. -{name}",
        "Wishing you a wonderful Christmas and a Happy New Year. -{name}"
    ]
    // Add more occasions and messages as needed
};

function getGreetings() {
    const occasionSelect = document.getElementById('occasion');
    const selectedOccasion = occasionSelect.value;
    const name = document.getElementById('name').value || "Friend";  // Default to 'Friend' if no name is entered
    const greetingsDiv = document.getElementById('greetings');
    greetingsDiv.innerHTML = '';

    if (selectedOccasion && greetings[selectedOccasion]) {
        greetings[selectedOccasion].forEach(message => {
            // Replace {name} with the entered name
            const personalizedMessage = message.replace('{name}', name);
            const messageDiv = document.createElement('div');
            messageDiv.className = 'greeting-item';
            messageDiv.innerHTML = `
                <p>${personalizedMessage}</p>
                <button class="share-button" onclick="shareMessage('${encodeURIComponent(personalizedMessage)}')">Share</button>
            `;
            greetingsDiv.appendChild(messageDiv);
        });
    } else {
        greetingsDiv.innerHTML = '<p>Please select an occasion to see greetings.</p>';
    }
}

function shareMessage(message) {
    const whatsappUrl = `https://api.whatsapp.com/send?text=${message}`;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${message}`;

    // Open WhatsApp sharing
    window.open(whatsappUrl, '_blank');
}
