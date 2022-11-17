const sendBtn = document.querySelector("#send-btn");
const messageInput = document.querySelector("#message-input");
const chatContainer = document.querySelector("#chat-container");


const renderNewMessage = ({ message, user }) => {
    const html = `
    <div class="columns is-mobile message px-2 py-2">
        <div class="column is-3-mobile is-1-tablet">
            <img
                class="image is-48x48"
                src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
        </div>
        <div class="column">
            <b>${user}</b>
            <p>
                ${message}
            </p>
        </div>
    </div> 
    `
    return html;
}


const renderMessages = ({ message, user }) => {
    const messageHtml = renderNewMessage({ message, user });
}


sendBtn.addEventListener("click", () => { 
    const message = messageInput.value;
    console.log("sending: ", message)
})