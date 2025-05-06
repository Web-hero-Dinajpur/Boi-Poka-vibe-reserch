import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {

    const { bookId, image, bookName, author, tags } = book

    return (
        <Link to={`/books/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-sm p-6 border-2">
                <figure className='bg-gray-200 py-8 rounded-2xl'>
                    <img
                        src={image}
                        className='h-[166px]'
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div>
                        {
                            tags.map((tag, index) => <button key={index} className='btn btn-xs'>{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>By: {author}</p>
                    <div className='border-t-2 my-2 border-dashed'></div>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;