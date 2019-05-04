import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class Container extends Component {
  state = {
    open: false
  }

  container = obj => ({
    height: this.props.map ? '0' : '100vh',
    width: '100vw',
    background: this.props.blue ? '#4f6d7a' : this.props.home ? `url(${this.props.img})` : this.props.map ? 'none' : '#f5f5f5',
    color: this.props.blue ? '#ffffff' : '#707070',
    position: 'absolute',
    top: '0',
    right: '0',
    ...obj,
  })

  open = () => {
    this.setState({ open: !this.state.open })
  }
  
  render() {
    if(this.props.home) {
      return (
        <div
          { ...this.props }
          style = { this.container(this.props.style) }
        >
          { this.props.children }
        </div>
        
      )
    } else if(this.props.profile) {
      return (
        <div
          { ...this.props }
          style = { this.container(this.props.style) }
        >
          <GoBack />
          { this.props.children }
        </div>
      )
    } else {
      return (
        <div
          { ...this.props }
          style = { this.container(this.props.style) }
        >
          <GoBack />
          <Hamburger 
            blue = { this.props.blue }
            open = { this.open }
            isOpen = { this.state.open }
          />
          <Menu 
            open = { this.state.open }
          />
          { this.props.children }
        </div>
      )
    }
  }
}

const GoBack = () => {
  const style = {
    position: 'absolute',
    top: '2vh',
    left: '2vh',
    cursor: 'pointer',
    fontFamily: 'Source Sans Pro'
  }

  return (
    <span
      style = { style }
    >
       &lt; go back
    </span>
  );
}

const Hamburger = props => {
  const container = {
    position: 'absolute',
    top: '2vh',
    right: '2vw',
    cursor: 'pointer',
    zIndex: 1000
  }
  
  const line = blue => ({
    width: '25px',
    height: '3px',
    background: blue ? '#fff' : '#707070',
    margin: '4px 0'
  })

  const x = {
    color: '#4f6d7a',
  }

  return (
    <div 
      style = { container }
      onClick = { () => props.open() }
    >
      { props.isOpen ? <p style={x}>X</p> :
        <>
        <div style = { line(props.blue) }></div>
        <div style = { line(props.blue) }></div>
        <div style = { line(props.blue) }></div>
        </>
      }
    </div>
  )
}

const Menu = props => {
  const container = open => ({
    position: 'absolute',
    width: '25vw',
    height: '100vh',
    right: open ? '0' : '-25vw',
    background: '#ffffff',
    borderLeft: '1px solid white',
    transition: 'right 1s ease',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: '50px 0'
  })

  const style = {
    fontSize: '25px',
    textDecoration: 'none',
    fontFamily: 'Source Sans Pro',
    textAlign: 'center',
    color: '#4f6d7a',
    background: 'none',
    border: 'none',
    fontWeight: '600',

  }

  return (
    <div
      style = { container(props.open) }
    >
      <NavLink to='' style= { style }>My Account</NavLink>
      <NavLink to='' style= { style }>My Profile</NavLink>
      <NavLink to='' style= { style }>About</NavLink>
      <button style= { style }>Log Out</button>
    </div>
  )
}

export const Button = props => {
  const style = obj => ({
    background: props.cancel ? '#f5f5f5' : props.delete ? '#ED1111' : props.default ? '#4f6d7a' : props.logout ? '#ffffff' : '#e89980',
    color: props.cancel ? '#707070' : props.logout ? '#4f6d7a' : '#fff',
    border: props.cancel ? '1px solid #707070' : 'none',
    borderRadius: '5px',
    padding: '10px 25px',
    margin: '10px 0',
    cursor: 'pointer',
    textAlign: 'center',
    fontSize: '14px',
    ...obj
  })

  if(props.cancel) {
    return (
      <button
        { ...props }
        style = { style(props.style) }
      >
        Cancel
      </button>
    )
  } else if(props.delete) {
    return (
      <button
        { ...props }
        style = { style(props.style) }
      >
        Delete
      </button>
    )
  } else if(props.logout) {
    return (
      <button
        {...props}
        style = { style(props.style) } >
        Log Out 
      </button>
    )
  } else if(props.submit) {
    return (
      <input 
        type="submit"
        value = { props.value }
        style = { style(props.style) }
      />
    )
  } else {
    return (
      <button
        { ...props }
        style = { style(props.style) }
      >
        { props.children }
      </button>
    );
  }
}

export const Text = props => {
  const style = obj => ({
    ...obj,
    borderRadius: '2px',
    border: '1px solid #e89980',
    cols: props.cols,
    rows: props.rows
  })

  if(props.textarea) {
    return (
      <textarea
        { ...props }
        style = { style(props.style) }
      >
        { props.children }
      </textarea>
    )
  } else {
    return (
      <input
        { ...props }
        style = { style(props.style) }
      />
    )
  }
}

export const Column = props => {
  const style = obj => ({
    ...obj,
    display: 'flex',
    flexDirection: 'column'
  })

  return (
    <div
      { ...props }
      style = { style(props.style) }
    >
      { props.children }
    </div>
  )
}

export const Form = props => {
  const style = obj => ({
    ...obj,
  })

  return (
    <form
      { ...props }
      style = { style(props.style) }
    >
      { props.children }
    </form>
  );
}

export const Previous = props => {
  const style = obj => ({
    ...obj, 
    width: '80%',
    height: props.height,
    border: '2px solid #e89980',
    borderRadius: '5px',
    color: '#707070',
    display: 'flex',
    flexDirection: '',
    justifyContent: 'space-between',
    padding: props.profile ? '5px' : '10px 30px',
  })

  if(props.profile) {
    return (
      <div
        {...props}
        style = { style(props.style) } >
        {props.children}
      </div>
    )
  }

  else {
    return (
    <div
      {...props}
      style = { style(props.style) }>
        {props.children}
    </div>
    )
  }
}


//add photo component here for stretch, w/ prop that tells it whether it's in editing or not
