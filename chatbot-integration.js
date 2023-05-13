// chatbot-integration.js

document.addEventListener('DOMContentLoaded', function () {
    var chatbotToggle = document.createElement('button');
    chatbotToggle.id = 'chatbot-toggle';
    chatbotToggle.textContent = 'Toggle Chatbot';
    chatbotToggle.style.position = 'fixed';
    chatbotToggle.style.bottom = '20px';
    chatbotToggle.style.right = '20px';
    chatbotToggle.style.padding = '10px 20px';
    chatbotToggle.style.backgroundColor = '#007bff';
    chatbotToggle.style.color = '#fff';
    chatbotToggle.style.border = 'none';
    chatbotToggle.style.borderRadius = '5px';
    chatbotToggle.style.cursor = 'pointer';

    var chatbotWidget = document.createElement('div');
    chatbotWidget.id = 'chatbot-widget';
    chatbotWidget.style.position = 'fixed';
    chatbotWidget.style.bottom = '70px';
    chatbotWidget.style.right = '20px';
    chatbotWidget.style.width = '380px';
    chatbotWidget.style.height = '600px';
    chatbotWidget.style.backgroundColor = '#f5f5f5';
    chatbotWidget.style.borderRadius = '10px';
    chatbotWidget.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
    chatbotWidget.style.overflow = 'hidden';
    chatbotWidget.style.display = 'none';

    var chatbotIframe = document.createElement('iframe');
    chatbotIframe.id = 'chatbot-iframe';
    chatbotIframe.style.width = '100%';
    chatbotIframe.style.height = '100%';
    chatbotIframe.style.border = 'none';

    chatbotWidget.appendChild(chatbotIframe);

    document.body.appendChild(chatbotToggle);
    document.body.appendChild(chatbotWidget);

    var isOpen = false;

    chatbotToggle.addEventListener('click', function () {
        isOpen = !isOpen;

        if (isOpen) {
            chatbotWidget.style.display = 'block';
            chatbotIframe.src = 'http://localhost:3000/';
        } else {
            chatbotWidget.style.display = 'none';
            chatbotIframe.src = '';
        }
    });
});
