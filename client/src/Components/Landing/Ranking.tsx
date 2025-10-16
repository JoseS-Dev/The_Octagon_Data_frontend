import { Link } from "react-router-dom"
import { titlesLanding, paragraphsLanding } from "../../Ui/Ui"
export function Ranking(){
    return (
        <section id="Ranking" className="w-full min-h-225 flex flex-col border-b-2
        border-red-600">
            <article className="w-full h-full">
                <figure className="w-full h-full flex items-center justify-center bg-black
                relative">
                    <img alt="Ranking Image" src="../../public/Ranking.jpg" className="w-full
                    h-full opacity-35"/>
                    <div className="z-10 absolute w-1/2 h-1/2 left-6 top-25 shadow-lg/30 shadow-black
                    p-4 flex flex-col items-center justify-evenly bg-black/30 rounded-2xl">
                        <div className="w-full h-2/5 flex flex-col items-center border-b-2 
                        border-red-600">
                            <h2 className="text-4xl w-full italic text-white/90 border-b-2 
                            border-red-600">
                                {titlesLanding.ranking}
                            </h2>
                            <p className="first-letter:text-2xl first-letter:text-red-600
                            text-lg text-justify tracking-tighter p-4">
                                {paragraphsLanding.ranking.first}
                            </p>
                        </div>
                        <Link to={'/Ranking'} className="bg-red-900 w-2/5 h-16 flex items-center
                        justify-center text-white font-semibold rounded-2xl hover:bg-red-700
                        hover:scale-105 active:scale-95 transition-all duration-200">
                            Ver el Ranking Completo
                        </Link>
                    </div>
                </figure>
            </article>
        </section>
    )
}