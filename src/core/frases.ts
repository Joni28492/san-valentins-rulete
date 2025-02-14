const frasesObj = {

    "hombre": {
        "virgen": [
            "Tu virginidad está más segura que mi cuenta bancaria. 💰",
            "Ni con un hechizo de amor consigues algo hoy. 🔮" 
        ],
        "dinero": [
            "¿Cuánto ganas al mes? Pregunta seria. 🤔",
            "Si tu cartera está vacía, mi corazón también. 💔" 
        ],
        "friendzone": [
            "Eres el hermano que nunca pedí. 🫂", 
            "Te quiero... pero como amigo. 🫂" 
        ],
        "animales": [
            "Prefiero quedarme con mi gato, lo siento. 🐱",
            "Mi perro dice que no confía en ti. 🐕" 
        ],
        "comida": [
            "¿Me invitas a cenar? Si no, la respuesta es no. 🍽️",
            "El amor se compra con pizza, no con palabras. 🍕" 

        ],
        "mental": [
            "Mi terapeuta dice que no es buena idea. 🛑", 
            "Lo siento, pero ya tengo suficiente locura en mi vida. 🤪" 
        ],
        "muerte": [
            "Antes prefiero ser enterrada viva. ⚰️",
             "Nuestro amor duraría menos que mi paciencia. ⏳" 
        ],
        "404": [
            "Error 404: Sentimientos no encontrados. 🚫",
            "Tu solicitud ha sido denegada por el sistema. 🖥️" 

        ],
    },

    //! seccion mujer
    "mujer": {
        "virgen": [
            "Virgen y orgullosa, como un tesoro sin reclamar. 🏆", 
            "Lo siento, pero no acepto solicitudes de principiantes. 🚫" 
        ],
        "dinero": [
            "Acepto amor... pero solo si viene con un yate. 🚤",
            "Romántico y con dinero, o solo amigos. 🤷‍♀️" 
        ],
        "friendzone": [
            "Eres como un hermano para mí, bro. 🏀",
            "Podemos ver películas... como amigos, claro. 🍿" 
        ],
        "animales": [
            "Si no amas a los gatos, no puedes amarme a mí. 🐾", 
            "Los peces en el mar tienen más suerte que tú. 🐟" 
        ],
        "comida": [
            "Dame chocolates y lo pensamos. 🍫" ,
            "Entre tú y una hamburguesa, elijo la hamburguesa. 🍔" 
        ],
        "mental": [
            "¿Puedes pagar mis sesiones de terapia? Entonces hablamos. 💵",
            "Primero consulta con mi psiquiatra, luego vemos. 🧠" 

        ],
        "muerte": [
            "Mi amor murió antes de empezar. 🪦",
            "Si el amor fuera veneno, ya estarías en mi testamento. ☠️" 
        ],
        "404": [
            "Este amor no corresponde, intenta con otra cuenta. ❌",
            "Servidor del amor caído, inténtelo más tarde. ⏳" 

        ],
    },


}



   // 8 secciones, cada 45º
export const getPhrase = (degree:number, sex:"hombre"|"mujer"):string =>{
    let frase:string = ''
    const random:number = Math.round(Math.random()*10)
    const index:number = (random%2 === 0) ? 0 : 1

    if(degree >=0 && degree<=45) frase = frasesObj[sex]["comida"][index];
    
    if(degree >=46 && degree<=90) frase = frasesObj[sex]["animales"][index];
    
    if(degree >=91 && degree<=135) frase = frasesObj[sex]["friendzone"][index];

    if(degree >=136 && degree<=180) frase = frasesObj[sex]["dinero"][index];
    if(degree >=181 && degree<=225) frase = frasesObj[sex]["virgen"][index];
    if(degree >=226 && degree<=270) frase = frasesObj[sex]["404"][index];
    if(degree >=271 && degree<=315) frase = frasesObj[sex]["muerte"][index];
    if(degree >=316 && degree<=359) frase = frasesObj[sex]["mental"][index];


    return frase
}



