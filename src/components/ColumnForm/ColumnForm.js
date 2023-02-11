import styles from './ColumnForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/store';


const ColumnForm = () => {

  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addColumn({ title, icon}))
    setIcon('');
    setTitle('');
  }

  return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      <div><span className={styles.columnName}>Title:</span><TextInput type='text' value={title} onChange={e => setTitle(e.target.value)} placeHolder='Title...'/></div>
      <div><span className={styles.columnName}>Icon:</span><TextInput type='text' value={icon} onChange={e => setIcon(e.target.value)} placeHolder='Icon...'/></div>
      <Button >Add Column</Button>
    </form>
  );
};

export default ColumnForm;