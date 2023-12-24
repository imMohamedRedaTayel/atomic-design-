import React from 'react'
import styles from './searchInput.module.scss'
import { Search } from '../../icons'


const SearchInput = ( props ) => {
    // console.log( props );
    const { value, valueChange } = props;
    const handleInputChange = (event) => {
      valueChange(event.target.value);
    };
  return <>
    <div className={ styles.input } >
        <Search />
        <input onChange={handleInputChange} value={value} type="text" placeholder={props.placeHolder ? props.placeHolder : 'Search'} />
    </div>
  </>
}

export default SearchInput