import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import ResInput from './ResInput';
import { RestaurantStore } from '../stores/RestaurantStore';
import Reservation from './Reservation';

class Restaurant extends Component{
    addRes= () => {
        let name = this.props.GeneralStore.name
        let num = this.props.GeneralStore.numPeople
        this.props.RestaurantStore.addRes(name, num)
    }
    render () {
        return (
            <div>
                <p>You have {this.props.RestaurantStore.openTables} open tables</p>
                <p>You have {this.props.RestaurantStore.restPopulation} people seated in the restaurant</p>
                <p>You have {this.props.RestaurantStore.completedTables} completed tables in the restaurant</p>
                <ResInput/>
                <button id="addRes" onClick={this.addRes}>Add Reservation</button>
                {/* Make the Add Reservation button work */}
                <div className = "reservations">
                    {this.props.RestaurantStore.reservations.map((r, i) => 
                        !r.completed && <Reservation reservation = {r} key = {i}/>)}
            
                </div>
            </div>
        )
    }
}

export default inject("GeneralStore", "RestaurantStore")(observer(Restaurant))