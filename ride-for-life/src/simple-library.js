import React from 'react';

export const Container = props => {
  const style = obj => ({
    ...obj,
    height: '100vh',
    width: '100vw',
    backgroundColor: props.blue ? '#4f6d7a' : '#f5f5f5',
    color: props.blue ? '#f5f5f5' : '#4f6d7a',
    position: 'relative'
  })

  return (
    <div
      { ...props }
      style = { style(props.style) }
    >
       { props.children }
    </div>
  );
}

export const GoBack = props => {
  const style = obj => ({
    ...obj,
    position: 'absolute',
    top: '2vh',
    left: '2vh'
  })

  return (
    <span
      { ...props }
      style = { style(props.style) }
    >
       &lt; go back
    </span>
  );
}