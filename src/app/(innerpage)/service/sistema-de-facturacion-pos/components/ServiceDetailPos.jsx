import Image from "next/image";

const ServiceDetailsPos = () => {
    return (
        <div className="service-details-section">
        <div className="service-details-container-wrapper section-padding fix">
            <div className="container">
                <div className="service-details-wrapper">
                    <div className="main-thumb img-custom-anim-right wow fadeInLeft" data-wow-delay=".3s">
                    <Image src="/assets/images/services/servicesDetailsThumb1_1.jpg" alt="img" width={1410} height={646}   />
                    </div>
                    <h2 className="title wow fadeInUp" data-wow-delay=".3s">Sistema POS, Facturación para Negocios</h2>
                    <div className="tagcloud">
                        <div className="tag">
                            <a href="#">Sistema POS</a>
                        </div>
                        <div className="tag">
                            <a href="#">Facturación</a>
                        </div>
                        <div className="tag">
                            <a href="#">Inventario</a>
                        </div>
                        <div className="tag">
                            <a href="#">Reportes</a>
                        </div>
                    </div>
                    <div className="details-box1">
                        <h3 className="subtitle wow fadeInUp" data-wow-delay=".3s">
                            Descripción del Servicio
                        </h3>
                        <div className="row gy-3">
                            <div className="col-xl-7">
                                <p className="text wow fadeInUp" data-wow-delay=".3s">Con Gestoru tendrás un sistema que te permite agilizar las tareas relacionadas con la venta, facturación y el cobro de productos o servicios en tu negocio local. Tu inventario está siempre actualizado y digitalizado, controlando la entrada y salida de todos tus productos en tiempo real.</p>
                            </div>
                            <div className="col-xl-5">
                                <p className="text wow fadeInUp" data-wow-delay=".5s">Puedes crear sin límites todos los productos o servicios que ofreces y acceder a reportes inteligentes sobre tus ventas e inventario en tiempo real. Todo desde una sola plataforma integrada.</p>
                            </div>
                        </div>
                    </div>
                    <div className="details-box2">
                        <h3 className="subtitle wow fadeInUp" data-wow-delay=".3s">
                            ¿Qué beneficios tengo con el sistema de facturación POS de Gestoru?
                        </h3>
                        <div className="row gy-3">
                            <div className="col-xl-6">
                                <div className="feature-wrapper wow fadeInUp" data-wow-delay=".3s">
                                    <ul className="feature">
                                        <li>Personalización de la factura (Tirilla)</li>
                                        <li>Inventario automatizado y actualizado</li>
                                        <li>Informes y descargables en PDF</li>
                                    </ul>
                                    <ul className="feature">
                                        <li>Cotizaciones profesionales</li>
                                        <li>Facturas en tirilla con requisitos DIAN</li>
                                        <li>Compatible con códigos de barras</li>
                                    </ul>
                                </div>

                            </div>
                            <div className="col-xl-6">
                                <div className="progress-wrap">
                                    <div className="progress-meta">
                                        <div className="title">Gestión de Inventario</div>
                                        <div className="percentage">95%</div>
                                    </div>
                                    <div className="progress-container">
                                        <div className="progress-bar" >
                                           
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-wrap mb-0">
                                    <div className="progress-meta">
                                        <div className="title">Facturación Digital</div>
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
                            Agilizas tu proceso de venta al crear tus tirillas y facturas en segundos, simplificas el manejo de tus terminales de venta al gestionar todo desde un solo lugar. Ahorras tiempo al mantener tu inventario siempre actualizado y controlas ágilmente tu efectivo al realizar fácilmente cierres de turnos y mucho más.
                        </p>
                        <p className="text2 wow fadeInUp" data-wow-delay=".5s">
                            Usa tu impresora conectada a nuestro sistema POS y utiliza todos los códigos de barra de tus productos. Con Gestoru, tienes acceso a facturas en tirilla con todos los requisitos DIAN, garantizando el cumplimiento legal de tu negocio.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
};

export default ServiceDetailsPos;