import React, {Component} from 'react'
import './blank.css'
import Address from './Address'
class ArrayChild extends Component{

    constructor(props)
    {
    super(props)
    }


    showKey= (e)=> // function to turn check id and turn on and off colors
    {
        console.log(this.props.ele.id);
        var color=document.querySelector('h4');
        color.classList.toggle('blackandWhite')

    };


    render() {
        // address is all of the key-value pairs inside the address
        const address=this.props.ele.address;
        //returns all key-value pairs outside of address
        return(
            <div id='test' className='container' onClick={this.showKey}>
                <h4>id:{this.props.ele.id}</h4>
                <h4>name:{this.props.ele.name}</h4>
                <h4>username:{this.props.ele.username}</h4>
                <h4>email:{this.props.ele.email}</h4>

                <Address address={address}/>

            </div>

        )
    }
}

export default ArrayChild;