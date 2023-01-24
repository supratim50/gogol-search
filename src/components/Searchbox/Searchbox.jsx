import React, {useState, useReducer, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import "./searchbox.css";

import {searchKeyword, reducer} from "../../reducers/searchKeywordReducer";

const Searchbox = () => {

  // reducer
  const [keyword, dispatch] = useReducer(reducer, searchKeyword);
  // state
  const [search, setSearch] = useState('');

  // get params from url
  const {q} = useParams()

  // handle change
  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  // use setSearch for set the search value once when the page reload
  
  useEffect(() => {
    setSearch(q);
  }, [])

  return (
    <div>
          <input className='px-3 py-2 w-100 border search-input' type="text" placeholder='Serach here' value={search} onChange={handleChange} />
          <button className='px-5 py-2 border text-white fw-bold search-button' type='submit' onClick={() => dispatch({type: 'search', value: search})}>Search</button>
        {/* <div>search result : {keyword.keyword}</div>
        <div>search result : {searchKeyword.keyword}</div> */}
    </div>
  )
}

export default Searchbox;