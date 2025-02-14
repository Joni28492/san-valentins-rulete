import { useEffect, useRef, useState } from 'react';
import Ruleta from './assets/ruleta.png'
import Arrow from './assets/arrow.png';
import Swal from 'sweetalert2'
import { getPhrase } from './core/frases';


export const ValentinRouleteApp = () => {

    // 8 secciones, cada 45º

    const ruleteRef = useRef<HTMLImageElement>(null)
    

    const [sex, setSex] = useState<"hombre" | "mujer" | null>(null)
    const [rotation, setRotation] = useState<Number>(0)
    const [speed] = useState(4.5)
    const [frase, setFrase] = useState<string>("")

    useEffect(() => {
        
        setTimeout(() => {
            // setAngleDegrees(getDegrees)
            console.log("effect", rotation);
            if(!sex){
                setFrase("")
                return;
            } 
            const tempFrase = getPhrase(+rotation%360, sex)
            setFrase(tempFrase)
        }, (speed+1)*1000);

    }, [rotation])

  
    
    const pullRulete = () =>{

        if(sex === null){
            Swal.fire({
                title: 'Genero no seleccionado',
                text: 'Selecciona sexo!!! ',
                timer: 4000,
                background: 'pink',
            })
            return;
        }

        const random = Math.floor(Math.random()*100*360) 
        setRotation(random)

       

    }


    const handleResetFrase = () =>{
        setRotation(0)
        setFrase("")
        setSex(null)
    } 
        


    return (
        <main 
        style={{
            height: '120vh'
        }}
        className="container   flex flex-col  bg-pink-300">
            <header>
                <h1 className="mt-2 py-4 px-8 mb-5 text-pink-900 font-bold text-2xl">¿Seré tu San Valentin? 💔</h1>
            </header>



            <section className='flex justify-center mt-4'>
                <button 
                onClick={pullRulete}
                className="btn bg-pink-700 text-gray-300 font-bold border-2 w-56 h-20 rounded-md border-pink-700">
                    Dale a la rultea del amor!!!
                </button>
            </section>
            <section 
            style={{ marginTop: -35 }}
            className='flex flex-col items-center'>
                <img 
                src={Arrow} 
                className='h-18 w-24 rotate-90'
                style={{
                    position: 'relative',
                    top: 60,
                    left: -10,
                    zIndex: 1,
                }}
                alt="flecha que selecciona la opcion de la ruleta" />
                <img 
                className='flex items-center justify-center'
                ref={ruleteRef}
                style={{
                    transform: `rotate(-${rotation}deg)`, //ponemos el - para que rote en el sentido mas facil de calcular
                    transition: `transform ${speed}s ease-in-out`
                }}
                src={Ruleta} alt="ruleta san valentin" 
                />
            </section>


       
            <section style={{marginTop: -25}}
            className={`flex flex-col justify-center rounded  items-center mb-2 ${ (sex==='mujer') ? 'bg-pink-600' : 'bg-cyan-700' } py-4`}>
                <h3 className='text-md font-bold  text-gray-200'>
                {(frase.length !== 0) && frase }
                </h3>
            </section>
            
         

        <footer  className='flex flex-col justify-center items-center'>
            <h3 className='text-gray-200'>
                ¿Es un hombre o una mujer?
            </h3>
            <div className="flex flex-row justify-around mt-2">
                <button 
                onClick={()=>setSex('hombre')} 
                className="btn  text-xl bg-cyan-500 text-gray-300 font-bold border-2 w-24 h-16  rounded-md border-blue-500">
                    Hombre
                </button>
                <button 
                onClick={()=>setSex('mujer')}  
                className=" ml-2 btn bg-pink-400 text-xl text-gray-300 font-bold border-2 w-24 h-16  rounded-md border-pink-700">
                    Mujer
                </button>
            </div>
            <span className='text-xl'> Genero: {sex} </span>
            <button 
            className='btn bg-amber-500 p-2 rounded border-amber-200 border-2'
            onClick={handleResetFrase}>Reset</button>
        </footer>
    </main>
  )
}
