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

function getBotResponse(userInput) {
    // Define responses for various questions
    const responses = {
        "hello": "Hi there! How can I assist you with your homework?",
        "what is the capital of france": "The capital of France is Paris.",
        "who is the president of the usa": "As of 2024, the President of the USA is Joe Biden.",
        "what is the square root of 16": "The square root of 16 is 4.",
        "help": "Sure, what do you need help with?",
        // Add more predefined responses here
    };
    
    // Convert user input to lowercase and get response
    userInput = userInput.toLowerCase();
    return responses[userInput] || "Sorry, I don't understand that question.";
}

sendButton.addEventListener('click', () => {
    const userInput = inputField.value.trim();
    if (userInput) {
        addMessage(userInput, 'user');
        const botResponse = getBotResponse(userInput);
        addMessage(botResponse, 'bot');
        inputField.value = ''; // Clear the input field
    }
});

inputField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendButton.click(); // Simulate button click on Enter key press
    }
});
