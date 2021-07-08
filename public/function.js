const jokes = document.querySelector('#jokes');
const button = document.querySelector('.jokesBtn');

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI)
}

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke;
    } catch (e) {
        return "NO JOKES AVAILABLE! SORRY :("
    }
}
button.addEventListener('click', addNewJoke)


// const Form = document.querySelector('form');
// const formUser = document.querySelector("#userInputDiv");

// Form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     const emailInput = Form.elements.emailInput;
//     console.log(emailInput.value);
//     addUser(emailInput)
// });

// const addUser = (emailInput) =>{
//     const newUser = document.createElement("h6");
//     newUser.append(emailInput.value);
//     formUser.append(newUser)
// }


const colorChanger = document.querySelector('.colorChanger');
const formMainDiv = document.querySelector(".formMainDiv");
colorChanger.addEventListener('click', function () {
    const newColor = makeRandomColor();
    formMainDiv.style.backgroundColor = newColor;
})

const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    if(r>150 || g>150 || b>150){
        formMainDiv.style.color = "black";
    }else{
        formMainDiv.style.color = "white";

    }
    return `rgb(${r}, ${g}, ${b})`;
}
