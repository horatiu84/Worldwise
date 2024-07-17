import {  NavLink } from "react-router-dom";
import styless from './PageNav.module.css'
import Logo from "./Logo";

export default function PageNav() {
  return (
    <nav className={styless.nav}>
    
        <Logo />
        <ul>
            
            <li>
                <NavLink to="/pricing">Pricing</NavLink>
            </li>
            <li>
                <NavLink to="/product">Product</NavLink>
            </li>
            <li>
                <NavLink to="/login" className={styless.ctaLink}>Login</NavLink>
            </li>
        </ul>
    </nav>
  )
}
