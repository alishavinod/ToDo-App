import React from 'react'
import { useState } from 'react';
import Todo from './Todo';

const Header = () => {
    const [todoList, setTodoList]=React.useState([{
      title: "Sample Todo",
      completed: false
    }]);
    const[all, setAll]=useState(true)
    const [active, setActive]=useState(false);
    const[completed, setCompleted]=useState(false);
    const[compcount, setCompcount]=useState(0);
    const changeTheme = () => {
        document.body.classList.toggle("theme-light");
    }
const removeElement = (index) => {
        var array = [...todoList];
        array.splice(index, 1);
        console.log(index);
        setTodoList(array);
        console.log(todoList)
      }
const addTask = () => {
const newItem=document.querySelector(".add-task");
newItem.addEventListener('keypress', (e) => {
    if(e.charCode===13 &&  newItem.value.length>0){
      setTodoList(todoList=>[...todoList,{
            title: newItem.value,
            completed: false
        }]);
        newItem.value='';
        
    }
});
}
const completeTask = (index) => {
    var array=todoList;
    var item =array[index];
    if(item.completed)
    {
      item.completed=false;
    }
    else
    {
      item.completed=true;
    }
    array[index]=item;
    setTodoList(array);
    setCompcount(0);
    var i;
    for(i=0; i<todoList.length; i++) {
      if(!todoList[i].completed)
      setCompcount(compcount+1)
    }
    console.log(todoList[index].completed)
  }
  const displayList = () =>
  {
    if(all)
    {
    return todoList.map((todo, index) =>
      <Todo
      key={index} 
      id={index}
      todo={todo}
      removeElement={removeElement}
      completeTask={completeTask}
      />
    )
    }
    else
      if(active)
    {
      return todoList.map((todo, index) =>
      todo.completed ? null : <Todo
      key={index} 
      id={index}
      todo={todo}
      removeElement={removeElement}
      completeTask={completeTask}
      />
    )
    }
    else
      if(completed)
    {
      return todoList.map((todo, index) =>
      todo.completed ? <Todo
      key={index} 
      id={index}
      todo={todo}
      removeElement={removeElement}
      completeTask={completeTask}
      /> : null
    )
    }
  }
    return (
 <div>
 <div className="to-do-header">
  <h1>TODO</h1>
      <div className="theme" onClick={changeTheme}></div>
  </div>
  <div className="input-task">
  <input type="checkbox" className="add-task-checkbox"/>
  <span className="checkmark"></span>
  <input type="text" className="form-control add-task" placeholder="Create a new todo..." onChange={addTask}/>
  </div>
  <div>
   {displayList()}
   </div>
   <div className="task-status">
  {/* <p className="task-status-item">{compcount} items left</p> */}
  <form className="status">
  <input type="radio" className="task-box" id ="all" name="status" defaultChecked/>
  <label htmlFor="all" className="stat" onClick={() => {setAll(true); setActive(false); setCompleted(false);}}>All</label>
  <input type="radio" className="task-box" id ="active" name="status"/>
  <label htmlFor="active" className="stat" onClick={() => {setAll(false); setActive(true); setCompleted(false);}}>Active </label>
  <input type="radio" className="task-box" id ="completed" name="status"/>
  <label htmlFor="completed" className="stat" onClick={() => {setAll(false); setActive(false); setCompleted(true);}}>Completed</label>
  </form>
  <p className="task-status-item">Clear completed</p>
</div>
   </div>
    );
}

export default Header
