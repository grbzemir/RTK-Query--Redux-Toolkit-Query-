import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useGetPostByIdQuery } from '../Redux/services/jsonplaceholder'

function App() {

  const { data: post, error, isLoading } = useGetPostByIdQuery(2)
  console.log(isLoading, error, post, "dataaaa");
  return (
    <div>
      Redux
    </div>
  )
}

export default App
