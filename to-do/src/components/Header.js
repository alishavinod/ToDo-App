import React from 'react'
import { useState } from 'react';
import Todo from './Todo';

const Header = () => {
    const [todoList, setTodoList]=useState([]);
    const changeTheme = () => {
        document.body.classList.toggle("theme-light");
    }
const removeElement = (index) => {
        var array = todoList;
        array.splice(index, 1);
        console.log(index);
        setTodoList([...array]);
        console.log(todoList)
      }
const addTask = () => {
const newItem=document.querySelector(".add-task");
newItem.addEventListener('keypress', (e) => {
    if(e.charCode===13 &&  newItem.value.length>0){
        var todo={
            title: newItem.value,
            completed: false
        }
        var array = todoList;
        array.push(todo);
        setTodoList([...array]);
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
    console.log(todoList[index].completed)
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
   {todoList.map((todo, index) =>
                    <Todo
                    key={index} 
                    id={index}
                    title={todo.title}
                    completed={todo.completed}
                    removeElement={removeElement}
                    completeTask={completeTask}
                    />
   )
    }
   </div>
   </div>
    );
}

export default Header
