const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest
const API = "https://api.escuelajs.co/api/v1"

function fetchData(urlAPI, callback) {
    let xhttp = new XMLHttpRequest()

    xhttp.open("GET", urlAPI, true)
    xhttp.onreadystatechange = function (event) {
        if(xhttp.readyState === 4){
            if(xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText))
            } else {
                const error = new Error("Error" + urlAPI)
                return callback(error, null)
            }
        }
    }
    xhttp.send()
}

fetchData( `${API}/products`,
    //First API request to GET THE WHOLE LIST of products
    function (error1, data1) {

        if(error1) return console.error(error1) //Error handler
        fetchData(`${API}/products/${data1[0].id}`,
            //Second API request to GET THE FIRST PRODUCT in the previous request
            function(error2, data2) {

                if(error2) return console.error(error2) //Error handler
                fetchData(`${API}/categories/${data2?.category?.id}`,
                    //Third API request to GET THE CATEGORY of that product
                    function (error3, data3) {
                        if(error3) console.error(error3) //Error handler
                        console.log(data1[0])
                        console.log(data2.title)
                        console.log(data3.name)
                })
        })
} )