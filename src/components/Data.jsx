import React, { useState } from 'react'
import AddNews from './AddNews';
import NewsComponent from './NewsComponent';

const Data = () => {
  
const [newsList , setNewsList] = useState([]);

setNewsList( {heading : 'News01', description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus illum unde officia, rem dignissimos ullam et eius quos aperiam laborum suscipit fuga autem sit dolorum voluptatibus voluptate dolore quibusdam est!' , URL : 'https://images.unsplash.com/photo-1715109429876-e00fbe6c4ae3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' })
 

 
    // {heading : 'News02', description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus illum unde officia, rem dignissimos ullam et eius quos aperiam laborum suscipit fuga autem sit dolorum voluptatibus voluptate dolore quibusdam est!' , URL : 'https://images.unsplash.com/photo-1715109429876-e00fbe6c4ae3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    // {heading : 'News03', description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus illum unde officia, rem dignissimos ullam et eius quos aperiam laborum suscipit fuga autem sit dolorum voluptatibus voluptate dolore quibusdam est!' , URL : 'https://images.unsplash.com/photo-1715109429876-e00fbe6c4ae3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
 
    const addNewsItem = (newNewsItem) => {
        setNewsList([...newsList, newNewsItem]);
      };




    return (
    <div>
        
    <AddNews addNewsItem={addNewsItem} />
    <NewsComponent newsList={newsList} />
    </div>
  )
}

export default Data;