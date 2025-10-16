import { Header } from "../Components/Landing/Header"
import { Banner } from "../Components/Landing/Banner"
import { About } from "../Components/Landing/About"
import { Fighters } from "../Components/Landing/Fighters"
export function Landing() {
    return (
        <div className="w-full h-screen flex flex-col items-center">
            <Header/>
            <Banner/>
            <About/>
            <Fighters/>
        </div>
    )
}