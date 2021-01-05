import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'

class Reservation extends Component {
    completeRes = (e) => {this.props.RestaurantStore.completeRes(e.target.id)}
    
    seatRes = (e) => {this.props.RestaurantStore.seatRes(e.target.id)}

    render() {
        let res = this.props.reservation
        return (
            <div>
                {res.name} : {res.numPeople}
                <button className="completeRes" id={res.id} onClick={this.seatRes}>Seated</button>
                <button className="completeRes" id={res.id} onClick={this.completeRes}>Completed</button>
            </div>
            //render the reservation data here
            //make sure you store the ID somewhere so you can find the reservation
            //use the class "conditional" to conditionally render completed reservations
            //You should hav ea complete reservation button to complete the reservation
        )
    }
}

//inject your store here
export default inject("GeneralStore", "RestaurantStore")(observer(Reservation))