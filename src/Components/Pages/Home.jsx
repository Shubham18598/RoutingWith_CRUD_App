import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {
  const [users,setUsers]=useState([])

  useEffect(() => {
    loadUsers()
  }, [])

  const loadUsers=async()=>{
    const result =await axios.get('http://localhost:5000/users')
    //console.log(result.data)
    setUsers(result.data)
  }
  
  return (
    <div className='container'>
        <div className='py-4'>
        <h1>Home</h1>
        <table className="table border shadow" >
          <thead className='table-dark'>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
           {
            users.map((user,i)=>(
              <tr key={user.id}>
                <td>{i+1}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link className='btn btn-primary '>view</Link>
                  <Link className='btn btn-outline-primary me-2 ms-2'>Edit</Link>
                  <Link className='btn btn-danger'>Delete</Link>
                </td>
              </tr>
            ))
           }
          </tbody>
        </table>
        </div>
    </div>
  )
}

export default Home