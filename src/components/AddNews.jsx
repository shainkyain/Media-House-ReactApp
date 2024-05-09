 
import React from 'react';

const AddNews = ({ addNewsItem }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Extract form values
    const heading = e.target.elements.heading.value;
    const imageURL = e.target.elements.imageURL.value;
    const description = e.target.elements.description.value;

    // Create new news item
    const newNewsItem = { heading, imageURL, description };

    // Call addNewsItem function to update news list
    addNewsItem(newNewsItem);

    // Reset the form after submission
    e.target.reset();
  };

  return (
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
          name='imageURL'
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
  );
};

export default AddNews;