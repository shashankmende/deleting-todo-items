import './index.css'

const TodoItemComponent = props => {
  const {
    todo,
    deleteUser,
    updateBtnStatus,
    updateTitle,
    updateTaskStatus,
  } = props
  const {id, title, edit, taskStatus} = todo
  const onDelete = () => {
    console.log('Delete button is clickeed', id)
    deleteUser(id)
  }

  const onclickBtn = () => {
    updateBtnStatus(id)
  }

  const onChangeEditText = event => {
    updateTitle(id, event.target.value)
  }

  const onChangeCheckbox = event => {
    console.log('checkbox status', event.target.checked)
    updateTaskStatus(id, event.target.checked)
  }

  const btnText = edit ? 'Save' : 'Edit'
  const isTaskComplete = taskStatus ? 'no-text-decrtn' : 'text-decrtan '

  return (
    <li className="todo-item">
      <div className="first-container">
        <input type="checkbox" onChange={onChangeCheckbox} />
        {edit ? (
          <input
            type="text"
            value={title}
            className="edit-input title"
            onChange={onChangeEditText}
          />
        ) : (
          <p className={`text ${isTaskComplete}`}>{title}</p>
        )}
      </div>
      <div className="delete-edit">
        <button type="button" onClick={onclickBtn}>
          {btnText}
        </button>
        <button type="button" className="delete-button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItemComponent
