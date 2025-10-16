import {Link} from 'react-router-dom'
export function Footer(){
    return (
        <footer className="w-full min-h-25 border-t-2 border-red-600 px-4 py-2 flex
        items-center justify-between gap-2">
            <div className="w-2/5 items-center h-full flex gap-3">
                <h4 className="text-lg italic tracking-normal text-white text-center
                flex gap-4">
                © 2025 The Octagon Data. Desarrollado por: <strong className='text-white'>JoseS-Dev</strong>
                </h4>
            </div>
            <div className="w-3/5 h-full flex items-center justify-around gap-3">
                <Link to={'/terms'} className='text-xl tracking-tighter
                hover:underline italic text-white transition-colors duration-300'>
                    Terminos y Condiciones</Link>
                <Link to={'/privacy'} className='text-xl tracking-tighter
                hover:underline italic text-white transition-colors duration-300'>
                    Politica de Privacidad</Link>
                <Link to={'/social'} className='text-xl tracking-tighter
                hover:underline italic text-white transition-colors duration-300'>
                    Redes Sociales</Link>
            </div>

        </footer>
    )
}