import {createSlice} from '@reduxjs/toolkit';
import { toDoList } from '../Content/Data/Data'; 


const todoSlice =  createSlice({
    name: "tasks",
    initialState: toDoList,
    reducers: {
        addToDo: (state, action) => {
            state.push(action.payload);
        },
        updateToDo: (state, action) => {
            const {id, description} = action.payload;
            const update = state.find((task)=>task.id == id);
            if (update) {
                update.description = description;
            }
        },
        deleteTask: (state, action) => {
            const { id } = action.payload || {};
            if (id) {
                return state.filter(task => task.id !== id);
            }
            return state;
        },
        completedTask: (state, action) => {
            const { id } = action.payload;
            const completedTask = state.find(task => task.id == id);
            if (completedTask) {
                completedTask.isDone = true;
            }
        }
}

})
    

export const {addToDo, updateToDo, deleteTask, completedTask} = todoSlice.actions;
export default todoSlice.reducer