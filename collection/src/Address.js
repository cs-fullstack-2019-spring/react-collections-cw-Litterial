import React, {Component} from 'react'

class Address extends Component
{
    render()
    {
      //renders the addresss key-value pairs
      return(
        <div>
            <h4>street:{this.props.address.street}</h4>
            <h4>suite:{this.props.address.suite}</h4>
            <h4>city:{this.props.address.city}</h4>
            <h4>zipcode:{this.props.address.zipcode}</h4>
            <h4>lat:{this.props.address.geo.lat} lng:{this.props.address.geo.lng}</h4>
            <hr/>
          </div>
        )

    }

}

export default Address;

