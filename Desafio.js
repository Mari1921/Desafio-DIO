let nomeHeroi = "Shiro Uchiha"
let heroiXp = 3000;

let nivel = heroiXp <= 1000 ? "Ferro":
heroiXp > 1001 && heroiXp <= 2000 ? "Bronze" :
heroiXp > 2001 && heroiXp <= 5000 ? "Prata" :
heroiXp > 5001 && heroiXp <= 7000 ? "Ouro" :
heroiXp > 7001 && heroiXp <= 8000 ? "Platina" :
heroiXp > 8001 && heroiXp <= 9000 ? "Ascendente" :
heroiXp > 9001 && heroiXp <= 10000 ? "Imortal" :
heroiXp > 10000 ? "Radiante" : "Nenhum";
console.log(nivel);
console.log("O heroi" + " " + nomeHeroi + " " + "está no nivel de" + " " + nivel)





