const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

    //option 2 using async await
async function generateJoke(){
    const config = {headers:{
        'Accept': 'application/json'}
    }

const response = await fetch('https://icanhazdadjoke.com', config)
const data = await response.json()
jokeEl.innerHTML = data.joke
}


// original option using .then
// function generateJoke(){
//     const config = {headers:{
//         'Accept': 'application/json'}
//     }
//     fetch('https://icanhazdadjoke.com', config
    // {headers:{
    //     'Accept': 'application/json'}
    // }
    // )
    // .then((response) => response.json())
    // .then((data) => {jokeEl.innerHTML = data.joke})
    // console.log(data)
// }

