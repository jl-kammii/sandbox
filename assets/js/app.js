console.log("Hello Saint JO");

const prenom = 'Thomas';
let year = 2023;
const dob = 2002;
const isAdmin = false;
const bdb = ["Enzo","Thomas","Loic","Valentin"]; //tableau
const sac = {livre: "BD de Tintin", trousse: "stylo 4 couleurs", skills:["bagarre", "Jeux vidéo"]}; //objet
const disque = document.querySelector(".disque");
const btnPause = document.getElementById("btnPause");

btnPause.addEventListener("click", ()=> {
    disque.classList.toggle("pause");

    if (disque.classList.contains("pause")){
        btnPause.textContent = "Play";
    } else {
        btnPause.textContent = "Stop"
    }
});

console.log(disque);

console.log(bdb[2]);
console.log(sac.skills[0]);

bdb.forEach(   // Boucle sur le tableau
    data => {
        console.log(`Bonjour ${data}`)
    }
)


console.log(`Bonjour ${prenom}`); //concatenation
calculeAge();
// ancienne méthode fonction
function calculeAge(){
const age = year - dob;
console.log(`Ton age est ${age} ans.`);
} 
// nouvelle méthode fléches fonction
const calculeAge2 = ()=>{
    const age = year - dob;
    //if(age > 18){
      //  console.log("Rentre mon gars. ")
    //}else{
      //  console.log("Ca dégage. ")
    //}
    age > 18 ? console.log("Rentre mon gars. ") : console.log("Ca dégage. ")  // Condition terniaire
} 

calculeAge2();

