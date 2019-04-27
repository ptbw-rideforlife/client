import React from 'react';

export const Container = props => {
  const container = obj => ({
    ...obj,
    height: '100vh',
    width: '100vw',
    background: props.blue ? '#4f6d7a' : props.home ? `lightgray` : '#f5f5f5',
    color: props.blue ? '#ffffff' : '#707070',
    position: 'relative'
  })

  const GoBack = () => {
    const style = {
      position: 'absolute',
      top: '2vh',
      left: '2vh',
      fontFamily: "'Source Serif Pro', serif" 
    }
  
    return (
      <span
        { ...props }
        style = { style }
      >
         &lt; go back
      </span>
    );
  }

  const Menu = props => {
    const container = {
      position: 'absolute',
      top: '2vh',
      right: '2vw'
    }
    
    const line = blue => ({
      width: '35px',
      height: '5px',
      background: blue ? '#fff' : '#707070',
      margin: '6px 0'
    })

    return (
      <div style = { container }>
        <div style = { line(props.blue) }></div>
        <div style = { line(props.blue) }></div>
        <div style = { line(props.blue) }></div>
      </div>
    )
  }

  if(props.home) {
    return (
      <div
        { ...props }
        style = { container(props.style) }
      >
        { props.children }
      </div>
    )
  } else if(props.profile) {
    return (
      <div
        { ...props }
        style = { container(props.style) }
      >
        <GoBack />
        { props.children }
      </div>
    )
  } else {
    return (
      <div
        { ...props }
        style = { container(props.style) }
      >
        <GoBack />
        <Menu 
          blue = { props.blue }
        />
        { props.children }
      </div>
    )
  }
}

export const Button = props => {
  const style = obj => ({
    background: props.cancel ? '#f5f5f5' : props.delete ? '#ED1111' : props.save ? '#4f6d7a' : '#e89980',
    color: props.cancel ? '#707070' : '#fff',
    border: props.cancel ? '1px solid #707070' : 'none',
    borderRadius: '5px',
    padding: '10px 25px',
    cursor: 'pointer',
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
  } else if(props.save) {
    return (
      <button
        { ...props }
        style = { style(props.style) }
      >
        Save
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
    borderRadius: '5px',
    border: ' 2px solid #e89980'
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
        type="text"
        placeholder = { props.placeholder }
      />
    )
  }
}