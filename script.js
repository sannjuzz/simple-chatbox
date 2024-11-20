function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    const messagesContainer = document.getElementById('messages');

    if (userInput.trim()) {
        const userMessage = document.createElement('div');
        userMessage.classList.add('user-message');
        userMessage.textContent = `You: ${userInput}`;
        messagesContainer.appendChild(userMessage);

        // Clear the input field
        document.getElementById('user-input').value = '';

        // Add a bot response (simple)
        setTimeout(() => {
            const botMessage = document.createElement('div');
            botMessage.classList.add('bot-message');
            botMessage.textContent = `Bot: I received: ${userInput}`;
            messagesContainer.appendChild(botMessage);
            
            // Scroll to the latest message
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }, 500);
    }
}
