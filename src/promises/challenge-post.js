import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1"

const postData = (urlAPI, data) => {
    const response = fetch(urlAPI, {
        method: "POST",
        mode: "cors",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return response
}

const data = {
    "title": "No name blade",
    "price": 9999,
    "description": "A description",
    "categoryId": 1,
    "images": [
        "https://placeimg.com/640/480/any"
    ]
}

postData(`${API}/products`, data)
    .then(resp => resp.json())
    .then(data => console.log(data))
