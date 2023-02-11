import React from 'react'
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft,FiChevronRight } from 'react-icons/fi';

function People({person,personIndex}) {
    const {id,image, name,title, quote} = person;
    
    return <article key={id}>
        <img src={image} alt={name} className='person-img' />
        <h4>{name}</h4>
        <p className="title">{title}</p>
        <p className="text">{quote}</p>
        <FaQuoteRight className='icon' />
         <button className="prev">
            <FiChevronLeft />
        </button>
         <button className="next">
            <FiChevronRight />
        </button>
    </article>
   


return 

 
}

export default People
