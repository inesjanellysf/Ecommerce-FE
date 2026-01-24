import { Navigate, Route, Routes } from "react-router-dom";
import App from "../App.jsx";
import { Libros } from "../pages/Libros.jsx";
import { Account }  from "../pages/account/AccountIndex.jsx";
import { Login }  from "../pages/account/Login.jsx";
import { ShopCheckout } from "../pages/CarritoCompras/ShopCheckout.jsx";
import { Register } from "../pages/account/Register.jsx";
import { ResetPassword } from "../pages/account/ResetPassword.jsx";

export function RouteLanding() {
    return (
        <Routes>

            <Route path="/" element={<App />} >
                {/*<Route index element={<Navigate to="libros" replace />} />
                <Route path="libros" element={<Libros />} />
                <Route path="carrito-compras">
                    <Route path="pago" element={<ShopCheckout />} />

                </Route>
                <Route path="account" element={<Account />}>
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="reset-password" element={<ResetPassword />} />
                </Route>*/}
            </Route>
        </Routes>
    );
}
