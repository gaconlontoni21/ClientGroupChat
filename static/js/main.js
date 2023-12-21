// URL
const getUrl = window.location;
const baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
const templateURL = baseUrl + "/templates/";

// Context
const EMPTY_CONTEXT = {};

// DOM
const body = $("body");
const container = $("#container");

// Action
const APPEND_ACTION = 0;
const PREPEND_ACTION = 1;

// init
$(document).ready(function() {
	loadTemplates();
	triggerEvents();
});


const conversationContext = {
	conversations: [
		{
			avatar: baseUrl + "/static/imgs/img.jpg",
			name: "This",
			timestamp: "10:30",
			lastMessage: "This is my last messagemessagemessagemessagemessagemessagemessagemessage",
			numberOfUnreadMessage: 14
		}
	]
};
const con = conversationContext.conversations[0];
for (let i = 0; i < 10; i++){
	conversationContext.conversations.push(con);
}


const curYear = {
	curYear: new Date().getFullYear()
}

const messageContext = {
	messages: [
		{
			sender: {
				id: "1",
				avatar: baseUrl + "/static/imgs/img.jpg",
				name: "Lam Thien Tinh",
			},
			content: "Hey hey hey, what the fuck are you doing?",
			timestamp: "16:42"
		},
		{
			sender: {
				id: "2",
				avatar: baseUrl + "/static/imgs/img.jpg",
				name: "Lam Thien Tinh",
			},
			content: "I'm fuckinggggggggggggggggggggggggggggggggggggggggg your sister",
			timestamp: "16:42"
		},
		{
			sender: {
				id: "1",
				avatar: baseUrl + "/static/imgs/img.jpg",
				name: "Lam Thien Tinh",
			},
			content: "You montherfuckerrrrrrrrrr",
			timestamp: "16:42"
		},
	]
};

const mess = messageContext.messages[0];
for (let i = 0; i < 10; i++){
	messageContext.messages.push(mess);
}

const userId = "1";

async function loadTemplates(){
	try {
	    await loadTemplate("chat-container", EMPTY_CONTEXT, container, APPEND_ACTION);
	    await loadTemplate("left-header-container", EMPTY_CONTEXT, $("#left-container"), PREPEND_ACTION);
	    await loadTemplate("right-header-container", EMPTY_CONTEXT, $("#right-container"), PREPEND_ACTION);
	    await loadTemplate("list-conversation", conversationContext, $("#left-container"), APPEND_ACTION);
	    await loadTemplate("footer", curYear, container, APPEND_ACTION);
	    
	    messageContext.messages.forEach(async function (message) {
	    	if (message.sender.id == userId){
	    		await loadTemplate("sent-message", message, $("#chat-window"), APPEND_ACTION);
	    	}else {
	    		await loadTemplate("received-message", message, $("#chat-window"), APPEND_ACTION);
	    	}
	    });
	    await loadTemplate("modal-area", EMPTY_CONTEXT, container, APPEND_ACTION);

	}catch(e){
		console.log(e);
	}
}

function triggerEvents(){
	// chatWindowScrollBottomEvent();
	loadModalEvent();
} 

// Get and add template to container based on action
async function loadTemplate(name, context, parentContainer, action){
	const extension = ".html";
	const url = templateURL + name + extension;
	const template = await getTemplate(url);
    const html = template(context);
    if (action == APPEND_ACTION){
    	parentContainer.append(html);
    }else {
    	parentContainer.prepend(html);
    }
}

// Get handlebars template from external file
function getTemplate(url) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            url: url,
            dataType: "html",
            success: function(data) {
                const template = Handlebars.compile(data);
                resolve(template);
            },
            error: function(xhr, status, error) {
                reject(error);
            }
        });
    });
}