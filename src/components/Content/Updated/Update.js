import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { updateToDo } from '../../Redux/ToDoReducers';

const Update = () => {
    const {id} = useParams();
    const tasks = useSelector((state) => state.tasks);
    const existinTasks = tasks.filter(f => f.id == id);
    const {description} = existinTasks[0];
    const [updateDescription, setDescription] = useState(description);
    const dispath = useDispatch();
    const navigate = useNavigate();

    const handleUpdate = (e) => {
        e.preventDefault();
        dispath(updateToDo({
            id: id,
            description: updateDescription,
        }))
        navigate('/')
    }


  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
    <div className='w-50 border bg-secondary text-white p-5  text-start '>
    <h3> Add New Task </h3>
    <form onSubmit={handleUpdate}>
        <div>
            <label htmlFor='description'> Update Task </label>
            <input
                type='text'
                name='description'
                className='form-control'
                placeholder='Enter Task'
                value={updateDescription}
                onChange={(e)=> setDescription(e.target.value)}
            />
        </div>
        <br/>
        <button className='btn btn-info text-light'>Update</button>
    </form>
    </div>  
    </div>
  )
}

export default Update
