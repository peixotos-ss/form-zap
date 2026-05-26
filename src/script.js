function enviarWhats() {

    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let telefone = document.getElementById("telefone").value

    let mensagem = "Olá!\n"
    mensagem += "Nome: " + nome + "\n"
    mensagem += "E-mail: " + email + "\n"
    mensagem += "WhatsApp: " + telefone

    let numero = "5511999999999"

    let link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`

    window.open(link, "_blank")

}