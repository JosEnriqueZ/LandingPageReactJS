import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { servicesData, aboutData, blogData, mision, vision, valores } from "../data/data";

export default function Details() {
    const { id, item } = useParams();
    const service = servicesData.find((each) => each.id === parseInt(id));
    useEffect(() => {
        window.scrollTo(0, 0); // Desplaza la página hacia arriba al renderizar el componente
    }, []);
    let content, titulo;
    if (item === "service") {
        content = service;
    } else if (item === "about") {
        content = aboutData;
    } else if (item === "news") {
        content = blogData;
    } else if (item === "mision") {
        content = mision;
    } else if (item === "vision") {
        content = vision;
    } else if (item === "valores") {
        content = valores;
        titulo = "Valores";
    } else {
        content = <p>Valor invalido</p>;
    }

    return (
        <section className="relative bg-slate-50 dark:bg-slate-800 py-16" id="details">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-6 text-left">
                    <h3 className="font-semibold text-3xl leading-normal mb-4">

                        {(item === "valores") ? (
                            <div id="">{titulo}</div>
                        ) : (
                            Array.isArray(content) ? (
                                content.filter(item => item.id === parseInt(id)).map((item) => (
                                    <div key={item.id}>
                                        {item.title}
                                    </div>
                                ))
                            ) : (
                                <>{content.title}</>
                            )
                        )
                        }
                    </h3>
                </div>

                <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-6 mt-6">
                    <div className="group rounded-md shadow dark:shadow-gray-700 relative bg-white dark:bg-slate-900 p-6 overflow-hidden h-fit">
                        <div className="content mt-6 relative z-1">
                            {Array.isArray(content) ? (
                                content.some(item => item.id === undefined) ? (
                                    content
                                        .filter(item => item.id === undefined)
                                        .map((item, index) => (
                                            <div key={index}>
                                                <strong>{item.title}</strong>: <br /> {item.desc.split('\n').map((line, index) => <React.Fragment key={index}>{line}<br /></React.Fragment>)}
                                            </div>
                                        ))
                                ) : (
                                    content
                                        .filter(item => item.id === parseInt(id))
                                        .map((item) => (
                                            <div key={item.id}>
                                                {item.desc.split('\n').map((line, index) => <React.Fragment key={index}>{line}<br /></React.Fragment>)}
                                            </div>
                                        ))
                                )
                            ) : (
                                <div className="text-justify">
                                    {content.desc.split('\n').map((line, index) => (
                                        <React.Fragment key={index}>
                                            {line.includes("Historia") ? (
                                                <span style={{ fontWeight: "bold" }}>{line}</span>
                                            ) : (
                                                line
                                            )}
                                            <br />
                                        </React.Fragment>
                                    ))}
                                </div>
                            )}


                        </div>
                    </div>

                    <div className="group rounded-md shadow dark:shadow-gray-700 relative bg-white dark:bg-slate-900 p-6 overflow-hidden h-fit">
                        <div className="content mt-6 relative z-1">
                            {/* <img src={content.img || content.image} alt={content.title} className="w-full h-auto" /> */}
                            {Array.isArray(content) ? (
                                content.some(item => item.id === undefined) ? (
                                    content
                                        .filter(item => item.id === undefined)
                                        .map((item, index) => (
                                            <div key={index}>
                                                <img src={item.img || item.image} className="w-full h-auto" />
                                            </div>
                                        ))
                                ) : (
                                    content
                                        .filter(item => item.id === parseInt(id))
                                        .map((item) => (
                                            <div key={item.id}>
                                                <img src={item.img || item.image} className="w-full h-auto" />
                                            </div>
                                        ))
                                )
                            ) : (
                                <img src={content.img || content.image} className="w-full h-auto" />
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
