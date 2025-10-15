import { Header } from "../Components/Landing/Header"
import { Banner } from "../Components/Landing/Banner"
export function Landing() {
    return (
        <div className="w-full h-screen flex flex-col">
            <Header/>
            <Banner/>
        </div>
    )
}