import styles from './Column.module.scss';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import CardForm from '../CardForm/CardForm';

const Column = props => {

  const searchInput = useSelector(state => state.searchInput);
  const cards = useSelector(state => state.cards.filter(card => card.columnId === props.id && card.title.toLowerCase().includes(searchInput.toLowerCase())));

  return (
    <article className={styles.column}>
      <h2 className={styles.title}><span className={styles.icon + ' fa fa-' + props.icon} />{props.title}</h2>
      <ul className={styles.cards}>
        {cards.map(card => <Card key={card.id} {...card} />)}
      </ul>
      <CardForm columnId={props.id} action={props.action} />
    </article>
  );
};

export default Column;