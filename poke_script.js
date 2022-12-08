// console.log("Testing 123...")



let imgDiv = document.querySelector('.img-div')

fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        imgDiv.innerHTML = '<img src="" alt="pokemon image">'
        console.log(imgDiv)
    })
    .catch(err => console.log(err))