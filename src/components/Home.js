import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Header, Button } from 'semantic-ui-react'

class Home extends Component {
  render () {
    return (
      <div id='home-page'>
        <Container>
          <Header as='h1' id='home-logo'>
            Slices
          </Header>
          <Container id='home-content'>
            <Header as='h1' id='home-header'>
              Delicious pizzas delivered to your doorstep
            </Header>
            <Link to='/menu'>
              <Button color='teal' size='large' width={4}>
                {' '}
                ORDER NOW{' '}
              </Button>
            </Link>
          </Container>
        </Container>
      </div>
    )
  }
}

export default Home
