import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import SearchForm from '../SearchForm/SearchForm';
import { useSelector } from 'react-redux';
import { getColumnsByList, getListById } from '../../redux/store';
import { Navigate, useParams } from 'react-router-dom';

const List = () => {

  const { listId } = useParams();
  const columns = useSelector(state => getColumnsByList(state, listId));
  const listData = useSelector(state => getListById(state, listId));

  if(!listData) return <Navigate to='/' />
  
  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>Things to do<span>soon</span></h2>
      </header>
      <div>
        <p className={styles.description}>Interesting things I want to check out</p>
      </div>
      <SearchForm />
      <section className={styles.columns}>
        {columns.map(column => <Column key={column.id} {...column} />)}
      </section>
      <ColumnForm listId={listId} />
    </div>
  );
};

export default List;