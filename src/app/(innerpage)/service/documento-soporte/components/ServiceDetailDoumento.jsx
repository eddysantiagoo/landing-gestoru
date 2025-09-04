import Image from "next/image";

const ServiceDetailDoumento = () => {
    return (
        <div className="service-details-section">
        <div className="service-details-container-wrapper section-padding fix">
            <div className="container">
                <div className="service-details-wrapper">
                    <div className="main-thumb img-custom-anim-right wow fadeInLeft" data-wow-delay=".3s">
                    <Image src="/assets/images/services/servicesDetailsThumb1_1.jpg" alt="img" width={1410} height={646}   />
                    </div>
                    <h2 className="title wow fadeInUp" data-wow-delay=".3s">Documento Soporte DIAN 2022 - Numeración autorizada por la DIAN</h2>
                    <div className="tagcloud">
                        <div className="tag">
                            <a href="#">DIAN 2022</a>
                        </div>
                        <div className="tag">
                            <a href="#">Documento Soporte</a>
                        </div>
                        <div className="tag">
                            <a href="#">Deducciones</a>
                        </div>
                        <div className="tag">
                            <a href="#">Tributario</a>
                        </div>
                    </div>
                    <div className="details-box1">
                        <h3 className="subtitle wow fadeInUp" data-wow-delay=".3s">
                            ¿Qué es el documento soporte?
                        </h3>
                        <div className="row gy-3">
                            <div className="col-xl-7">
                                <p className="text wow fadeInUp" data-wow-delay=".3s">Es el documento que usas para acreditar la compra de un bien o servicio, y que debe generar el comprador cuando hace transacciones con un proveedor que no está obligado a expedir factura de venta o documento equivalente.</p>
                            </div>
                            <div className="col-xl-5">
                                <p className="text wow fadeInUp" data-wow-delay=".5s">Con Gestoru podrás expedir tus documentos soporte con numeración autorizada por la DIAN, cuando el proveedor o prestador del servicio no está obligado a facturar.</p>
                            </div>
                        </div>
                    </div>
                    <div className="details-box2">
                        <h3 className="subtitle wow fadeInUp" data-wow-delay=".3s">
                            ¿Qué beneficios tiene expedir el documento soporte?
                        </h3>
                        <div className="row gy-3">
                            <div className="col-xl-6">
                                <div className="feature-wrapper wow fadeInUp" data-wow-delay=".3s">
                                    <ul className="feature">
                                        <li>Costos, deducciones, o impuestos descontables</li>
                                        <li>Envío ágil y sencillo del documento soporte</li>
                                        <li>Informe en formato PDF descargable</li>
                                    </ul>
                                    <ul className="feature">
                                        <li>Usar el costo o deducción en la declaración de renta</li>
                                        <li>Obtener devoluciones automáticas y declaraciones sugeridas</li>
                                        <li>Información de costos, deducciones e impuestos descontables a la DIAN</li>
                                    </ul>
                                </div>

                            </div>
                            <div className="col-xl-6">
                                <div className="progress-wrap">
                                    <div className="progress-meta">
                                        <div className="title">Cumplimiento DIAN</div>
                                        <div className="percentage">100%</div>
                                    </div>
                                    <div className="progress-container">
                                        <div className="progress-bar" >
                                           
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-wrap mb-0">
                                    <div className="progress-meta">
                                        <div className="title">Beneficios Tributarios</div>
                                        <div className="percentage">100%</div>
                                    </div>
                                    <div className="progress-container">
                                        <div className="progress-bar" >
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="thumb-wrapper">
                            <div className="row gy-3">
                                <div className="col-xl-6">
                                    <div className="thumb img-custom-anim-left wow fadeInUp" data-wow-delay=".3s">
                                    <Image src="/assets/images/services/servicesDetailsThumb1_2.jpg" alt="img" width={690} height={328}   />
                                        </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="thumb  img-custom-anim-left wow fadeInUp" data-wow-delay=".3s">
                                    <Image src="/assets/images/services/servicesDetailsThumb1_3.jpg" alt="img" width={690} height={328}   />
                                        </div>
                                </div>
                            </div>
                        </div>
                        <p className="text1 wow fadeInUp" data-wow-delay=".3s">
                            Te permite documentar las operaciones cuando se realizan con proveedores no obligados a emitir factura o documento equivalente. Así soportas adecuadamente costos, deducciones, o impuestos descontables en estas adquisiciones.
                        </p>
                        <p className="text2 wow fadeInUp" data-wow-delay=".5s">
                            Con Gestoru podrás expedir tus documentos soporte con numeración autorizada por la DIAN 2022, garantizando el cumplimiento total de la normativa tributaria y maximizando tus beneficios fiscales de manera legal y segura.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
};

export default ServiceDetailDoumento;