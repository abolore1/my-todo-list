import React from 'react'

class TodoForm extends React.Component{
    state = {
       content:''
    }
    handleChange= e => this.setState({ content:e.target.value })
    
    handleSubmit =(e) =>{
        e.preventDefault();
        
      if(this.state.content === ''){
        alert('Input Todo!!!');
      } else {
          this.props.addTodo(this.state)
          this.setState({content:''})  //value={this.state.content} to clear 
      }
    };

  render(){
      return (
        <div>
          <form onSubmit={this.handleSubmit} >
            <input
              type="text"
              onChange={this.handleChange}
              placeholder="Add To-do"
              autoFocus
              value={this.state.content}
            />
            <button
              className="btn right"
              style={{ fontFamily: "Algerian", borderRadius: 5 }}
            >
              Add Todo
            </button>
          </form>
        </div>
      );
  }


}

export default TodoForm