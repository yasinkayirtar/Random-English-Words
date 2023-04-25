// const cards = document.querySelectorAll(".card");
const words = document.querySelector(".words");
const moreInfoPanel = document.querySelector(".moreInfo")
const moreInfo = document.querySelector("#moreInfo");
const panelInfo1 = document.querySelector(".panelInfo1")
const panelInfo2 = document.querySelector(".panelInfo2")
const panelInfo3 = document.querySelector(".panelInfo3")




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
    const key = "i0qr8clmyudgvbuonux0hnkypiin9b9v4urctmnruhjp848jd"
    const url2 = `https://api.wordnik.com/v4/word.json/${word}/definitions?limit=3&includeRelated=false&sourceDictionaries=century%2Cwiktionary%2Cwebster&useCanonical=true&includeTags=false&api_key=${key}`;

    const getInfo = fetch(url2).then((res) => {
        if (!res.ok) {
            throw new Error(res.statusText);


        };

        return res.json()
    });
    const getDataInfo = await getInfo.then((data) => {
        InfoPanel(data)
        return data
    }).catch((error) => {

        if (error) {

            return // moreInfoPanel.innerHTML = `<p>There is no information or accessible data for <span class='error'> ${word} </span> in the database</p>`
        }
        console.log("err", error)

    });


    // console.log(getDataInfo)
    // console.log(mean.filter((d) => console.log(d)))




}

function InfoPanel(data) {
    // const meaning = data?.[0]?.meanings?.[0].definitions?.[1];
    const meaning = data;
    console.log("meanings", meaning);


    const source1 = document.querySelector(".source1");
    const source2 = document.querySelector(".source2");
    const source3 = document.querySelector(".source3");

    const meaning1 = document.querySelector(".meaning1");
    const meaning2 = document.querySelector(".meaning2");
    const meaning3 = document.querySelector(".meaning3");

    const example1 = document.querySelector(".example1");
    const example2 = document.querySelector(".example2");
    const example3 = document.querySelector(".example3");
    const partOf = document.querySelector(".partOf");


    if (meaning.length == 1) {
        source1.innerHTML = `<b> Source </b>: ${meaning[0].sourceDictionary}`;
        meaning1.innerHTML = `<b>Meaning:</b> ${meaning[0].text}`;
        example1.innerHTML = ` <b>Example: </b>  ${meaning[0].exampleUses[0] ? meaning[0].exampleUses[0] : " no example"}`;
        source2.innerHTML = `<b> Source </b>: No other Source`;
        source3.innerHTML = `<b> Source </b>: No Source`;


    } else if (meaning.length == 2) {
        meaning1.innerHTML = `<b>Meaning:</b> ${meaning[0].text}`;
        source1.innerHTML = `<b> Source </b>: ${meaning[0].sourceDictionary}`;
        example1.innerHTML = `<b>Example: </b> ${meaning[0].exampleUses[0]}`;

        source2.innerHTML = `<b> Source </b>: ${meaning[1].sourceDictionary}`;
        meaning2.innerHTML = `<b>Meaning:</b> ${meaning[1].text}`;
        example2.innerHTML = `<b>Example: </b> ${meaning[1].exampleUses[0]}`;

        source3.innerHTML = `<b> Source </b>: No Source`;



    } else if (meaning.length == 3) {
        meaning1.innerHTML = `<b>Meaning:</b> ${meaning[0].text}`;
        source1.innerHTML = `<b> Source </b>: ${meaning[0].sourceDictionary}`;

        source2.innerHTML = `<b> Source </b>: ${meaning[1].sourceDictionary}`;
        meaning2.innerHTML = `<b>Meaning:</b> ${meaning[1].text}`;

        source2.innerHTML = `<b> Source </b>: ${meaning[2].sourceDictionary}`;
        meaning2.innerHTML = `<b>Meaning:</b> ${meaning[2].text}`;

        meaning3.innerHTML = `<b>Meaning:</b> ${meaning[2].text}`;

        example3.innerHTML = `<b>Example: </b> ${meaning[2].exampleUses[0]}`;
        example1.innerHTML = `<b>Example: </b>${meaning[0].exampleUses[0]}`;
        example2.innerHTML = `<b>Example: </b> ${meaning[1].exampleUses[0]}`;
        source3.innerHTML = `<b> Source </b>: ${meaning[2].sourceDictionary}`;


    }

    for (let i = 0; i < meaning.length; i++) {

        if (meaning[i].partOfSpeech) {
            partOf.innerHTML = `<b> Part Of Speech </b>: ${meaning[i].partOfSpeech}`

        }


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
    moreInfoPanel.classList.toggle("display")


})





