import React, {Component} from 'react'
import ArrayChild from './ArrayChild'

class DataChild extends Component{
    render(){
        //child grabs data and renders it map function
    const array_map=this.props.data.map((ele)=>
    {
    return(<ArrayChild key={ele.id} ele={ele}/>);
    });


    return(
        <div> {array_map}</div>
    )
    }
}

export default DataChild;