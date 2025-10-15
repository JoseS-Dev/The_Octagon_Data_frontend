import { Link } from "react-router-dom"
export function Banner(){
    return (
        <section className="w-full h-11/12 relative">
            <figure className="w-full h-full flex flex-col items-center justify-center 
            bg-black">
                <img alt="Banner Image" src="../../public/UFC-banner.jpg" className="w-full
                h-full object-fill opacity-60"/>
                <div className="z-10 absolute w-3/5 h-2/5 mb-15 flex
                flex-col items-center gap-2.5 p-2">
                    <div className="w-full h-2/5 flex flex-col items-center gap-2.5">
                        <h2 className="text-8xl italic flex gap-2.5">Bienvenido a 
                        <strong className="text-red-600">Octagon Data</strong></h2>
                        <span className="text-3xl  text-white/80">
                            Tu fuente Confiable para las estadisticas de la UFC
                        </span>
                    </div>
                    <div className="w-full h-3/5 flex items-center justify-evenly px-2.5">
                        <Link to={'/Login'} className="bg-red-900 w-2/5 h-2/5 flex items-center
                        justify-center text-white font-semibold rounded-2xl hover:bg-red-700
                        hover:scale-105 active:scale-95 transition-all duration-200">
                            Iniciar Sesión
                        </Link>
                        <Link to={'/Register'} className="bg-red-900 w-2/5 h-2/5 flex items-center
                        justify-center text-white font-semibold rounded-2xl hover:bg-red-700
                        hover:scale-105 active:scale-95 transition-all duration-200">
                            Registrarse
                        </Link>
                    </div>
                </div>
            </figure>
        </section>
    )
}