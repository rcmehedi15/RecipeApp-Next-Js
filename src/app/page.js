'use client'
 
import { useRouter } from 'next/navigation'
 import ingredients from '../../ingredients.json'
import Header from './Header/Header'

export default function Home() {
  const router = useRouter()
 
  return (
    <main className=" flex-col items-center justify-between p-12">
      <h1 className="text-4xl font-bold text-center mb-36">Recipe app</h1>
    <Header ></Header>
    
    </main>
  )
}
