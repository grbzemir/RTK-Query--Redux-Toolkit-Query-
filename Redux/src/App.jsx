import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useCreatePostMutation, useGetPostByIdQuery } from '../Redux/services/jsonplaceholder'

function App() {

  // const { data: post, error, isLoading } = useGetPostByIdQuery(2)
  // console.log(isLoading, error, post, "dataaaa");

  const [createPost, { isLoading, isError, error }] = useCreatePostMutation();
  console.log(isLoading, isError, error, "dataaaa");

  const handleSubmit = async (e) => {

    e.preventDefault();
    const title = e.target.title.value;
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder='Title' />
        <textarea name="body" placeholder="body" />
        <button type="submit" disabled={isLoading}>Create Post</button>
      </form>
    </div>
  )
}

export default App
