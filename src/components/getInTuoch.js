import React from "react";
// import contact from '../assets/images/contact.svg'
import { useState } from 'react';
import contact from '../assets/images/contact.webp'

export default function GetInTouch(){
    const fromEmail ="notificacion@silingcorp.com.pe"
    const toEmail ="recursos.humanos@silingcorp.com.pe"
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        from: fromEmail,
        to: toEmail,
        subject: '',
        comments: ''
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://email.silingcorp.com.pe/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                },
                body: JSON.stringify(formData)
            });
            const result = await response.status === 200 ? { message: 'Mensaje enviado correctamente' } : { message: 'Error al enviar el mensaje' };
            alert(result.message);
        } catch (error) {
            console.error('Error:', error);
            alert('Error VALIDAR');
        }
    };
    return(
        <section className="relative lg:py-24 py-16 bg-slate-50 dark:bg-slate-800" id="contact">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h3 className="font-semibold text-2xl leading-normal mb-4">CONTACTANOS </h3>
                    {/* TEXTO CONTACTANOS     */}
                    
                    <p className="text-slate-800 max-w mx-auto">
                    Área de gerencia   (gerencia@silingcorp.com.pe)</p>

                    <p className="text-slate-700 max-w- mx-auto">
                    Área comercial (Cotización/Servicios)     (comercial@silingcorp.com.pe)</p>                 

                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
                    <div className="lg:col-span-7 md:col-span-6">
                        <img src={contact} alt=""/>
                    </div>

                    <div className="lg:col-span-5 md:col-span-6">
                        <div className="lg:ms-5">
                            <div className="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700 p-6">
                                <form onSubmit={handleSubmit}>
                                    <div className="grid lg:grid-cols-12 grid-cols-1 gap-3">
                                        <div className="lg:col-span-6">
                                            <label htmlFor="firstname" className="font-semibold">Nombre:</label>
                                            <input name="firstname" id="firstname" type="text" value={formData.firstname} onChange={handleChange}  className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Nombre :"/>
                                        </div>
                                        <div className="lg:col-span-6">
                                            <label htmlFor="lastname" className="font-semibold">Apellido:</label>
                                            <input name="lastname" id="lastname" type="text" value={formData.lastname} onChange={handleChange} className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Apellido :"/>
                                        </div>
                                        <div className="lg:col-span-6">
                                            <label htmlFor="phone" className="font-semibold">Celular:</label>
                                            <input name="phone" id="phone" type="text"  value={formData.phone} onChange={handleChange} className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Celular :"/>
                                        </div>
        
                                        <div className="lg:col-span-6">
                                            <label htmlFor="email" className="font-semibold">Correo Electronico:</label>
                                            <input name="email" id="email" type="email"  value={formData.email} onChange={handleChange} className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Correo Electronico :"/>
                                        </div>

                                        <div className="lg:col-span-12">
                                            <label htmlFor="subject" className="font-semibold">Pregunta:</label>
                                            <input name="subject" id="subject" value={formData.subject} onChange={handleChange} className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Asunto :"/>
                                        </div>
    
                                        <div className="lg:col-span-12">
                                            <label htmlFor="comments" className="font-semibold">Comentario:</label>
                                            <textarea name="comments" id="comments" value={formData.comments} onChange={handleChange} className="mt-2 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Mensaje :"></textarea>
                                        </div>
                                    </div>
                                    <button type="submit" id="submit" name="send" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500 text-white mt-2">Enviar Mensaje</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 text-center">
                    <h3 className="font-semibold text-2xl leading-normal mb-4">TRABAJA CON NOSOTROS</h3>
                    <p className="text-slate-600 max-w- mx-auto">
                    Envianos tu CV a recursos.humanos@silingcorp.com.pe</p>                    
                </div>
            </div>
        </section>
    )
}