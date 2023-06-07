import React, { useEffect, useState } from 'react';
import Catagoeies from '../Catagoeies/Catagoeies';

const Home = () => {
    const [catagori, setCatagory] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(res => res.json())
      .then(data => {
        setCatagory(data)
      })
  }, [])
    return (
        <div className='row row-cols-md-2 row-cols-lg-3  mx-auto container g-4 mt-4'>
        {
          catagori.map(product => <Catagoeies
            key={product.show.id}
            product={product}
          ></Catagoeies>)
        }
      </div>
    );
};

export default Home;