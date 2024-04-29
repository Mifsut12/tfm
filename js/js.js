//Aqui se cargarian los datos de los juegos y estos serian insertados en el html.
let tablas = document.querySelector("#tablas")
//Un array de videojuegos

 let videojuegos = [
     {
         nombre: "Mario_Odyssey",
         tipo: "Plataforma",
         duracion: "45 horas",
         jugabilidad: 100,
         controles: 100,
         graficos: 100,
         dificultad: 80
     },

     {
         nombre: "The_Legend_of_Zelda_Breath_of_the_Wild",
         tipo: "Aventura",
         duracion: "70 horas",
         jugabilidad: 100,
         controles: 100,
         graficos: 91,
         dificultad: 90,
     },

     {
         nombre: "Metroid_Dread",
         tipo: "Acción",
         duracion: "15 horas",
         jugabilidad: 87,
         controles: 100,
         graficos: 100,
         dificultad: 92
     },

     {
         nombre: "Kirby_y_la_tierra_olvidada",
         tipo: "Aventura",
         duracion: "30 horas",
         jugabilidad: 88,
         controles: 100,
         graficos: 100,
         dificultad: 67
     },

     {
         nombre: "Pikmin_4",
         tipo: "Estratégia",
         duracion: "35 horas",
         jugabilidad: 89,
         controles: 100,
         graficos: 100,
         dificultad: 55

        
     },
    
     {
         nombre: "Monster_Hunter_Rise",
         tipo: "RPG",
         duracion: "100 horas",
         jugabilidad: 95,
         controles: 100,
         graficos: 90,
         dificultad: 75

        
     },
 ]

if(videojuegos.length != 0){
    //Calculo de la media para la puntuación final de cada videojuego

let listaPuntuacionMedia = [];


//Rellenar ese arraigo
videojuegos.forEach(function(videojuego,i){
    let media = 0
    media = (videojuegos[i].jugabilidad + videojuegos[i].controles + videojuegos[i].graficos + videojuegos[i].dificultad) / 4
    listaPuntuacionMedia.push(media)
})

//Obtener el ultimo videojuego de la lista(Este en teoría es la última valoración)
const ultimoVideojuego = videojuegos.pop()
//Obtener la puntuación del ultimo videojuego.
const puntuacionVideojuegoFinal = listaPuntuacionMedia.pop()




//Ya se tienen todos los datos de los videojuegos, se procede a rellenar el html.

//Buscar el tag a rellenar.



videojuegos.forEach(function(videojuego, i){


    tablas.innerHTML += `<div class="main-valoracion">
    <p> ${videojuegos[i].nombre}</p>
    <p class="main-valoracion-tablas-p">Tipo:${videojuegos[i].tipo}</p>
    <p> Duración: ${videojuegos[i].duracion}
    <table>
        <tr>
            <th>Aspecto</th>
            <th>Puntuación</th>
        </tr>

        <tr>
            <td>Jugabilidad</td>
            <td>${videojuegos[i].jugabilidad}</td>
        </tr>

        <tr>
            <td>Controles</td>
            <td>${videojuegos[i].controles}</td>
        </tr>

        <tr>
            <td>Gráficos</td>
            <td>${videojuegos[i].graficos}</td>
        </tr>
        
        <tr>
            <td>Dificultad</td>
            <td>${videojuegos[i].dificultad}</td>
        </tr>

        <tr>
            <td>Puntuación final</td>
            <td>${listaPuntuacionMedia[i]}</td>
        </tr>
    </table>
    </div>` 
})


//Implementar funcionalidad de ultima valoración


let ultimaValoracion = document.querySelector("#ultima_valoracion")

ultimaValoracion.innerHTML += `<h2>Valoración más reciente </h2>
<div class = "flecha_abajo_blanca"> <h2> &darr; </h2></div>

<p> ${ultimoVideojuego.nombre}</p>
    <p class="main-valoracion-tablas-p">Tipo:${ultimoVideojuego.tipo}</p>
    <p> Duración: ${ultimoVideojuego.duracion}
<table>
        <tr>
            <th>Aspecto</th>
            <th>Puntuación</th>
        </tr>

        <tr>
            <td>Jugabilidad</td>
            <td>${ultimoVideojuego.jugabilidad}</td>
        </tr>

        <tr>
            <td>Controles</td>
            <td>${ultimoVideojuego.controles}</td>
        </tr>

        <tr>
            <td>Gráficos</td>
            <td>${ultimoVideojuego.graficos}</td>
        </tr>
        
        <tr>
            <td>Dificultad</td>
            <td>${ultimoVideojuego.dificultad}</td>
        </tr>

        <tr>
            <td>Puntuación final</td>
            <td>${puntuacionVideojuegoFinal}</td>
        </tr>
    </table>
`

//Caso de que no haya videojuegos
}else{
    tablas.innerHTML += `<div class="main-valoracion">
    <h2> Ninguna valoración ha sido publicada</h2>`
}






