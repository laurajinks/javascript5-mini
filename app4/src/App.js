import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: []
        };

        this.getCars = this.getCars.bind(this);
    }

    getCars() {
        axios.get("https://joes-autos.herokuapp.com/api/vehicles").then(res => {
            console.log(res.data);
            this.setState({
                cars: res.data
            });
        });
    }

    render() {
        const cars = this.state.cars.map(car => {
            return (
                <div>
                    <h3>Make: {car.make}</h3>
                    <h3>Model: {car.model}</h3>
                    <p>Year: {car.year}</p>
                    <p>Price: {car.price}</p>
                </div>
            );
        });
        return (
            <div className="App">
                <button onClick={this.getCars}>Get cars</button>
                {cars}
            </div>
        );
    }
}

export default App;
