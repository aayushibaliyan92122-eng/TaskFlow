"use client"

import Link from "next/link";
import {
  LayoutDashboard,
  CheckCircle2,
  Clock3,
  ListTodo,
  LogOut,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";



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

            <>
        <div className="space-y-2">
  <div className="flex items-center gap-2">
    <LayoutDashboard className="h-6 w-6 text-blue-500" />

    <h1 className="text-4xl font-bold">
      Welcome back, {user?.name}
    </h1>
  </div>

  <p className="text-zinc-400">
    Manage your tasks efficiently.
  </p>

  <p className="text-sm text-zinc-500">
    {user?.email}
  </p>
</div>
               
               <div className="grid gap-6 md:grid-cols-3">
  <Card className="bg-zinc-900 border-zinc-800">
    <CardHeader>
      <CardTitle className="flex items-center gap-2 text-zinc-300">
        <ListTodo className="h-4 w-4" />
        Total Tasks
      </CardTitle>
    </CardHeader>

    <CardContent>
      <p className="text-4xl font-bold">
        {totalTodos}
      </p>
    </CardContent>
  </Card>

  <Card className="bg-zinc-900 border-zinc-800">
    <CardHeader>
      <CardTitle className="flex items-center gap-2 text-green-400">
        <CheckCircle2 className="h-4 w-4" />
        Completed
      </CardTitle>
    </CardHeader>

    <CardContent>
      <p className="text-4xl font-bold">
        {completedTodos}
      </p>
    </CardContent>
  </Card>

  <Card className="bg-zinc-900 border-zinc-800">
    <CardHeader>
      <CardTitle className="flex items-center gap-2 text-orange-400">
        <Clock3 className="h-4 w-4" />
        Pending
      </CardTitle>
    </CardHeader>

    <CardContent>
      <p className="text-4xl font-bold">
        {pendingTodos}
      </p>
    </CardContent>
  </Card>
</div>



               <div className="flex flex-wrap gap-3">

  <Button asChild size="lg">
    <Link href="/todospage">
      View Todos
    </Link>
  </Button>

  <Button
    variant="outline"
    size="lg"
    asChild
  >
    <Link href="/todospage">
      Create Todo
    </Link>
  </Button>

</div>


          <Button
  variant="destructive"
  onClick={logoutUser}
>
  <LogOut className="h-4 w-4 mr-2" />
  Logout
</Button>


<Card className="bg-zinc-900 border-zinc-800">
  <CardHeader>
    <CardTitle>
      Activity Overview
    </CardTitle>
  </CardHeader>

  <CardContent className="space-y-2 text-zinc-400">
    <p>📋 Total Tasks: {totalTodos}</p>
    <p>✅ Completed: {completedTodos}</p>
    <p>⏳ Pending: {pendingTodos}</p>
  </CardContent>
</Card>


</>
          )
     
  
}

export default Dashboard