import React from 'react'
const Todo = (props) => {
    var {todo, removeElement, completeTask} = props;
    const completeText =  {
      textDecoration: "1px hsl(233, 14%, 35%) line-through",
      color: "hsl(233, 14%, 35%)"
    }
    const completeCircle =  {
      background: "url(/src/images/icon-check.svg) center no-repeat, linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))"
    }
    return (
  <div className="task-header">
    <input type="checkbox" className="task-checkbox" id ={todo.id}/>
    <label htmlFor={todo.id} className="task-label"  onClick={() => completeTask(todo)}>
    <span style={ todo.completed? {...completeCircle}:null} className="circle"></span>
    </label>
    <span className="task" style={ todo.completed? {...completeText}:null}>{todo.title}</span>
    <span className="cross" onClick={() => removeElement(todo)}></span>
</div>)
}

export default Todo
 