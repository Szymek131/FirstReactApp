import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { changeSearchInput } from '../../redux/searchInputRedux';

const SearchForm = () => {

    const initialSearchInput = useSelector(state => state.searchInput);
    const dispatch = useDispatch();
    const [searchInput, setSearchInput] = useState(initialSearchInput);

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(changeSearchInput( searchInput ))
    }

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput placeholder="Search..." type='text' value={searchInput} onChange={e => setSearchInput(e.target.value)} />
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
};

export default SearchForm;