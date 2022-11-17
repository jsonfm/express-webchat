const socket = io();


const sendBtn = document.querySelector("#send-btn");
const messageInput = document.querySelector("#message-input");
const messagesContainer = document.querySelector("#messages");



const renderNewMessage = ({ message, user }) => {
    const same = user === usersService.getUser();

    const messagecard = `
    <div class="columns is-mobile ${!same && "message"} px-2 py-2 my-2">
        <div class="column is-3-mobile is-2-tablet is-flex is-justify-content-center">
            <img
                class="image is-fullwidth"
                src="https://images.pexels.com/photos/5422606/pexels-photo-5422606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
        </div>
        <div class="column is-flex is-flex-direction-column is-align-items-flex-start">
            <b>${user}</b>
            <p>
                ${message}
            </p>
        </div>
    </div> 
    `
    return document.createRange().createContextualFragment(messagecard);
}


const renderMessages = ({ message, user }) => {
    const messageHtml = renderNewMessage({ message, user });
}


sendBtn.addEventListener("click", () => { 
    const message = messageInput.value;
    socket.emit("message", message);
    messageInput.value = "";
});


socket.on("message", data => {
    const newMessage = renderNewMessage(data)
    messagesContainer.append(newMessage);
})

window.addEventListener("load", () => {
    console.log("user: ", usersService.getUser());

})