import React from 'react'
import { useState, useEffect } from 'react';
import Todo from './Todo';
import { v4 as uuidv4 } from "uuid"

const Header = () => {
    const [todoList, setTodoList]=React.useState([{
      id:uuidv4(),
      title: "Sample Todo",
      completed: false
    }]);
    useEffect(() => {
      console.log(todoList);
    }, [todoList])
    const[all, setAll]=useState(true)
    const [active, setActive]=useState(false);
    const[completed, setCompleted]=useState(false);
    const[compcount, setCompcount]=useState(0);
    const changeTheme = () => {
        document.body.classList.toggle("theme-light");
    }
const removeElement = (todo) => {
        var array=[...todoList]
        var index = array.indexOf(todo)
        array.splice(index, 1);
        setTodoList(array);
      }
const addTask = () => {
const newItem=document.querySelector(".add-task");
newItem.addEventListener('keypress', (e) => {
    if(e.charCode===13 &&  newItem.value.length>0){
      setTodoList(todoList=>[...todoList,{
        id:uuidv4(),
            title: newItem.value,
            completed: false
        }]);
        newItem.value='';
    }
});
}
const clearCompleted = () => {
  var i;
  var array=[...todoList]
  for(i=0; i<array.length; i++)
  {
    if(array[i].completed)
    {
      array.splice(i, 1);
    }
  }
  setTodoList(array);

}
const completeTask = (todo) => {
    var array=[...todoList]
        var index = array.indexOf(todo)
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
  }
  const displayList = () =>
  {
    if(all)
    {
    return todoList.map((todo, index) =>
      <Todo
      key={index} 
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
  {/* <input type="checkbox" className="add-task-checkbox"/>
  <span className="checkmark"></span> */}
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
  <p className="task-status-item" onClick={clearCompleted}>Clear completed</p>
</div>
   </div>
    );
}

export default Header
