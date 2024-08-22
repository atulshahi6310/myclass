
document.querySelector('.profile-icon').addEventListener('click', function() {
    const dropdown = document.querySelector('.profile-dropdown');
    dropdown.classList.toggle('show');
});

// Send Chat Message
document.querySelector('.chat input[type="text"]').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const message = event.target.value;
        if (message.trim() !== '') {
            const chatWindow = document.querySelector('.chat-window');
            const newMessage = document.createElement('p');
            newMessage.textContent = `You: ${message}`;
            chatWindow.appendChild(newMessage);
            chatWindow.scrollTop = chatWindow.scrollHeight;
            event.target.value = ''; // Clear input after sending
        }
    }
});

// Video Controls
const videoFeed = document.querySelector('.video-placeholder');
const controls = document.querySelectorAll('.controls button');

controls.forEach(button => {
    button.addEventListener('click', function() {
        const action = button.textContent;

        if (action === 'Mute/Unmute') {
            // Toggle mute/unmute (Mock action)
            button.textContent = button.textContent === 'Mute' ? 'Unmute' : 'Mute';
            videoFeed.textContent = `Video Feed (Muted: ${button.textContent === 'Unmute'})`;
        } else if (action === 'Start/Stop Video') {
            // Toggle video on/off (Mock action)
            button.textContent = button.textContent === 'Start Video' ? 'Stop Video' : 'Start Video';
            videoFeed.textContent = button.textContent === 'Start Video' ? 'Live Video Feed' : 'Video Stopped';
        } else if (action === 'Screen Share') {
            // Mock screen sharing action
            alert('Screen Sharing Started');
        } else if (action === 'Leave Class') {
            // Mock leaving the class
            alert('You have left the class');
        }
        
    });
});
