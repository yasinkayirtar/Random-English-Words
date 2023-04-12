// const cards = document.querySelectorAll(".card");
const words = document.querySelector(".words");




const url = "https://random-word-api.herokuapp.com/word";

const getData = fetch(url).then(res => res.json());
const data = getData.then((data) => { return data });


const data2 = async () => {
    const a = await data;
    createCard(a);
}




function createCard(word) {

    const wordString = word[0].toUpperCase();
    console.log(wordString)
    for (let i = 0; i < wordString.length; i++) {
        const card = document.createElement("div");
        const back = document.createElement("div");
        card.classList.add("card");
        back.classList.add("back");
        card.innerHTML = `<h1>${wordString[i]}</h1>`;
        words.appendChild(card);
        card.appendChild(back);
        console.log(word[i]);

    }
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
        card.addEventListener("click", (e) => {
            card.classList.toggle("toggle")
        })
    })



}
data2()






