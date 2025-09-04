import Image from "next/image";

const ServiceDetailsFacturacion = () => {
    return (
        <div className="service-details-section">
        <div className="service-details-container-wrapper section-padding fix">
            <div className="container">
                <div className="service-details-wrapper">
                    <div className="main-thumb img-custom-anim-right wow fadeInLeft" data-wow-delay=".3s">
                    <Image src="/assets/images/services/servicesDetailsThumb1_1.jpg" alt="img" width={1410} height={646}   />
                    </div>
                    <h2 className="title wow fadeInUp" data-wow-delay=".3s">Factura Electrónica - Cumplimos al 100% los requisitos de la DIAN</h2>
                    <div className="tagcloud">
                        <div className="tag">
                            <a href="#">DIAN</a>
                        </div>
                        <div className="tag">
                            <a href="#">Facturación</a>
                        </div>
                        <div className="tag">
                            <a href="#">Electrónica</a>
                        </div>
                        <div className="tag">
                            <a href="#">Automatizada</a>
                        </div>
                    </div>
                    <div className="details-box1">
                        <h3 className="subtitle wow fadeInUp" data-wow-delay=".3s">
                            Visión General del Servicio
                        </h3>
                        <div className="row gy-3">
                            <div className="col-xl-7">
                                <p className="text wow fadeInUp" data-wow-delay=".3s">Con Gestoru podrás hacer tus facturas electrónicas de manera sencilla, ágil y con un soporte contínuo. Podrás personalizar tu factura con tu logo y datos de contacto. Este proceso solo lo harás una vez y de ahí en adelante tus facturas quedarán listas para el envío.</p>
                            </div>
                            <div className="col-xl-5">
                                <p className="text wow fadeInUp" data-wow-delay=".5s">Una de las grandes ventajas es que al enviar tu factura llegará directamente al email de tu cliente y será en formato PDF. También tendrás un historial para tener el control de las facturas que envías.</p>
                            </div>
                        </div>
                    </div>
                    <div className="details-box2">
                        <h3 className="subtitle wow fadeInUp" data-wow-delay=".3s">
                            Beneficios de Nuestro Servicio
                        </h3>
                        <div className="row gy-3">
                            <div className="col-xl-6">
                                <div className="feature-wrapper wow fadeInUp" data-wow-delay=".3s">
                                    <ul className="feature">
                                        <li>Personalización de la factura</li>
                                        <li>Envío automatizado por correo</li>
                                        <li>Formato PDF descargable</li>
                                    </ul>
                                    <ul className="feature">
                                        <li>Eficiencia en los procesos de generación</li>
                                        <li>Acompañamiento en el proceso ante la DIAN</li>
                                        <li>Transformación digital eficiente</li>
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
                                        <div className="title">Automatización</div>
                                        <div className="percentage">98%</div>
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
                            Te acompañaremos en todo el proceso de registro para implementar la Factura Electrónica en tu empresa. ¡Si aún no lo has hecho! Una vez estés habilitado para emitir facturas electrónicas ante la DIAN, con Gestoru podrás hacer emisión, recepción y almacenamiento de todas las facturas electrónicas.
                        </p>
                        <p className="text2 wow fadeInUp" data-wow-delay=".5s">
                            Obtén informes y control absoluto de tu información. La transformación digital eficiente en tu empresa comienza con la implementación correcta de la facturación electrónica, cumpliendo al 100% con los requisitos establecidos por la DIAN.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
};

export default ServiceDetailsFacturacion;