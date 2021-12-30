import React,{Component} from 'react';
import'./css/Content.css';

class Content extends Component{
  // se crea un costructor para inicializar
  // los componentes
  constructor(){
    super();
    // state es objeto con, este tiene nodos
    // y oermite que el render se vuelva a ejecutar
    this.state={
      count:0,
      number1:0,
      number2:0,
      result:0
    };
    // se inicia los metodos para los clicks
    this.handleCountClick=this.handleCountClick.bind(this);
    this.handleResultClick=this.handleResultClick.bind(this);
    this.handleInputChanged=this.handleInputChanged.bind(this);
  }
  // comprueba si el componente ya cargo(state)
  componentDidMount(){
    this.setState({
      count: 1
    })
  }


  //COUNTER

//Aumentar
  handleCountClick(e){
    if(e.target.id==='add'){
      this.setState({
          count:this.state.count + 1
      });
//Reducir
    }else if (e.target.id==='subtract' && this.state.count >0){
      this.setState({
        count: this.state.count -1
      });
//restaurar
    }else{
      this.setState({
        count:0
      });
    }
  }

//FIN COUNTER



  //calculadora
// saca el resultado
  handleResultClick(e){
    this.setState({
      result:this.state.number1 + this.state.number2
  });
  }

// este comprueba que le pasem un numero
// y actualiza las variables de numero 1 y2
  handleInputChanged(e){
    if(e.target.id==='number1'){
      this.setState({
          number1: Number(e.target.value)
      });
    }else{
      this.setState({
        number2: Number(e.target.value)
      });
    }
  }
//fin calculadora




    render() {
      // esto pone un mensaje en consola 
      // para saber si se ejecuto el render
      console.log('Ejecuta Render')
        return (
          <div className="Content">
              <h1>React.js</h1>
              <br/>
              <h2>¿Que es el React JS?</h2>
              <p>React (también llamada React.js o ReactJS) 
                es una biblioteca Javascript de código 
                abierto diseñada para crear interfaces
                 de usuario con el objetivo de facilitar
                  el desarrollo de aplicaciones en una 
                  sola página.</p> 
              <p>
              React intenta ayudar a los 
              desarrolladores a construir 
              aplicaciones que usan datos que 
              cambian todo el tiempo. Su objetivo 
              es ser sencillo, declarativo y 
              fácil de combinar. React sólo 
              maneja la interfaz de usuario 
              en una aplicación</p> 
              <br></br>
             <fieldset>
              <legend>Practica</legend>
              {/* se llama al constructor */}
              <h2>Contador: {this.state.count}</h2>  
              <p>
                {/* se llaman a los metodos para
                los clicks */}
                <button id="add" onClick={this.handleCountClick}> + </button>
                <button id="subtract" onClick={this.handleCountClick}> - </button>
                <button id="reset" onClick={this.handleCountClick}> Reset </button>
              
                </p> 

            <h2>Calculadora</h2>
            <p>
            <input id="number1" type="number" value={this.state.number1} onChange={this.handleInputChanged}/>
            +
            <input id="number2" type="number" value={this.state.number2} onChange={this.handleInputChanged}/>

            <button id="result" onClick={this.handleResultClick}> Calcular </button>

            
            {this.state.result} {/* <-- con esto lo imprime */}
            </p>
            </fieldset>
          </div>
        );
      }
    }


export default Content;
