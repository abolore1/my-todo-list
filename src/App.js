import React,{Component} from 'react'
import Todos from './Todos'
import TodoForm from './TodoForm'
import Greeting from './Greeting'
// import './styles/materialize/css/materialize.css'
import './styles/style.css'


class App extends Component{
   state = { todos:[] }
   deleteTodo=(id)=>{
    const todos = this.state.todos.filter(todo=>{
      return todo.id!==id
    });
    this.setState({ todos })
   }

   addTodo=(todo)=>{
    todo.id = Math.random()
    let todos = [...this.state.todos,todo]
    this.setState({ todos:todos })
   }

   render(){
     return(
       <div className="todo-app container" style={{fontFamily:"sans-serif"}}>
        <nav className="nav-wrapper " style={{backgroundColor:"#009999",borderRadius:8}}  >
        <h3 className="white-text center"> Todo's List</h3> 
          <div className="right white-text "><Greeting /></div>
        
        </nav>
         <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}  />
         <TodoForm addTodo={this.addTodo} />
         
       </div>
     )
   }
}

export default App 