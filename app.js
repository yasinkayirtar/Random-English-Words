// const cards = document.querySelectorAll(".card");
const words = document.querySelector(".words");
const moreInfoPanel = document.querySelector(".moreInfo")
const moreInfo = document.querySelector("#moreInfo")




const url = "https://random-word-api.herokuapp.com/word";
const getData = fetch(url).then(res => res.json());
const data = getData.then((data) => { return data });




const data2 = async () => {
    const a = await data;

    createCard(a);
    data3(a)
    // setTimeout(() => { wordReturn(a) }, 1000)
}

const data3 = async (word) => {
    const url2 = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    const getInfo = fetch(url2).then((res) => {
        if (!res.ok) throw new Error(res.statusText);

        return res.json()
    });
    const getDataInfo = await getInfo.then((data) => {
        InfoPanel(data)
        return data
    }).catch((error) => { error });


    // console.log(mean.filter((d) => console.log(d)))




}

function InfoPanel(data) {
    // const meaning = data?.[0]?.meanings?.[0].definitions?.[1];
    const meaning = data;
    for (let i of meaning) {
        console.log(i[1]);
    }

}


// console.log("geData:", getDataInfo)


function createCard(word) {


    const wordString = word[0].toUpperCase();
    console.log("word: ", wordString)
    for (let i = 0; i < wordString.length; i++) {
        const card = document.createElement("div");
        const back = document.createElement("div");
        card.classList.add("card");
        back.classList.add("back");
        card.innerHTML = `<h1>${wordString[i]}</h1>`;
        words.appendChild(card);
        card.appendChild(back);


    }
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
        card.addEventListener("click", (e) => {
            card.classList.toggle("toggle")
        })
    })







}





data2()






moreInfo.addEventListener("click", (e) => {


})





