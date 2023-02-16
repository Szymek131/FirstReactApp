import clsx from 'clsx';
import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';

const Card = ({ title, cardId, isFavorite}) => {

  const dispatch = useDispatch();
  const buttonAction = () => {
    dispatch(toggleCardFavorite(cardId))
  }
    return (
      <li className={clsx(styles.card)}>{title}<button className={clsx('fa fa-star-o', styles.starButton, isFavorite ? styles.active : undefined)} onClick={buttonAction}/></li>
    );
};

export default Card;