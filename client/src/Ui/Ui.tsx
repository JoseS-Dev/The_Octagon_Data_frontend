import { ChartNetwork, Star, HandFist } from "lucide-react"
// Cursiva de Octagon Data
const ItalicTitle = () => <i>Octagon Data</i>
// Lista de paginas del nav
export const pagesNav = [
    {name: 'Sobre Nosotros', link: '#About'},
    {name: 'Peleadores', link: '#Fighters'},
    {name: 'Eventos', link: '#Events'},
    {name: 'Ranking', link: '#Ranking'},
    {name: 'Contáctanos', link: '#Contact'},
]
// Titulos de la landing
export const titlesLanding = {
    main: 'Octagon Data',
    about: {
        title: 'Sobre Nosotros',
        why: '¿Por qué Octagon Data?'
    }
    
}
// Cartas de la seccion de peleadores
export const cardsFighters = [
    {
        Icon: () => <><ChartNetwork className="w-35 h-35"/></>,
        titleCard: 'Estadisticas',
        descriptionCard: `Consulta estadisticas detalladas de cada peleador, incluyendo
        victorias, derrotas, empates, nocauts, sumisiones y decisiones.`
    },
    {
        Icon: () => <><Star className="w-35 h-35"/></>,
        titleCard: 'Favoritos',
        descriptionCard: `Coloca a tus peleadores favoritos en una lista para que otras personas
        puedan ver cuales son los peleadores mas populares entre los usuarios.`
    },
    {
        Icon: () => <><HandFist className="w-35 h-35"/></>,
        titleCard: 'Peleas',
        descriptionCard: `Accede al historial completo de peleas de cada luchador, incluyendo
        detalles de cada combate y resultados.`
    }
]
// Parrafos de secciones
export const paragraphsLanding = {
    about: {
        first: () => <>En <ItalicTitle /> nos dedicamos a proporcionar estadisticas
        detalladas y precisas sobre los luchadores de la UFC
        y sus eventos, combates y resultados a nivel mundial. Nuestro objetivo
        es ser la fuente confiable para los aficionados de la UFC, ofreciendo
        datos actualizados y análisis profundos de cada pelea y luchador. Además,
        de compartir información con otros usuarios, mediante comunidades
        en línea donde se fomente el debate y el intercambio de conocimientos.</>,

        second: () => <> <ItalicTitle /> Surge como idea de un fanático de la UFC que es la persona
        detrás de este proyecto, con el objetivo de crear una plataforma donde los
        aficionados puedan acceder a estadísticas detalladas y precisas sobre los
        luchadores de la UFC y sus eventos. La idea es ofrecer una experiencia
        enriquecedora para los usuarios, permitiéndoles explorar datos históricos,
        análisis de combates y perfiles de luchadores, todo en un solo lugar.
        Además, se busca fomentar una comunidad activa donde los usuarios puedan
        compartir sus opiniones y conocimientos sobre el deporte. Además dicha persona
        considera este proyecto como una oportunidad para aprender y mejorar sus 
        habilidades en desarrollo web y manejo de bases de datos, aplicando sus
        conocimientos en un proyecto real y significativo como este.`</>
    },
    fighters: {
        first: `En nuestra plataforma, puedes encontrar una amplia gama de información
        detallada sobre los peleadores de la UFC. Esto incluye estadísticas de
        combate, historial de peleas, biografía, estilo de lucha, y mucho más.
        Además, podras colocar a tus peleadores favoritos en una lista para que otras
        personas puedan ver cuales son los peleadores mas populares entre los usuarios.`
    }
}