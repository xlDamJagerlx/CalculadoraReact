import React, { Component } from 'react';

//Components
import Header from './Global/Header';
import Content from './Global/Content';
import Footer from './Global/Footer';

class App extends Component{
    render() {
        return (
          <div className="App">
              {/* incluye este componete Header y lo inserta en esta etiqueta */}
              <Header/>
              <Content/>
              <Footer/>        
          </div>
        );
      }
    }


export default App;