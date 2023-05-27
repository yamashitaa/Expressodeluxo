async function dialogo5(client, message, pizza) {
  
  const texto = `*A pizza escolhida foi ${pizza}*. Deseja adicionar outra pizza ou bebida?\n
  1- Sim 2- Não`;
  await client
    .sendText(message.from, texto)
    .then(() => {
      console.log("Mensagem enviada.");
    })
    .catch((error) => {
      console.error("Erro ao enviar mensagem", error);
    });
}
export default dialogo5;
