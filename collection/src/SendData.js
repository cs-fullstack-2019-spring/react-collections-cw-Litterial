import React, {Component} from 'react'
import DataChild from './DataChild'

class SendData extends Component
{

    render() {
        //holds raw data and sends it to child
        const raw_collection=require('./rawData');
        return(
        <DataChild data={raw_collection}/>
        )
    }
}


export default SendData;