import { useState } from 'react';

function App() {

    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState("");
    
    function handleChange(event) {
      setNewTask(event.target.value);
    }

    function addTask() {
      const task ={
        id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
        taskName: newTask,
      }
      const newTodoList = [...todoList, task];
      setTodoList(newTodoList);
    }

    function deleteTask(taskName) {
      const newTodoList = todoList.filter((task) => {
        if(task===taskName){
          return false;
        }else{
          return true;
        }
      })
      setTodoList(newTodoList);
    }

    return (
      <div className='App'>
        <h1>ToDo List</h1>
        <div className='addTask'>
          <input type='text' placeholder='Enter new task' onChange={handleChange}/>
          <button onClick={addTask} className='btn'>Add Task</button>
        </div>
        <div className='list'>
          {todoList.map((task) => {
            return <div className='tasks-list'>
              <h1>{task.taskName}</h1>
              <button className='btn1'>Done</button>
              <button onClick={() => deleteTask(task)} className='btn1'>Delete</button>
            </div>
          })}
        </div>
      </div>
    )
}

export default App;