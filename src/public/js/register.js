const loginBtn = document.querySelector("#login");
const username = document.querySelector("#username");


loginBtn.addEventListener("click", async() => {
    const user = username.value;

    if(!user) {
        alert("Please enter a valid username!");
        return;
    }

    await usersService.login(user);
    document.location.href = "/"
});