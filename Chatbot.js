const chatBox = document.getElementById('chat-box');
const inputField = document.getElementById('input-field');
const sendButton = document.getElementById('send-button');

function addMessage(content, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message ' + sender + '-message';
    messageDiv.textContent = content;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom of the chat
}

async function getBotResponse(userInput) {
    try {
        const response = await fetch('https://your-server-url.com/api/get-response', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userInput })
        });
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        return 'Sorry, I am unable to process your request.';
    }
}

sendButton.addEventListener('click', async () => {
    const userInput = inputField.value.trim();
    if (userInput) {
        addMessage(userInput, 'user');
        const botResponse = await getBotResponse(userInput);
        addMessage(botResponse, 'bot');
        inputField.value = ''; // Clear the input field
    }
});

inputField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendButton.click(); // Simulate button click on Enter key press
    }
});
