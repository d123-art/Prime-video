import React, {Component} from 'react'

export default class DeclareClass extends Component {

    state ={
        cuenta : 0
    }

    render(){
        return (
            <div>
                La cuenta es: {this.state.cuenta}

                <button

                OnClick={()=>this.setState({cuenta: this.state.cuenta +1})}

                />

            </div>
        )
        }
    }


    
