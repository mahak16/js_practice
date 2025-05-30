const messageInput = document.querySelector(".message-input");
const chatBody = document.querySelector(".chat-body");
const sendMessageBtn = document.querySelector("#send-message");

const userData = {
    message:null
}
//create message element with dynamic classes and return it
const createMessageElement = (content,classes)=>{
    const div = document.createElement("div");
    div.classList.add("message",classes);
    div.innerHTML = content;
    return div;
}
//handle outgoing user messages
const handleOutgoingMessage = (e)=>{
    e.preventDefault();
    userData.message = messageInput.value.trim();
    messageInput.value = "";
    //create and display user message
    const messageContent = `<div class="message-text"></div>`;
    const outgoingMessageDiv = createMessageElement(messageContent,"user-message");
    outgoingMessageDiv.querySelector(".message-text").innerText = userData.message;
    chatBody.appendChild(outgoingMessageDiv);
}
//handle enter key press for sending messages
messageInput.addEventListener("keydown",(e)=>{
    const userMessage = e.target.value.trim();
    if(e.code === "Enter" && userMessage){
        handleOutgoingMessage(e);
    }
});
sendMessageBtn.addEventListener("click",(e)=> handleOutgoingMessage(e));
