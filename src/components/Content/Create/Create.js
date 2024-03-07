import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { addToDo } from '../../Redux/ToDoReducers';

const Create = () => {
    const [description,setDescription] = useState('');
    const tasks = useSelector((state) => state.tasks);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const handleSubmit = (e) =>
    {
        e.preventDefault();
        dispatch(addToDo({id:tasks[tasks.length-1].id+1, description}))
        navigate('/')
    }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
    <div className='w-50 border bg-secondary text-white p-5  text-start '>
    <h3> Add New Task </h3>
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor='description'> Add Task </label>
            <input
                type='text'
                name='description'
                className='form-control'
                placeholder='Enter Task'
                onChange={(e)=> setDescription(e.target.value)}
            />
        </div>
        <br/>
        <button className='btn btn-info text-light'>Submit</button>
    </form>
    </div>  
    </div>
  )
}

export default Create
