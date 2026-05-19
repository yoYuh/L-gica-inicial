let herois = [
    { nome: "Lulu", xp: 500 },
    { nome: "Jinx", xp: 1500 },
    { nome: "Karma", xp: 3500 },
    { nome: "Kaisa", xp: 6500 },
    { nome: "Ahri", xp: 7800 },
    { nome: "Dr.Mundo", xp: 8500 },
    { nome: "Yasuo", xp: 9500 },
    { nome: "Jax", xp: 15000 }
];

let i = 0;

while (i < herois.length) {

    let nome = herois[i].nome;
    let xp = herois[i].xp;
    let nivel = "";

    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp <= 2000) {
        nivel = "Bronze";
    } else if (xp <= 5000) {
        nivel = "Prata";
    } else if (xp <= 7000) {
        nivel = "Ouro";
    } else if (xp <= 8000) {
        nivel = "Platina";
    } else if (xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    console.log("O Herói de nome " + nome + " está no nível de " + nivel);

    i++;
}