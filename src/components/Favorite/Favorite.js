import PageTitle from "../PageTitle/PageTitle";
import styles from './Favorite.module.scss';
import { useSelector } from "react-redux";
import clsx from "clsx";
import { getFavoriteCards } from "../../redux/cardsRedux";
import Card from "../Card/Card";

const Favorite = () => {

  const favoriteCards = useSelector(state => getFavoriteCards(state))

  if (Array.isArray(favoriteCards) && favoriteCards.length === 0) {
    return (
      < div >
        <PageTitle>Favorite</PageTitle>
          <h3 className={clsx(styles.favoriteSubtitle)}>Try to add some cards as your favorite</h3>
      </div >
    )
  }

  return (
    <div>
      <PageTitle>Favorite</PageTitle>
      <article className={styles.column}>
        <h2 className={styles.title}><span className={clsx(styles.icon, 'fa fa-star-o')} />Favorites</h2>
        <ul className={styles.cards}>
          {favoriteCards.map(card => <Card key={card.id} {...card} cardId={card.id} isFavorite={card.isFavorite} />)}
        </ul>
      </article>
    </div>
  )
}

export default Favorite;