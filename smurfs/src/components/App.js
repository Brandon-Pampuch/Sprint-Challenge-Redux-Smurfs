import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getData, addSmurf } from '../actions'

class App extends Component {
  state ={
    name: "",
    age: "",
    height:""

  }
  componentDidMount(){
  this.props.getData()
}

textChangeHandler = (event) =>{
  const newText = event.target.value
  this.setState({
    ...this.state,
    [event.target.name]:newText
    
  })
} 

addSmurf = (event) =>{
  event.preventDefault()
  this.props.addSmurf(this.state)
  this.setState({
    name: "",
    age: "",
    height:""
  })
}


  
  render() {
    return (
      <div>
        <h1>Smurfs</h1>
        {this.props.smurfs.map(smurf => <p>name: {smurf.name} age: {smurf.age} height: {smurf.height}</p>)}
        <div>
            <h1>Add new Smurf</h1>
            <form onSubmit={this.addSmurf}>
              <h2>name</h2>
              <input onChange={this.textChangeHandler} name="name" type="text" value={this.state.name} />
              <h2>age</h2>
              <input onChange={this.textChangeHandler} name="age" type="text" value={this.state.age} />
              <h2>height</h2>
              <input onChange={this.textChangeHandler} name="height" type="text" value={this.state.email} />
              <button>add User</button>
              {/* loader in button with isloggin in booliearn terinary */}
            </form>
          </div>
     </div>


    );
  }
}

const mapStateToProps = state =>({

  smurfs: state.smurfs

})

export default connect(mapStateToProps,{getData,addSmurf})(App);
