import { Input, Layout } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addSearchValue } from '../../store/searchSlice';

const { Search } = Input;
const SearchBar = () => {
  const dispatch = useDispatch();
  
  const onSearch = (value: string) => {
    dispatch(addSearchValue(value));
  };

  return (
    <Layout>
      <Search
        style={{
          width: '50%',
          margin: 'auto',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1000,
        }}
        placeholder="input search text"
        onSearch={onSearch}
        enterButton
      />
    </Layout>
  );
};

export default SearchBar;
