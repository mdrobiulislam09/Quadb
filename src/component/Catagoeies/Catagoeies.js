import React from 'react';
import './Catagoeies.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { AiTwotoneStar } from 'react-icons/ai';


const Catagoeies = ({ product }) => {
    console.log(product)
    return (
        <div>
            <div className='wrapper'>
                <div className='carg'>
                    <img src={product.show.image.original} alt="phot" />
                    <div className='inffo d-flex justify-content-between'>
                        <div><Link to={`/shows/${product.show.id}`}>{''}<Button className='btb btn-sm' variant="outline-primary">Summary</Button></Link></div>
                        <div className='ms-4 text-warning'>{product.show.rating.average}{product.show.rating.average ? <AiTwotoneStar /> : 'Not Aviable'} </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catagoeies;