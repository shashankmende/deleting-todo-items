import {Component} from 'react'
import './index.css'

import {v4 as uuidv4} from 'uuid'

import TodoItemComponent from '../TodoItem'

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

const newList = initialTodosList.map(each => ({
  ...each,
  edit: false,
  taskStatus: true,
}))

// Write your code here

class SimpleTodos extends Component {
  state = {userDetailsList: newList, title: ''}

  deleteUser = uniqueNo => {
    console.log('unique No', uniqueNo)
    const {userDetailsList} = this.state
    const filteredList = userDetailsList.filter(each => each.id !== uniqueNo)
    this.setState({
      userDetailsList: filteredList,
    })
  }

  onClickAddBtn = () => {
    const {userDetailsList, title} = this.state

    /*  const titleList = title.split(' ')
    const numberOfTitles = titleList[titleList.length - 1]

    console.log('number of titles', titleList, typeof parseInt(numberOfTitles))

    const multipliedObjects = []
    if (Number(numberOfTitles) !== 'NaN') {
      for (let i = 0; i < numberOfTitles; i += 1) {
        const newObject = {
          id: uuidv4(),
          title,
          edit: false,
          taskStatus: true,
        }
        multipliedObjects.push(newObject)
      }
      console.log('multiplied object', multipliedObjects)
      this.setState({
        userDetailsList: [...userDetailsList, ...multipliedObjects],
      })
    } else {
      const newTodo = {
        id: uuidv4(),
        title,
        edit: false,
        taskStatus: true,
      }
      this.setState({
        userDetailsList: [...userDetailsList, newTodo],
        title: '',
      })
    }
        */

    const newTodo = {
      id: uuidv4(),
      title,
      edit: false,
      taskStatus: true,
    }
    this.setState({
      userDetailsList: [...userDetailsList, newTodo],
      title: '',
    })
  }

  onChangeTitle = event => {
    this.setState({
      title: event.target.value,
    })
  }

  updateBtnStatus = id => {
    const {userDetailsList} = this.state
    this.setState({
      userDetailsList: userDetailsList.map(each => {
        if (each.id === id) {
          return {...each, edit: !each.edit}
        }
        return each
      }),
    })
  }

  updateTitle = (id, title) => {
    const {userDetailsList} = this.state
    this.setState({
      userDetailsList: userDetailsList.map(each => {
        if (each.id === id) {
          return {...each, title}
        }
        return each
      }),
    })
  }

  updateTaskStatus = (id, status) => {
    const {userDetailsList} = this.state
    this.setState({
      userDetailsList: userDetailsList.map(each => {
        if (each.id === id) {
          return {...each, taskStatus: !status}
        }
        return each
      }),
    })
  }

  render() {
    const {userDetailsList, title} = this.state
    return (
      <div className="bg_container">
        <div className="Todos-container">
          <ul className="todo-items-container">
            <h1 className="todo-heading">Simple Todos</h1>
            <div className="input-container">
              <input
                type="text"
                className="input"
                onChange={this.onChangeTitle}
                value={title}
                placeholder="Enter Task..."
              />
              <button
                type="button"
                className="add-btn"
                onClick={this.onClickAddBtn}
              >
                Add
              </button>
            </div>
            {userDetailsList.map(eachuser => (
              <TodoItemComponent
                key={eachuser.id}
                todo={eachuser}
                deleteUser={this.deleteUser}
                updateBtnStatus={this.updateBtnStatus}
                updateTitle={this.updateTitle}
                updateTaskStatus={this.updateTaskStatus}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default SimpleTodos
