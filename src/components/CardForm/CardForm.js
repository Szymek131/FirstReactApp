import styles from './CardForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import shortid from 'shortid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const CardForm = props => {

  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'ADD_CARD', payload: { id: shortid(), title: title, columnId: props.columnId}});
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