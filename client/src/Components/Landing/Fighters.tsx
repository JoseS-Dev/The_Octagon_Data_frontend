import { cardsFighters, paragraphsLanding } from "../../Ui/Ui"
export function Fighters(){
    return(
        <section className="w-full min-h-175 flex">
            <article className="w-1/2 h-full flex flex-col items-center border-r-2
            border-red-600">
                <figure className="w-full h-full flex items-center justify-center bg-black">
                    <img alt="Fighters Image" src="../../public/Fighters.jpg" className="w-full
                    h-full object-fill opacity-60"/>
                </figure>
            </article>
            <article className="w-1/2 h-full p-4 flex flex-col items-center gap-2.5">
                <h2 className="text-3xl tracking-normal w-full pb-2 border-b-2
                border-red-600 italic">¿Que información se puede encontrar sobre los peleadores?</h2>
                <div className="w-full h-11/12 flex flex-col
                items-center gap-1.5">
                    <p className="first-letter:text-2xl first-letter:text-red-600
                    text-lg text-justify tracking-tighter p-3 border-b-2 border-red-600">
                        {paragraphsLanding.fighters.first}
                    </p>
                    <div className="w-full h-4/5 flex items-center 
                    justify-evenly">
                        {cardsFighters.map((card, index) => (
                            <div key={index} className="w-3/10 h-4/5 border-2 border-red-600/50 
                            rounded-2xl p-2 flex flex-col items-center gap-1.5">
                                <figure className="w-full h-1/2 border-b-2 border-red-600 rounded-2xl 
                                flex items-center justify-center">
                                    <card.Icon/>
                                </figure>
                                <h5 className="text-2xl tracking-normal italic">{card.titleCard}</h5>
                                <p className="text-md text-center tracking-tighter">
                                    {card.descriptionCard}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </article>
        </section>
    )
}