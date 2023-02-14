import Container from "../Container/Container";
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.navbarContanier}>
      <Container className={styles.navbarItemsContainer}>
        <div>
          <span className={styles.icon + " fa fa-tasks"} />
        </div>
        <div>
          <a href="/" className={styles.linkItem}>Home</a>
          <a href="/favorite" className={styles.linkItem}>Favorites</a>
          <a href="/about" className={styles.linkItem}>About</a>
        </div>
      </Container>
    </nav>
  )
}

export default NavBar;
