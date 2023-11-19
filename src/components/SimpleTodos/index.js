import {Component} from 'react'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

const TodoItemComponent = props => {
  const {todo, deleteUser} = props
  const {id, title} = todo
  const onDelete = () => {
    console.log('Delete button is clickeed', id)
    deleteUser(id)
  }
  return (
    <li className="todo-item">
      <p>{title}</p>
      <button type="button" className="delete-button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

class SimpleTodos extends Component {
  state = {userDetailsList: initialTodosList}

  deleteUser = uniqueNo => {
    console.log('unique No', uniqueNo)
    const {userDetailsList} = this.state
    const filteredList = userDetailsList.filter(each => each.id !== uniqueNo)
    this.setState({
      userDetailsList: filteredList,
    })
  }

  render() {
    const {userDetailsList} = this.state
    return (
      <div className="bg_container">
        <div className="Todos-container">
          <ul className="todo-items-container">
            <h1 className="todo-heading">Simple Todos</h1>
            {userDetailsList.map(eachuser => (
              <TodoItemComponent
                key={eachuser.id}
                todo={eachuser}
                deleteUser={this.deleteUser}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default SimpleTodos
