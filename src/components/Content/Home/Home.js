import React from 'react';
import '../Home/Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { completedTask, deleteTask } from '../../Redux/ToDoReducers';

const Home = () => {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch()
    const handleDelete = (id) => {
        dispatch(deleteTask({id:id}))
    };

    const handleComplete = (id) => {
        dispatch(completedTask({id:id}))
    }

    return (
        <div className='container'>
            <h1>ToDo List</h1>
            <div className='addToDo'>
                    <Link to={'/create'}>
                    <button className='btn btn-danger'>Create</button>
                    </Link>
            </div>
            
                {tasks && tasks.map((task,index) => (
                    <div key={index} className={`input-group ${task.isDone ? 'completed' : 'notCompleted'}`}>
                    <input 
                    type="text" 
                    className={`form-control`} 
                    value = {task.description} aria-label="Recipient's username with two button addons"
                     />
                    <Link to={`/edit/ ${task.id}`}>
                    <button className="btn btn-warning" type="button">Edite</button>
                    </Link>
                    <button onClick={()=> handleDelete(task.id) } className="btn btn-danger" type="button">Delete</button>
                    <button onClick={()=> handleComplete(task.id)} className="btn btn-success" type="button">Complete</button>
            </div>
                ))}
        </div>
    );
}

export default Home;