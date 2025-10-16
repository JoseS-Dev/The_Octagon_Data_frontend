import { titlesLanding, cardsEvents, paragraphsLanding } from "../../Ui/Ui"
import { Link } from "react-router-dom"
export function Events(){
    return (
        <section id="Events" className="w-full min-h-175 flex border-b-2 border-red-600">
            <article className="w-1/2 h-full flex flex-col p-6 items-center gap-2.5 border-r-2
            border-red-600">
                <div className="w-full h-3/10 flex flex-col items-center border-b-2 border-red-600">
                    <h2 className="text-3xl pb-2 tracking-normal border-b-2 
                    border-red-600 w-full italic">
                        {titlesLanding.events}
                    </h2>
                    <p className="first-letter:text-2xl first-letter:text-red-600 text-lg
                    tracking-tighter p-4 text-justify">
                        {paragraphsLanding.events.first}
                    </p>
                </div>
                <div className="w-full h-7/10 flex flex-col items-center">
                    <div className="w-full h-10/12 p-2 flex items-center justify-evenly">
                        {cardsEvents.map((card, index) => (
                            <div key={index} className="w-3/10 h-11/12 border-2 border-red-600/50 p-2 
                            flex flex-col rounded-2xl items-center gap-1.5">
                                <figure className="w-full h-1/2 border-b-2 border-red-600 rounded-2xl
                                flex items-center justify-center">
                                    <card.Icon/>
                                </figure>
                                <h5 className="text-2xl italic tracking-normal">{card.titleCard}</h5>
                                <p className="text-md text-center tracking-tighter p-1">
                                    {card.descriptionCard}
                                </p>
                            </div>
                        ))}
                    </div>
                    <Link to={'/Events'} className="bg-red-900 w-2/5 h-16 flex items-center
                    justify-center text-white font-semibold rounded-2xl hover:bg-red-700
                    hover:scale-105 active:scale-95 transition-all duration-200">
                        Ver Todos los Eventos
                    </Link>
                </div>
            </article>
            <article className="w-1/2 h-full">
                <figure className="w-full h-full flex items-center justify-center bg-black">
                    <img alt="Events Image" src="../../public/Events.jpg" className="w-full
                    h-full object-fill opacity-60"/>
                </figure>
            </article>
        </section>
    )
}