const getStoredReadList = () =>{
    //read-list
    const storeListStr = localStorage.getItem('read-list');
    if(storeListStr){
        const storedList = JSON.parse(storeListStr);
        return storedList;
    }
    else{
        return [];
    }
}
const addToStoreReadList = (id) =>{
    const storedList = getStoredReadList();
    if(storedList.includes(id)){
        console.log(id, 'already exists in the read list')
    }
    else{
        storedList.push(id);
        const storeListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storeListStr)
    }
}

export {addToStoreReadList, getStoredReadList}