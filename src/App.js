import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {getGifs} from './gifs';

import { 
  Col,
  Container, 
  Input,
  Row,
} from 'reactstrap';

import { Gif } from './components/Gif';
import { Title } from './components/Title';

class App extends Component {
  constructor(props) {
    super(props) // dw about thsi yet, we will talk about it

    this.state = {
      imgs: [],
      isLoading: true,
    }
    
  }

  handleKeyDown(e) {
    const {keyCode} = e;

    if (keyCode === 13) {
      this.setState({isLoading: true,})
      getGifs(e.target.value)
        .then(data => {
          this.setState({
            imgs: data,
            isLoading: false,
          });
        })
    }
  }

  render() {
    const gifs = this.getGifComponents();
    
    return <Container>
      <Title label="Gif Search Engine" />
      <Input placeholder="Search Gifs..." onKeyDown={e => this.handleKeyDown(e)}/>
      <Row>
        {gifs}
      </Row>
      
    </Container>
  }

  getGifComponents() {
    if (this.state.isLoading) {
      return <header className="App-header" style={{backgroundColor: 'white'}}>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    }

  return this.state.imgs.map((imgSrc, index) => {
      return this.renderGif(imgSrc, index)
    })
  }
  renderGif(imgSrc, index) {
    return <Col md="4" key={index}>
      <Gif src={imgSrc} foobar={index} />
    </Col>
  }
}

export default App;
