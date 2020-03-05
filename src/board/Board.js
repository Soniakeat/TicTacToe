import React from 'react';
import Square from './Square';

class Board extends React.Component{
  constructor(props) {
      super(props);
      this.state= {
          currentState: ['','','','','','','','',''],
          currentPlayer: 'x'
      }
  }

  selectSquare = index => {
    console.log('you clicked me :' + index)
    let newState= this.state.currentState
    let nextPlayer= this.state.currentPlayer==='x'?'o':'x'
    newState[index] = this.state.currentPlayer
    this.setState({...this.state, currentState:newState, currentPlayer: nextPlayer}) 
  }




    render(){
        return(
            <div>   
               {this.state.currentState.map((val,index) => {
                   return <Square id={index} value={val} playerSelect={this.selectSquare}/>;
               })
    
               }
            </div>
        )
     
    }
}

export default Board;