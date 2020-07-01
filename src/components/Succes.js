import React, {Component} from 'react';
import Huis from './Huis';

class Test extends Component {    
        state = {   
            items: [
            {
                id:1,
                bezitting: 'horloge',
                waarde: 300,
                compleet: true
            },
            {
                id:2,
                bezitting: 'auto',
                waarde: 18000,
                compleet: true
            },
            {
                id:3,
                bezitting: 'huis',
                waarde: 400000,
                compleet: false
            }
            ]
        }; 
    delBezitting = (id) => {
        this.setState({items: [...this.state.items.filter(item => item.id !==id)]})
    } 

    
    render() {    
        return(
            <Huis items={this.state.items} delBezitting={this.delBezitting}/>
        )
    }
}

export default Test