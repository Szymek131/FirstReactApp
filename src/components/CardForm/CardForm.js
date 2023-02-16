import styles from './CardForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/store';

const CardForm = props => {

  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addCard({ title: title, columnId: props.columnId, isFavorite: false }))
    setTitle('');
  }

  return (
    <form className={styles.cardForm} onSubmit={handleSubmit}>
      <TextInput value={title} onChange={e => setTitle(e.target.value)}/>
      <Button>Add Card</Button>
    </form>
  );
};

export default CardForm;