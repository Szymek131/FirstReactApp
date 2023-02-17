import styles from './ListForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { addList } from '../../redux/listsRedux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const ListForm = () => {

  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addList({ title, description}))
    setDescription('');
    setTitle('');
  }


  return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      <div><span className={styles.columnName}>Title:</span><TextInput type='text' value={title} onChange={e => setTitle(e.target.value)} placeHolder='Title...' /></div>
      <div><span className={styles.columnName}>Description:</span><TextInput type='text' value={description} onChange={e => setDescription(e.target.value)} placeHolder='Icon...' /></div>
      <Button >Add Column</Button>
    </form>
  )
}

export default ListForm;