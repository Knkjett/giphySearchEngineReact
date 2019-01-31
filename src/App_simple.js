import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { 
  Col,
  Container, 
  Row,
} from 'reactstrap';

import { Gif } from './components/Gif';
import { Title } from './components/Title';

class App extends Component {
  render() {
    const gifs = this.getGifComponents();
    
    return <Container>
      <Title label="Gif Search Engine" />
      <Row>
        {gifs}
      </Row>
      
    </Container>
  }
  getGifComponents() {
    return this.props.imgs.map((imgSrc, index) => {
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
