import React, { Component } from 'react'
import '../App.css';

const btnStyle = {
        color: '#fff',
        padding: '1px 5px',
        borderRadius: '50%',
        position: 'absolute',
        right: '0'
    
}

export class Huis extends Component {

/*
    getStyle(id) {
        if(id === 1){
            return{
                background: 'red'
            }
        }else{
            return{
                background: 'blue'
            }
        }
    }
*/

    getStyle(id) {
        return{
           background: id === 3 ? 'grey' : 'blue'
        }
    } 

    
   
    render() {
        return this.props.items.map((item) => (
            <div className= "content">
                <p style = {this.getStyle(item.id)}>{item.id}</p>
                <p>{item.bezitting}</p>
                <p style = {{position: 'relative'}}>{item.waarde}
                <button style={btnStyle} onClick={this.props.delBezitting.bind(this, item.id)}>X</button>
                </p>
            </div>
        ));
    }

    
}


export default Huis
