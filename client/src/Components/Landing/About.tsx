import { titlesLanding, paragraphsLanding } from "../../Ui/Ui"
export function About(){
    return (
        <section className="w-full min-h-145 flex">
            <article className="h-full p-6 w-1/2 flex flex-col items-center gap-2.5 border-r-2
            border-red-600">
                <div className="w-full h-2/5 flex flex-col items-center border-b-2 border-red-900">
                    <h2 className="text-3xl tracking-normal w-full border-b-2 
                    border-red-900 italic">
                        {titlesLanding.about.title}
                    </h2>
                    <p className="first-letter:text-2xl first-letter:text-red-600 text-lg 
                    tracking-tighter text-justify p-2">
                        {paragraphsLanding.about.first}
                    </p>
                </div>
                <div className="w-full h-3/5 border-b-2 border-red-600 flex flex-col items-center">
                    <h2 className="text-3xl tracking-normal w-full border-b-2
                    border-red-900 italic pb-2">{titlesLanding.about.why}</h2>
                    <p className="first-letter:text-2xl first-letter:text-red-600 text-lg
                    tracking-tighter text-justify p-2">
                        {paragraphsLanding.about.second}
                    </p>
                </div>
            </article>
            <article className="h-full w-1/2 flex">
                <figure className="w-full h-full flex items-center justify-center  bg-black">
                    <img alt="About Image" src="../../public/About.jpg" className="w-full
                    h-full object-fill opacity-60"/>
                </figure>
            </article>
        </section>
    )
}