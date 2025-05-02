import { useState, useEffect } from "react";


const Books = () => {

    const [Books, setBooks] = useState([]);

    useEffect(() => {
        fetch('./booksData.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div className='my-9'>
            <h2 className="text-4xl font-bold text-center">Books</h2>
            <h2>{Books.length}</h2>

        </div>
    );
};

export default Books;