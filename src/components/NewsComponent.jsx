import React, { useState } from 'react'; 
import AddNews from './AddNews';

const NewsComponent = () => {
 
   
const [newsList , setNewsList] = useState([
  {heading : 'News02', description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus illum unde officia, rem dignissimos ullam et eius quos aperiam laborum suscipit fuga autem sit dolorum voluptatibus voluptate dolore quibusdam est!' , URL : 'https://images.unsplash.com/photo-1715109429876-e00fbe6c4ae3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
{heading : 'News03', description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus illum unde officia, rem dignissimos ullam et eius quos aperiam laborum suscipit fuga autem sit dolorum voluptatibus voluptate dolore quibusdam est!' , URL : 'https://images.unsplash.com/photo-1715006020348-a4af9f36b664?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
{heading : 'News01', description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus illum unde officia, rem dignissimos ullam et eius quos aperiam laborum suscipit fuga autem sit dolorum voluptatibus voluptate dolore quibusdam est!' , URL : 'https://images.unsplash.com/photo-1714997219940-6d9cd56c3609?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
]);

// setNewsList( )
 

 console.log(newsList);
    
 const handleSubmit = (e) => {
  e.preventDefault();

  // Extract form values from event target
  const heading = e.target.elements.heading.value;
  const  URL = e.target.elements.URL.value;
  const description = e.target.elements.description.value;

  // Create a new news item object
  const newNewsItem = { heading,  URL, description };

  // Update newsList state by adding the new news item
  setNewsList([...newsList, newNewsItem]);

  // Reset the form after submitting
  e.target.reset();

 }
  
  return (
    <div className='flex flex-col bg-zinc-200 items-center   w-[85%] h-full'>
        <h6 className='font-mono'>Recent News-</h6>
   
          {newsList.map((News ,index)=>(
        <div key={index} className='mt-2 h-auto w-[70%]  bg-red-200 p-5 rounded-md'>
      <div className='flex justify-between items-center  '>
                <img className='my-2 rounded-md object-cover h-96 w-96 ' src={News.URL} alt={News.heading} />
       <div> 
       <h1 className=' pl-8 left-2 font-sans py-5  pt-2 font-semibold text-4xl'>{News.heading}</h1>
              <p className='pl-8  text-bold font-semibold mt-3'>{News.description}  </p>
       </div>
       </div>
       </div>
          ))}

<div className='h-screen w-full bg-zinc-400 flex flex-col items-center'>
      <h1 className='my-10 text-5xl font-semibold'>Add your Post here</h1>
      <form className='flex flex-col' onSubmit={handleSubmit}>
        <input
          className='bg-zinc-200 px-10 py-2 text-semibold rounded-md mb-3'
          name='heading'
          type='text'
          placeholder='Heading'
        />
        <input
          className='bg-zinc-200 px-10 py-2 w-96 text-semibold rounded-md mb-3'
          name='URL'
          type='url'
          placeholder='Image URL'
        />
        <textarea
          className='bg-zinc-200 px-10 py-2 h-48 text-semibold rounded-md mb-3'
          name='description'
          placeholder='Description'
        ></textarea>
        <div>
          <button type='submit' className='bg-red-200 h-10 w-24 rounded-full'>
            Add News
          </button>
          <button type='reset' className='m-2 bg-red-200 h-10 w-24 rounded-full'>
            Reset
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default NewsComponent
