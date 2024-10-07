// Promises
function alea(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject("Dados não Encontrado");
    setInterval(() => {
      resolve(msg);
    }, tempo);
  });
}
esperaAi(`Conexão com o BD`,alea(1,3))
  .then((resposta) => {
    console.log(resposta);
    return esperaAi("Buscando dados da Base", alea(1, 3));
  })
  .then((resposta) => {
    console.log(resposta);
    return esperaAi("Dados Encontarados", alea(1, 3));
  })
  .then(() => {
    console.log("Exibe dados na tela");
  })
  .catch((e) => {
    console.log("Erro", e);
  });
