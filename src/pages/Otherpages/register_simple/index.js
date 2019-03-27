import React from 'react'
import Profile1 from './profile1'
import Profile2 from './profile2'

class register extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            currentState:1
        }
        this.next=this.next.bind(this)
        this.prev=this.perv.bind(this)

    }
    next(desired){
        let currentState=this.state.currentState
        let nextstate=desired
        this.setState({
            currentState:nextstate
        })
    }
    perv(desired){
        let currentState=this.state.currentState
        let pervstate=desired
        this.setState({
            currentState:pervstate
        })
    }

    currentstep(){
        switch(this.state.currentState){
            case 1:
            console.log("1 page")
            return(<Profile1 next={this.next} prev={this.prev}/>)
            case 2:
            console.log("2 page")
            return(<Profile2 next={this.next} prev={this.prev}
            />)
        }
    }
    
    render() {
        return (
            <div>
                {this.currentstep()}
            </div>
        )
    }
}
export default register