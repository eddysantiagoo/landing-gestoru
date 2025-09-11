import Image from "next/image";
import Link from "next/link";

const Cta1 = ({
  subtitle,
  title,
  content,
  btnurl1,
  btnurl2,
  btntext1,
  btntext2,
  img,
}) => {
  return (
    <section className="cta-section ">
      <div className="cta-container-wrapper style1">
        <div className="container">
          <div className="cta-wrapper style1  section-padding fix" style={{background: '#000924', padding: '12px'} }>
            {/* <div className="shape1 d-none d-md-block">
              <Image
                src="/assets/images/shape/ctaShape1_1.png"
                alt="img"
                width={373}
                height={147}
              />
            </div> */}
            <div className="shape2 d-none d-md-block">
              <Image
                src="/assets/images/shape/ctaShape1_2.png"
                alt="img"
                width={228}
                height={143}
              />
            </div>
            {/* <div className="shape3 d-none d-md-block">
              <Image
                src="/assets/images/shape/ctaShape1_3.png"
                alt="img"
                width={606}
                height={272}
              />
            </div> */}
            <div className="shape4 d-none d-md-block">
              <Image
                src="/assets/images/shape/ctaShape1_4.png"
                alt="img"
                width={223}
                height={134}
              />
            </div>
            <div className="container">
              <div className="row gy-4 align-items-center">
                <div className="col-xl-8 col-lg-7 order-2 order-lg-1">
                  <div className="cta-content">
                    <div className="section-title">
                      <div
                        className="subtitle text-white bg2 wow fadeInUp"
                        data-wow-delay=".2s"
                      >
                        {subtitle}{" "}
                      </div>
                      <h2
                        className="title text-white wow fadeInUp"
                        data-wow-delay=".4s"
                      >
                        {title}
                      </h2>
                      <p
                        className="section-desc text-white mxw-651 wow fadeInUp"
                        data-wow-delay=".6s"
                      >
                        {content}
                      </p>
                    </div>

                    <div
                      className="btn-wrapper style1 wow fadeInUp mt-4 d-flex flex-column flex-sm-row gap-3"
                      data-wow-delay=".8s"
                    >
                      {btnurl1 && (
                        <Link
                          className="theme-btn d-inline-flex align-items-center justify-content-center"
                          href={btnurl1}
                        >
                          {btntext1 || "Conocer Más"}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            className="ms-2"
                          >
                            <g clipPath="url(#clip0_11_22)">
                              <path
                                d="M11.6118 3.61182L10.8991 4.32454L14.0706 7.49603H0V8.50398H14.0706L10.8991 11.6754L11.6118 12.3882L16 7.99997L11.6118 3.61182Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_11_22">
                                <rect width="16" height="16" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </Link>
                      )}

                      {btnurl2 && (
                        <Link
                          className="theme-btn style"
                          href={btnurl2}
                        >
                          {btntext2 || "Contactanos"}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="white"
                            className="ms-2"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.489 3.488"/>
                          </svg>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 order-1 order-xl-2">
                  <div className="cta-thumb wow fadeInUp" data-wow-delay=".2s">
                    <Image src={img} alt="img" width={693} height={372} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta1;
