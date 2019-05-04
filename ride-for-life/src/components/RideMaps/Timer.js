import React, { Component } from 'react';

class Timer extends Component {
  state = {
    count: 0,
    increment: 0,
    response: false
  }

  count = num => {
    this.setState({ interval: setInterval(this.increment, 1000), count: num * 60 })
  }

  increment = () => {
    if(this.state.increment === this.state.count) {
      this.setState({ increment: 0, count: 0, interval: '' })
    } else {
      this.setState({ increment: this.state.increment + 1 })
    }
  }

  render() { console.log(this.state.increment)
    return (
      <div style = {{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        position: 'relative'
      }}>
      <span
        style = {{
          fontSize: '40px',
          position: 'absolute',
          top: '5vh',
          left: '49.5vw'
        }}
      >
        { this.state.count }
      </span>
        <Button 
          style = {{padding: '10px 20px', cursor: 'pointer'}} 
          begin = { this.count }
          val = { 2 }
        />
        <Button 
          style = {{padding: '10px 20px', cursor: 'pointer'}} 
          begin = { this.count }
          val = { 5 }
        />
        <Button 
          style = {{padding: '10px 20px', cursor: 'pointer'}} 
          begin = { this.count }
          val = { 10 }
        />
      </div>  
    );
  }
}

const Button = props => {
  const style = {

  }

  return (
    <button 
      {...props}
      onClick = { () => props.begin(props.val) } 
    >
      {props.val} mins
    </button>
  )
}

export default Timer