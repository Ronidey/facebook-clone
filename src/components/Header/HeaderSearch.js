import React, { useState, useRef } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './HeaderSearch.css';

function HeaderSearch() {
  const [searchFocus, setSearchFocus] = useState(false);
  const searchInputRef = useRef(null);

  const openSearch = () => {
    setSearchFocus(true);
    searchInputRef.current.focus();
  };

  const closeSearch = () => {
    setSearchFocus(false);
  };

  return (
    <div className='HeaderSearch-wrapper'>
      <div
        className={`HeaderSearch d-flex align-center ${
          searchFocus ? 'is-focused' : ''
        }`}
        onClick={openSearch}
      >
        <SearchIcon />
        <input
          type='search'
          placeholder='Search'
          ref={searchInputRef}
          onBlur={closeSearch}
        />
      </div>
    </div>
  );
}

export default HeaderSearch;
