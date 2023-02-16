import Container from "../Container/Container";
import styles from './NavBar.module.scss';
import clsx from "clsx";
import { NavLink } from "react-router-dom";


const NavBar = () => {
  return (
    <nav className={styles.navbarContanier}>
      <Container className={styles.navbarItemsContainer}>
        <div>
          <span className={styles.icon + " fa fa-tasks"} />
        </div>
        <div>
          <NavLink className={({ isActive }) => clsx(isActive ? styles.linkActive : undefined, styles.linkItem)} to="/">
            Home</NavLink>
          <NavLink className={({ isActive }) => clsx(isActive ? styles.linkActive : undefined, styles.linkItem)} to="/favorite">
            Favorites</NavLink>
          <NavLink className={({ isActive }) => clsx(isActive ? styles.linkActive : undefined, styles.linkItem)} to="/about">
            About</NavLink>
        </div>
      </Container>
    </nav>
  )
}

export default NavBar;
