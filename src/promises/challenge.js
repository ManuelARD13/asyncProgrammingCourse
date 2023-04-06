import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1"

const fetchData = (urlAPI) => {
    return fetch(urlAPI)
}

// fetchData(`${API}/products`)
//     .then(resp => resp.json())
//     .then(products => {
//         console.log(products)
//     })
//     .then(() => {
//         console.log("hola")
//     })
//     .catch(error => {
//         console.log(error)
//     })

fetchData(`${API}/products`)
    .then(resp => resp.json())
    .then(products => {
        console.log(products)
        return fetchData(`${API}/products/${products[0].id}`)
    })
    .then(resp => resp.json())
    .then(product => {
        console.log(product.title)
        return fetch(`${API}/categories/${product.category.id}`)
    })
    .then(resp => resp.json())
    .then(category => {
        console.log(category.name)
    })
    .catch(err => console.log(err))
    .finally(() => console.log("It's done!"))