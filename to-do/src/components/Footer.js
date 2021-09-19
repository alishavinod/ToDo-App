import React from 'react'

const Footer = () => {
    return (
        <div className="task-status">
  <p className="task-status-item">5 items left</p>
  <form className="status">
  <input type="radio" className="task-box" id ="all" name="status" defaultChecked/>
  <label htmlFor="all" className="stat">All</label>
  <input type="radio" className="task-box" id ="active" name="status"/>
  <label htmlFor="active" className="stat">Active </label>
  <input type="radio" className="task-box" id ="completed" name="status"/>
  <label htmlFor="completed" className="stat">Completed</label>
  </form>
  <p className="task-status-item">Clear completed</p>
</div>
    )
}

export default Footer
