import React, { Component } from "react";
import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";
import angry0 from "../../images/angry0.png";
import sadcrying1 from "../../images/sadcrying1.png";
import sadcrying2 from "../../images/sadcrying2.jpg";
import midhappy3 from "../../images/midhappy3.png";
import happy4 from "../../images/happy4.png";


// function TojdoList() {
//   const todoComponent = todos.map(function(todoitem) {
//     return <TodoItem key={todoitem.id} item={todoitem} />;
//   });

//   return todoComponent;
// }

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todosData: [
        {
          id: 1,
          text: "Meditate (for atleast 10 mins)",
          completed: false
        },
        {
          id: 2,
          text: "Exercise (for atleast 10 mins)",
          completed: false
        },
        {
          id: 3,
          text: "Contribute in household chores",
          completed: false
        },
        {
          id: 4,
          text: "Work towards your goal",
          completed: false
        },
      ],
      count: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    // console.log("Hello", id);
    this.setState(prevState => {
      prevState.count=0;
      const updatedTodos = prevState.todosData.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        if(todo.completed){
          prevState.count+=1;
        }
        return todo;
      });

      return {
        todosData: updatedTodos
      };
    });
  }

  render() {
    const handleChange = this.handleChange;
    const todoComponent = this.state.todosData.map(function(todoitem) {
      return (
        <TodoItem
          key={todoitem.id}
          item={todoitem}
          handleChange={handleChange}
        />
      );
    });
    return <div className={styles.todolist}>
            <h1>Don't feel bored if you haven't checked this todo yet!</h1>
           {todoComponent}
           <div className={styles.smileys}>
           {this.state.count===0 && (<img src={angry0}/>)}
           {this.state.count===1 && (<img src={sadcrying1}/>)}
           {this.state.count===2 && (<img src={sadcrying2}/>)}
           {this.state.count===3 && (<img src={midhappy3}/>)}
           {this.state.count===4 && (<img src={happy4}/>)}
           </div>
           </div>
  }
}

export default TodoList;
