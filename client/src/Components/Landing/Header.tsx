import { Link } from "react-router-dom"
import { pagesNav, titlesLanding } from "../../Ui/Ui"
export function Header(){
    return (
        <header className="w-full h-20 border-b-2 border-red-600 px-4 py-2 flex
        items-center justify-between gap-2">
            <h1 className="text-4xl italic tracking-normal text-white w-1/6">{titlesLanding.main}</h1>
            <nav className="w-3/4 h-full">
                <ul className="flex list-none items-center justify-evenly w-full h-full">
                    {pagesNav.map((page, index) => (
                        <li key={index} className="w-1/4 h-full flex items-center justify-center">
                            <Link to={page.link} className="hover:underline hover:text-red-500 
                            transition-colors duration-200 text-lg">
                                {page.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}