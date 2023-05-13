//this is the script that create widjet with the button and adds the site to embed
//=================================chatbot-toggle==============================//
document.addEventListener('DOMContentLoaded', function () {
    var chatbotToggle = document.createElement('button');
    chatbotToggle.id = 'chatbot-toggle';
    // chatbotToggle.textContent = 'Toggle Chatbot';
    chatbotToggle.style.position = 'fixed';
    chatbotToggle.style.bottom = '20px';
    chatbotToggle.style.right = '20px';
    chatbotToggle.style.padding = '30px';
    chatbotToggle.style.backgroundColor = '#007bff00';
    chatbotToggle.style.backgroundImage = 'url("https://ajicod.com/media/img/favicon.png")';
    chatbotToggle.style.backgroundSize = 'contain';
    chatbotToggle.style.backgroundRepeat = 'no-repeat';
    chatbotToggle.style.color = '#fff';
    chatbotToggle.style.border = 'none';
    chatbotToggle.style.borderRadius = '45px';
    chatbotToggle.style.cursor = 'pointer';
    chatbotToggle.style.transition = 'transform 0.5s ease';

    chatbotToggle.addEventListener('mouseover', function () {
        chatbotToggle.style.transform = 'translateY(-5px)';
    });

    chatbotToggle.addEventListener('mouseout', function () {
        chatbotToggle.style.transform = 'translateY(0)';
    });
    //=================================chatbotWidget==============================//
    var chatbotWidget = document.createElement('div');
    chatbotWidget.id = 'chatbot-widget';
    chatbotWidget.style.position = 'fixed';
    chatbotWidget.style.bottom = '90px';
    chatbotWidget.style.right = '-400px';
    chatbotWidget.style.width = '380px';
    chatbotWidget.style.height = '600px';
    chatbotWidget.style.backgroundColor = '#f5f5f5';
    chatbotWidget.style.borderRadius = '10px';
    chatbotWidget.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
    chatbotWidget.style.overflow = 'hidden';
    chatbotWidget.style.display = 'none';
    // chatbotWidget.style.transition = 'transform 0.9s ease';



    //=================================chatbotWidget==============================//
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
            //my chatbot website to create
            //You should put your website chatbot link her
            chatbotIframe.src = 'http://localhost:3000/';
            chatbotToggle.style.backgroundImage = 'url("https://cdn-icons-png.flaticon.com/512/5501/5501853.png")';
            // chatbotWidget.style.transform = 'translateX(-410px)';
            animateWidget(10);

        } else {
            chatbotWidget.style.display = 'none';
            chatbotIframe.src = '';
            chatbotToggle.style.backgroundImage = 'url("https://ajicod.com/media/img/favicon.png")';
            // chatbotWidget.style.transform = 'translateX(0)';
            animateWidget(-400);
        }
    });

    function animateWidget(targetPosition) {
        var currentPosition = parseInt(chatbotWidget.style.right) || 0;
        var distance = targetPosition - currentPosition;
        var speed = 20; // Adjust the speed of animation

        function step() {
            currentPosition += distance > 0 ? Math.min(speed, distance) : Math.max(-speed, distance);
            chatbotWidget.style.right = currentPosition + 'px';

            if ((distance > 0 && currentPosition < targetPosition) || (distance < 0 && currentPosition > targetPosition)) {
                requestAnimationFrame(step);
            }
        }

        requestAnimationFrame(step);
    }
});
