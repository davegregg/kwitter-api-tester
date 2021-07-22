const usernameField = document.querySelector("input[name='username']")
const displayNameField = document.querySelector("input[name='display-name']")
const passwordField = document.querySelector("input[name='password']")
const tokenField = document.querySelector("input[name='token']")
const messageField = document.querySelector("textarea[name='message']")

document
    .querySelector("#create-user-button")
    .addEventListener("click", () => {
        const username = usernameField.value
        const displayName = displayNameField.value
        const password = passwordField.value

        createUser({ username, displayName, password })
            .then(data => console.log(data))
    })

document
    .querySelector("#login-user-button")
    .addEventListener("click", () => {
        const username = usernameField.value
        const password = passwordField.value

        loginUser({ username, password })
            .then(data => console.log(data))
    })

document
    .querySelector("#create-message-button")
    .addEventListener("click", () => {
        const text = messageField.value
        const token = tokenField.value

        createMessage({ text, token })
            .then(data => console.log(data))
    })

document
    .querySelector("#delete-user-button")
    .addEventListener("click", () => {
        const username = usernameField.value
        const token = tokenField.value

        deleteUser({ username, token })
            .then(data => console.log("OK", data))
    })
