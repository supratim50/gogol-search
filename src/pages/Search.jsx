import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";

import Navbar from "../components/Navbar/Navbar";
import Searchresult from '../components/SearchResult/Searchresult';

const Search = () => {

  // getting value from url
  let {q} = useParams();

  // data
  const [result, setResult] = useState([]);

  const setResultFunc = ({items}) => {
    setResult(items);
  }

  // useEffect(async () => {
  //   const options = {
  //             method: 'GET',
  //             url: 'https://google-search72.p.rapidapi.com/search',
  //             params: {
  //               query: q,
  //             //   gl: 'us',
  //             //   lr: 'en',
  //               num: '10',
  //               start: '0',
  //             //   sort: 'relevance'
  //             },
  //             headers: {
  //               'X-RapidAPI-Key': '625a615497msh81c047ea51e6cbdp19bf9bjsn67a6c7fc7026',
  //               'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
  //             }
  //         };
      
          
  //         try {
  //           let {data} =  await axios.request(options);
  //           setResultFunc(data);
  //           console.log('result',result);
  //         } catch(e) {
  //           console.log(e);
  //         }
            
          
  // }, [q]);

  return (
    <div className='container'>
      <Navbar />
      <div className='d-flex flex-column align-items-center justify-content-center'>
        {/* <div>{result.map(({title}) => <div>{title}</div>)}</div> */}
        {
          result.map(({title, link, htmlSnippet}) => <Searchresult title={title} link={link} description={htmlSnippet} />)
        }
      </div>
      {/* <Searchresult title="Hello" link='this is link' description='description' /> */}
    </div>
  )
}

export default Search;