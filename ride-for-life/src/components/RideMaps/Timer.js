// below is some code for a proto-timer for the 'how long do you want to wait' component
// putting this into the backlog as i get some components styled

/* <Container
      style = {{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      profile
    >
      <Button cancel />
      <Button save />
      <Button delete />
      <Button style = {{
        padding: '10px 50px'
      }}>
        default
      </Button> 
    </Container>

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
  
    render() {
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
          { this.state.increment }
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
    return (
      <button
        val = { props.val }
        onClick = { () => props.begin(props.val) }
      >
        { props.val } Minutes
      </button>
    )

    */