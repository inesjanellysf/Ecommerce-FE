import '../../public/css/layout/footer.css';

export function Footer() {
    return (
        <footer className="footer bg-dark pb-6 pt-4 pt-md-12">
            <div className="container">
                <div className="align-items-center row">
                    <div className="col-lg-4 col-md-12 col-8">
                        <a href="/">
                            <img width="80%" src="/img/logo/relatos_papel_logo_blanco.svg" alt="" className=""/>
                        </a>
                    </div>
                    <div className="text-end col-lg-8 col-md-12 col-4">
                        <ul className="text-md-end mb-0 small d-flex justify-content-end  list-inline">
                            <li className="me-2 list-group-item">
                                <a className="social-links" href="">
                                    <img src="/img/icon/facebook.svg" alt="" className=""/>
                                </a>
                            </li>
                            <li className="me-2 list-group-item">
                                <a className="social-links" href="">
                                    <img src="/img/icon/twitter.svg" alt="" className=""/>
                                </a>
                            </li>
                            <li className="me-2 list-group-item">
                                <a className="social-links" href="">
                                    <img src="/img/icon/Instagram.svg" alt="" className=""/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="my-lg-8 opacity-25"/>
            
                <hr className="mt-8 opacity-25"/>
                <div>
                    <div className="gy-4 align-items-center justify-content-between w-100 row">
                        <div className="col-md-6">
                            <span className="small text-muted">© 2023
                               <span id="copyright">- {new Date().getFullYear()} </span>
                                Relatos de Papel | Todos los derechos reservados.
                            </span>
                        </div>
                        <div className="mb-2 mb-lg-0 text-end col-lg-6">
                            <ul className="mb-0 undefined list-inline">
                                <li className="text-light list-inline-item ">Socios de pago</li>
                                <li className="list-inline-item ">
                                    <a href="">
                                        <img src="/img/payment/american-express.svg" alt="" className=""/>
                                    </a>
                                </li>
                                <li className="list-inline-item ">
                                    <a href="">
                                        <img src="/img/payment/mastercard.svg" alt="" className=""/>
                                    </a>
                                </li>
                                <li className="list-inline-item ">
                                    <a href="">
                                        <img src="/img/payment/paypal.svg" alt="" className=""/>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="">
                                        <img src="/img/payment/visa.svg" alt="" className=""/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}