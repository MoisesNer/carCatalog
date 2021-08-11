import React, { Component } from 'react'
import items from './data';

const CarContext = React.createContext();

class CarProvider extends Component {
    state = {
        cars: [],
        sortedCars: [],
        featuredCars: [],
        loading: true
    };

    // getData

    componentDidMount() {
        let cars = this.formatData(items);
        let featuredCars = cars.filter(car => car.featured === true);

        this.setState({
            cars,
            featuredCars,
            sortedCars: cars,
            loading: false
        })
    }

    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id
            let images = item.fields.images.map(image => image.fields.file.url);

            let car = { ...item.fields, images, id }
            return car;
        })
        return tempItems
    }

    getCar = slug => {
        let tempCars = [...this.state.cars];
        const car = tempCars.find(car => car.slug === slug);
        return car
    }

    render() {
        return (
            <CarContext.Provider
                value={{
                    ...this.state, getCar: this.getCar
                }}>
                {this.props.children}
            </CarContext.Provider>
        )
    }
}

const CarConsumer = CarContext.Consumer;

export { CarConsumer, CarContext, CarProvider }

// HIGH ORDER COMPONENT
export function withCarConsumer(Component){
    return function ConsumerWrapper(props){
        return <CarConsumer>
            {value => <Component {...props} context={value}/>}
        </CarConsumer>
    }
}