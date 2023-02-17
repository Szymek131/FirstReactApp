import clsx from 'clsx';
import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite, removeCard } from '../../redux/cardsRedux';

const Card = ({ title, cardId, isFavorite }) => {

  const dispatch = useDispatch();
  const starButtonAction = () => {
    dispatch(toggleCardFavorite(cardId))
  }
  const trashButtonaAction = () => {
    dispatch(removeCard(cardId))
  }
  return (
    <li className={clsx(styles.card)}>{title}
      <button className={clsx('fa fa-star-o', styles.starButton, isFavorite ? styles.active : undefined)} onClick={starButtonAction} />
      <button className={clsx('fa fa-trash', styles.trashButton)} onClick={trashButtonaAction} />
    </li>
  );
};

export default Card;