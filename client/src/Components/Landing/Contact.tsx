
import { useState } from "react"

export function Contact() {
    const [nameContact, setNameContact] = useState('');
    const [lastNameContact, setLastNameContact] = useState('');
    const [emailContact, setEmailContact] = useState('');
    const [phoneContact, setPhoneContact] = useState('');
    const [messageContact, setMessageContact] = useState('');

    // Handle para mandar el formulario
    /*const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if(!nameContact || !lastNameContact || !emailContact || !phoneContact || !messageContact){
            swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor, completa todos los campos del formulario.',
            })
        }
        const ContactForm = {
            name_contact: nameContact,
            last_name_contact: lastNameContact,
            email_contact: emailContact,
            phone_contact: phoneContact,
            message_contact: messageContact,
        }
        try {
            emailjs.send(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                ContactForm,
                import.meta.env.VITE_PUBLIC_KEY
            ).then((response) => {
                console.log('Correo enviado', response.status, response.text);
                swal.fire({
                    icon: 'success',
                    title: 'Correo enviado',
                    text: 'Tu correo ha sido enviado exitosamente. ¡Gracias por contactarme!',
                })
                setNameContact('');
                setLastNameContact('');
                setEmailContact('');
                setPhoneContact('');
                setMessageContact('');
            }).catch((error) => {
                console.log(error);
                swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Hubo un problema al enviar el correo. Por favor, inténtalo de nuevo más tarde.',
                })
            })
        }
        catch(error){
            swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hubo un problema al enviar el correo. Por favor, inténtalo de nuevo más tarde.',
            })
        }
    }*/
    
    
    return (
        <section id="Contact" className="w-full min-h-[36rem] flex flex-col lg:flex-row gap-4">
            <article className={`w-full lg:w-3/5 h-full p-6 scroll-animate`}>
                <form className="w-full h-full flex flex-col items-center gap-2">
                    <h2 className="text-2xl md:text-3xl border-b-2 border-red-600 w-full tracking-tighter italic text-center md:text-left">
                        Si tienes alguna duda o consulta, no dudes en contactarme
                    </h2>
                    <div className="w-full border-b-2 border-red-600 flex flex-col md:flex-row items-center gap-2 md:gap-1.5 p-2">
                        <div className="w-full md:w-1/2 flex flex-col items-center p-1.5">
                            <label className="text-lg md:text-xl tracking-tighter w-full border-b-2 border-red-600">Nombre</label>
                            <input
                                type="text"
                                className="w-full h-12 md:h-16 border-2 border-l-0 border-red-600 p-1 text-base md:text-lg tracking-tighter italic placeholder:italic placeholder:text-gray-500 focus:outline-none focus:border-red-700"
                                placeholder="Escribe tu nombre"
                                value={nameContact}
                                onChange={(e) => setNameContact(e.target.value)}
                                name="name_contact"
                            />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col items-center p-1.5">
                            <label className="text-lg md:text-xl tracking-tighter w-full border-b-2 border-red-600">Apellido</label>
                            <input
                                type="text"
                                className="w-full h-12 md:h-16 border-2 border-l-0 border-red-600 p-1 text-base md:text-lg tracking-tighter italic placeholder:italic placeholder:text-gray-500 focus:outline-none focus:border-red-700"
                                placeholder="Escribe tu apellido"
                                value={lastNameContact}
                                onChange={(e) => setLastNameContact(e.target.value)}
                                name="last_name_contact"
                            />
                        </div>
                    </div>
                    <div className="w-full border-b-2 border-red-500 flex flex-col md:flex-row items-center p-2 gap-2 md:gap-0">
                        <div className="w-full md:w-1/2 flex flex-col items-center p-1.5">
                            <label className="text-lg md:text-xl tracking-tighter w-full border-b-2 border-red-500">Correo</label>
                            <input
                                type="text"
                                className="w-full h-12 md:h-16 border-2 border-l-0 border-red-500 p-1 text-base md:text-lg tracking-tighter italic placeholder:italic placeholder:text-gray-500 focus:outline-none focus:border-red-700"
                                placeholder="Escribe tu correo"
                                value={emailContact}
                                onChange={(e) => setEmailContact(e.target.value)}
                                name="email_contact"
                            />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col items-center p-1.5">
                            <label className="text-lg md:text-xl tracking-tighter w-full border-b-2 border-red-500">Número de teléfono</label>
                            <input
                                type="text"
                                className="w-full h-12 md:h-16 border-2 border-l-0 border-red-500 p-1 text-base md:text-lg tracking-tighter italic placeholder:italic placeholder:text-gray-500 focus:outline-none focus:border-red-700"
                                placeholder="Escribe tu número de teléfono"
                                value={phoneContact}
                                onChange={(e) => setPhoneContact(e.target.value)}
                                name="phone_contact"
                            />
                        </div>
                    </div>
                    <div className="w-full flex flex-col md:flex-row items-center p-2 gap-2 md:gap-0">
                        <div className="w-full md:w-1/2 flex flex-col items-center p-1.5">
                            <label className="text-lg md:text-xl tracking-tighter w-full border-b-2 border-red-500">Asunto</label>
                            <textarea
                                className="w-full h-24 md:h-32 border-2 border-l-0 border-red-500 p-1 text-base md:text-lg tracking-tighter italic placeholder:italic placeholder:text-gray-500 focus:outline-none focus:border-red-700"
                                placeholder="Escribe el asunto"
                                value={messageContact}
                                onChange={(e) => setMessageContact(e.target.value)}
                                name="message_contact"
                            ></textarea>
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
                            <button
                                type="submit"
                                className="bg-red-900 w-3/5 h-16 flex items-center cursor-pointer
                                justify-center text-white font-semibold rounded-2xl hover:bg-red-700
                                hover:scale-105 active:scale-95 transition-all duration-200"
                            >
                                Enviar
                            </button>
                        </div>
                    </div>
                </form>
            </article>
            <article className="w-full lg:w-2/5 h-full flex items-center justify-center scroll-animate 
            border-l-2 border-red-600">
                <figure className="w-full h-full flex items-center justify-center bg-black">
                    <img alt="Contact Image" src="/Contact.png" className="w-full
                    h-full object-fill opacity-55"/>
                </figure>
            </article>
        </section>
    )
}