function trocarImagem() {
    const imgStatusSenha = document.getElementById("status_senha");
    const senhaInputType = document.getElementById("caixa_senha");

   if (imgStatusSenha.src.includes("visible.png")) {
        imgStatusSenha.src = "hidden.png";
        senhaInputType.type = "text";
   }
   else {
    imgStatusSenha.src = "visible.png";
    senhaInputType.type = "password";
   }
}
