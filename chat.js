function init(){
    // Make chat window scroll to bottom
    $('#chat-window').scrollTop($('#chat-window')[0].scrollHeight);
}

function previewImage(event) {
    const reader = new FileReader();
    reader.onload = function(){
        const output = document.getElementById('preview');
        output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
}

