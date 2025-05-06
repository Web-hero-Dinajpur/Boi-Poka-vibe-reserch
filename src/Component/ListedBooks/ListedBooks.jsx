import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../utility/addToDb';

const ListedBooks = () => {

   const [readList, setReadList] = useState([]);

    const allBooks = useLoaderData();

    useEffect(()=>{
        const storedReadlist = getStoredReadList();
        const storedReadlistInt = storedReadlist.map(id => parseInt(id));

        const readBookList = allBooks.filter(book => storedReadlistInt.include(book.bookId));

        setReadList(readBookList); 
    },[])

    return (
        <div>
            <h3 className='text-3xl my-8'>listed books</h3>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2>Book I read{readList.length}</h2>
                </TabPanel>
                <TabPanel>
                    <h2>My wish List</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;