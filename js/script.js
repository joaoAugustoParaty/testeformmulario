function fazPost(url, body){
console.log("Body=", body)
let request = new XMLHttpRequest()
request.open("POST", url, true)
request.setRequestHeader("Content-type", "application/json")
request.send(JSON.stringify (body))

request.onload = function(){
    console.log(this.responseText)
}
return request.responseText
}
function cadastroUsuario(){
    event.preventDefault()
    let url = "https://webhook.site/45ba7968-42c2-4979-a24c-92cd607a876d"
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    console.log(nome)
    console.log(email)

    body = { 
        "name": nome,
        "email": email
    }

    fazPost(url, body)

}
