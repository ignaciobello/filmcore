//ARRAY CON OBJETOS



// API CON MAP

/* let contenedorPersonajes = document.getElementById('personajes'); //trae lo que hay en <div id="personajes"></div>

fetch('https://rickandmortyapi.com/api/character')
.then((response) => response.json())
.then((data) => {

console.log(data)

data.results.map((elemento) => {

    const contenedorCreado = document.createElement("div")
    contenedorCreado.innerHTML = 

        `<h4>${elemento.name}</h4>
        <img src="${elemento.image}"> `;

        contenedorPersonajes.append(contenedorCreado)
        
        })

})
 */


//API CON FOREACH

/* 

let contenedorPersonajes = document.getElementById("personajes")

fetch("https://rickandmortyapi.com/api/character")
.then((response)=>response.json())
.then((datos)=>{

    console.log(datos)
    console.log(datos.results)

    datos.results.forEach((elementos) => {
        // console.log(elementos.name)

        const contenedorCreado = document.createElement('div')

        contenedorCreado.innerHTML = `
            <h4>${elementos.name}</h4>
            <img src="${elementos.image}">
            
        `;


       contenedorPersonajes.append(contenedorCreado)


    });

})
/*




let contenedorPersonajes = document.getElementById("personajes")

fetch("https://rickandmortyapi.com/api/character")
.then((response)=>response.json())
.then((datos)=>{

    console.log(datos)
    console.log(datos.results)

    datos.results.forEach((elementos) => {
        // console.log(elementos.name)

        const contenedorCreado = document.createElement('div')

        contenedorCreado.innerHTML = `
            <h4>${elementos.name}</h4>
            <img src="${elementos.image}">
            
        `;


       contenedorPersonajes.append(contenedorCreado)


    });

})



/* 
async function GetCharacters() {
    const people = fetch("https://swapi.dev/api/films/2/").then(data => {
      return data.json();
    }).then(films => {
      console.log(films.characters)
    })
  
    for (let i = 0; i < people.length; i++) {
      const request = await fetch(film.characters[i]);
      const character = await request.json();
      console.log(character.name)
      console.log(character.gender)
      console.log(character.birth_year)
    }
  }
  
  GetCharacters() */


/*

  function GetCharacters() {
    fetch("https://swapi.dev/api/films/2/")
    .then(d => d.json())
    .then(films => {
      films.characters.forEach(url => {
        fetch(url).then(d => d.json()).then(character => {
          console.log(character.name, character.gender, character.birth_year);
          // work with the character data here...
         
        })
      })
    })
  }
  
  GetCharacters()

  */

/* 
let contenedorPersonajes = document.getElementById("personajes")

fetch("https://rickandmortyapi.com/api/character")
.then((response)=>response.json())
.then((datos)=>{

    

    datos.results.forEach((elementos) => {
        // console.log(elementos.name)

        const contenedorCreado = document.createElement('div')

        contenedorCreado.innerHTML = `
            
            <h4>Nombre: ${elementos.name} </h4>
            <h4>Especie: ${elementos.species}</h4>
            <h4>Género: ${elementos.gender}</h4>
            
            <img src="${elementos.image}">
            
        `;


       contenedorPersonajes.append(contenedorCreado)


    });

}) 

 */

//API FUNCIONA

let contenedorPersonajes = document.getElementById("personajes")

fetch("https://swapi.dev/api/people/")
.then((response)=>response.json())
.then((datos)=>{

    

    datos.results.forEach((elementos) => {
        // console.log(elementos.name)

        const contenedorCreado = document.createElement('div')

        contenedorCreado.innerHTML = `
            
            <h2> ${elementos.name} </h2>
            <h4>Color de pelo: ${elementos.hair_color} </h4>
            <h4>Altura en cm: ${elementos.height} </h4>
            <h4>Color de piel: ${elementos.skin_color} </h4>
            <h4>Color de ojos: ${elementos.eye_color} </h4>
            <h4>Año de nacimiento: ${elementos.birth_year} </h4>
            <hr>
            
        `;


       contenedorPersonajes.append(contenedorCreado)


    });

}) 