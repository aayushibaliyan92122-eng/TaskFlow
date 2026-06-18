"use client"

import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'


const Dashboard = () => {
  const [user, setUser] = useState(null)
const [todos, setTodos] = useState([])

  const router = useRouter()

  useEffect(() => {
    async function userprofile() {
      try {
        const response = await fetch('/api/auth/me')

        if (!response.ok) {


          router.push('/auth/signUp')
          return
        }

        const profile = await response.json()
        setUser(profile.userinfo)
      } catch (error) {
        console.error('userprofile error:', error)
        router.push('/auth/signUp')
      }
    }

    //get todos
    async function getTodos() {
  try {
    const response = await fetch("/api/routes")

    const data = await response.json()

    if (response.ok) {
      setTodos(data.todos)
    }
  } catch (error) {
    console.log(error)
  }
}

    userprofile(),getTodos()

  }, [router])

  async function logoutUser(){
    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
      })
    } catch (error) {
      console.error('logout error:', error)
    } finally {
      router.push('/auth/login')
    }
  }


const totalTodos = todos.length

const completedTodos = todos.filter(
  (todo) => todo.completed
).length

const pendingTodos = todos.filter(
  (todo) => !todo.completed
).length

 
  








          /////stupifity
          return (
            <div className="min-h-screen bg-black text-white px-4 py-8 sm:px-6 lg:px-8">
              <div className="max-w-5xl mx-auto space-y-8">

                <div className="space-y-4">
                  <h1 className="text-4xl font-bold sm:text-5xl">
                    Welcome back, {user?.name || 'Loading...'} 👋
                  </h1>

                  <p className="text-zinc-400 text-base sm:text-lg">
                    Manage your tasks efficiently.
                  </p>

                  <p className="text-zinc-500 text-sm sm:text-base">
                    <strong>Email:</strong> {user?.email || 'Loading...'}
                  </p>
                </div>

                <div className="grid gap-6 mt-6 sm:grid-cols-2 xl:grid-cols-3">

                  <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
                    <h3 className="text-zinc-400">Total Todos</h3>
                    <p className="mt-3 text-3xl font-bold sm:text-4xl">{totalTodos}</p>
                  </div>

                  <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
                    <h3 className="text-zinc-400">Completed</h3>
                    <p className="mt-3 text-3xl font-bold sm:text-4xl">{completedTodos}</p>
                  </div>

                  <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
                    <h3 className="text-zinc-400">Pending</h3>
                    <p className="mt-3 text-3xl font-bold sm:text-4xl">{pendingTodos}</p>
                  </div>

                </div>

                <div className="flex flex-col gap-4 mt-6 sm:flex-row sm:items-center">
                  <a
                    href="/todospage"
                    className="inline-flex justify-center rounded-lg bg-white px-6 py-3 text-center text-black font-semibold transition hover:bg-zinc-100"
                  >
                    View Todos
                  </a>

                  <a
                    href="/todospage"
                    className="inline-flex justify-center rounded-lg border border-zinc-700 px-6 py-3 text-center transition hover:border-zinc-500"
                  >
                    Create Todo
                  </a>
                </div>

                <button
                  onClick={logoutUser}
                  className="mt-4 text-red-400 hover:text-red-300"
                >
                  Logout
                </button>

              </div>
            </div>
          )
     
  
}

export default Dashboard