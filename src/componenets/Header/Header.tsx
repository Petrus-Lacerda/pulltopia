import "./_Header.scss"
import { NavLink } from "react-router"
import { House, Store, Package, Library } from 'lucide-react'

const Header = () => {
    return (
        <header>
            <nav className="menu" aria-label="Main navigation">
                <NavLink to="/" end className="menu-item">
                    <House size={18} aria-hidden="true" />
                    <span className="menu-item__label">Home</span>
                </NavLink>

                <NavLink to="/packs" className="menu-item">
                    <Package size={18} aria-hidden="true" />
                    <span className="menu-item__label">Packs</span>
                </NavLink>

                <NavLink to="/shop" className="menu-item">
                    <Store size={18} aria-hidden="true" />
                    <span className="menu-item__label">Shop</span>
                </NavLink>

                <NavLink to="/collection" className="menu-item">
                    <Library size={18} aria-hidden="true" />
                    <span className="menu-item__label">Collection</span>
                </NavLink>
            </nav>
        </header>
    )
}

export default Header