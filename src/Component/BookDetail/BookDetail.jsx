import { parse } from 'postcss';
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoreReadList } from '../utility/addToDb';

const BookDetail = () => {    

    const { bookId } = useParams();
    const id = parseInt(bookId);

    const data = useLoaderData();

    const book = data.find(book => book.bookId === id)
    // console.log(data, book, bookId, id)

    const { image } = book;

    const handleMarkAsRead = (id) => {

        addToStoreReadList(id);

    }

    return (
        <div className='my-12'>
            <h2>books details</h2>
            <img className='w-36' src={image} alt="" />
            <br />
            <button onClick={() => handleMarkAsRead(bookId)} className='btn btn-outline btn-accent mr-4'>Mark as Read</button>
            <button className='btn btn-accent'>Add to Wishlist</button>
        </div>
    );
};

export default BookDetail;