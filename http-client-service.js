const api = `https://socialapp-api.herokuapp.com`

/*
        # CREATE user (Content-Type header required)
        POST {{api}}/users
        Content-Type: application/json

        {
        "username": "{{user_name}}",
        "displayName": "{{user_display_name}}",
        "password": "{{user_password}}"
        }
*/

function createUser ({ username, displayName, password }) {
    const endpoint = `${api}/users`
    const options = {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, displayName, password }),
    }

    return fetch(endpoint, options)
        .then(response => response.json())
}

/*
        # LOGIN user (Content-Type header required)
        POST {{api}}/auth/login
        Content-Type: application/json

        {
            "username": "{{user_name}}",
            "password": "{{user_password}}"
        }
*/

function loginUser ({ username, password }) {
    const endpoint = `${api}/auth/login`
    const options = {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password }),
    }

    return fetch(endpoint, options)
        .then(response => response.json())
}

/*
        # DELETE user (Authorization header required)
        DELETE {{api}}/users/{{user_name}}
        Authorization: Bearer {{user_token}}
*/
function deleteUser ({ username, token }) {
    const endpoint = `${api}/users/${username}`
    const options = {
        method: "DELETE",
        mode: "cors",
        headers: {
            "Authorization": `Bearer ${token}` ,
        },
    }

    return fetch(endpoint, options)
        .then(response => response.json())
}

/*
        # CREATE message (Authorization & Content-Type headers required)
        POST {{api}}/messages
        Authorization: Bearer {{user_token}}
        Content-Type: application/json

        {
            "text": "Charles Barkley bought me a beer. #sircharles"
        }
*/

function createMessage ({ text, token }) {
    const endpoint = `${api}/messages`
    const options = {
        method: "POST",
        mode: "cors",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
    }

    return fetch(endpoint, options)
        .then(response => response.json())
}