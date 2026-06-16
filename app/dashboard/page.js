"use client"

import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Dashboard = () => {
  const [user, setUser] = useState(null)
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

    userprofile()
  }, [router])

  async function logoutUser(){
    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
      })
    } catch (error) {
      console.error('logout error:', error)
    } finally {
      router.push('/auth/signUp')
    }
  }

  return (
    <div>
      <h1>YOU</h1>
      <h4>name : {user?.name || 'Loading...'}</h4>
      <h4>email : {user?.email || 'Loading...'}</h4>
      <button onClick={logoutUser}>logout</button>
    </div>
  )
}

export default Dashboard