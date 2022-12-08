// console.log("Testing 123...")


var pokeForm = document.querySelector("#pokeForm")

pokeForm.addEventListener("submit", function(event){
    event.preventDefault()
    // console.log("Success!")
    // console.log(pokeForm.children[0].value)

    let value = pokeForm.children[0].value
    fetch(`https://pokeapi.co/api/v2/pokemon/${value }`)
    .then(resp => resp.json())
    .then(data => {
        console.log(data);
        let image = data.sprites.front_default
        let imgDiv = document.querySelector('.img-div')
        imgDiv.innerHTML = `<img src="${image}" alt="pokemon image">`
        pokeForm.reset()
    })
    .catch(err => console.log(err))
})


// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
// .then(resp => resp.json())
// .then(data => {
//     // console.log(data)
//     //data.sprites.front_default is the value returned in data
//     let image = data.sprites.front_default
//     let imgDiv = document.querySelector('.img-div')
//     imgDiv.innerHTML = `<img src="${image}" alt="pokemon image">`
//         console.log(imgDiv)
//     })
//     .catch(err => console.log(err))