import '../../../public/css/pages/ShopCart.css';
import { useCart } from '../../hooks/useCart.jsx';
import {Link} from "react-router-dom";

export function ShopCart() {
    const { cartItems, removeFromCart, addToCart, removeQuantityToBook } = useCart();

    const handleAddQuantityToBook = (book) => {
        addToCart(book);
    };

    const handleRemoveQuantityToBook = (id) => {
        removeQuantityToBook(id);
    };

    const handleRemoveFromCart = (id) => {
        removeFromCart(id);
    };

    return (
        <>
            <ul className="list-group list-group-flush">
                {cartItems.map((item) => (
                    <li key={item.id} className="py-3 ps-0 border-bottom list-group-item">
                        <div className="align-items-center undefined row">
                            <div className="col-lg-7 col-md-6 col-6">
                                <div className="d-flex">
                                    <img
                                        src={item.imageUrl}
                                        alt={item.title}
                                        className="icon-shape icon-xl rounded-3"
                                        style={{width: '70px', height: '70px', objectFit: 'cover'}}
                                    />
                                    <div className="ms-3 text-start">
                                        <a className="text-inherit" href="#">
                                            <h6 className="mb-0">{item.title}</h6>
                                        </a>
                                        <span>
                                        <small className="text-muted"></small>
                                    </span>
                                        <div className="mt-2 small lh-1">
                                            <a className="text-decoration-none text-inherit"
                                               onClick={() => handleRemoveFromCart(item.id)}>
                                            <span className="me-1 align-text-bottom">
                                                 <img
                                                     src="/img/icon/delete.svg"
                                                     alt="Delete"
                                                     className="icon-shape icon-xs"
                                                     style={{width: '16px', height: '16px'}}  // Ícono de eliminar
                                                 />
                                            </span>
                                                <span className="text-muted">Eliminar</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-3 col-md-3 col-4">
                                <div className="input-spinner input-group input-group-sm">
                                    <input className="button-minus btn btn-sm" type="button" value="-" onClick={() => handleRemoveQuantityToBook(item.id)}/>
                                    <input readOnly={true} className="quantity-field form-control-sm form-input
                                        quantity-field form-control-sm form-input-sm" value={item.quantity}
                                           name="quantity"/>
                                    <input className="button-plus btn btn-sm" type="button" value="+" onClick={() => handleAddQuantityToBook(item)}/>
                                </div>
                            </div>
                            <div className="text-center col-md-2 col-2">
                                <span className="fw-bold">${(item.quantity * item.currentPrice).toFixed(2)}</span>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="d-flex justify-content-between mt-4">
                <button type="button" className="btn btn-primary">Continuar Comprando</button>
                <Link to={"/landing/carrito-compras/pago"} type="button" className="btn btn-dark">Proceder al Pago</Link>
            </div>
        </>
    );
}
