$(document).ready(function(){
    previewImageEvent();
    chatWindowScrollBottomEvent();
    searchUserEvent();
});


// Displaying image from file
function previewImageEvent() {
    $("body").on("change", "#group-avatar", function(e){
        const file = e.target.files[0];
        var reader = new FileReader();  
        reader.onload = function(event) {
            $('#avatar-preview').attr('src', event.target.result);
        };
        reader.readAsDataURL(file);

    });

    $("body").on("click", "#avatar-preview", function() {
        $("#group-avatar").click();
    });
}

// Scrolling chat-window to bottom
function chatWindowScrollBottomEvent(){
    $("#chat-window").scrollTop($("#chat-window").prop("scrollHeight"));
}

// Searching user
function searchUserEvent(){
    const items = [
        'Apple', 'Banana', 'Orange', 'Grapes', 'Pineapple', 'Strawberry', 'Watermelon', 'Watermelon', 'Watermelon', 'Watermelon', 'Watermelon', 'Watermelon', 'Watermelon', 'Watermelon', 'Watermelon'
    ];

    body.on('input', "#search-user-input", function(e) {
        const searchInput = $(e.target);
        const searchText = searchInput.val().toLowerCase();
        let results = '';
        const filteredItems = items.filter(item => item.toLowerCase() == searchText);
        if (searchText.length == 0 || filteredItems.length == 0 ){
            $('#search-user-dropdown').html(results);
            $('#search-user-dropdown').removeClass('show');
            return;
        }

        filteredItems.forEach(item => {
            results += 
                `<div class="dropdown-item d-flex align-items-center px-3">
                    <img class="rounded-circle" src="https://www.searchenginejournal.com/wp-content/uploads/2019/07/the-essential-guide-to-using-images-legally-online-760x400.webp" width="30" height="30" alt="user-avatar"/>
                    <div class="normal-text-size ml-3">${item}</div>
                </div>`;    
        });

        $('#search-user-dropdown').html(results);
        $('#search-user-dropdown').addClass('show');        
    });
}

// Modal
function loadModalEvent(){
    $("body").on("click", "#create-group-icon", async function(e){
        if ($("#create-group-modal").length == 0){
            await loadTemplate("create_group_modal", EMPTY_CONTEXT, $("#modal-area"), APPEND_ACTION);
        }

        $('#create-group-modal').modal('toggle');
    });

    $("body").on("click", "#add-friend-icon", async function(e){
        if ($("#add-friend-modal").length == 0){
            await loadTemplate("add_friend_modal", EMPTY_CONTEXT, $("#modal-area"), APPEND_ACTION);
        }
        $('#add-friend-modal').modal('toggle');
    });
}





















