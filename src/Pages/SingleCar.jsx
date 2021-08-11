import React, { Component } from 'react'
import Banner from '../Components/Banner'
import { Link } from 'react-router-dom'
import { CarContext } from '../Context'
import StyledHero from '../Components/StyledHero'

export default class SingleCar extends Component {
    constructor(props) {
        super(props)
        // console.log(this.props);
        this.state = {
            slug: this.props.match.params.slug,
        }
    }

    static contextType = CarContext;
    // componentDidMount(){}

    render() {

        const { getCar } = this.context;
        const car = getCar(this.state.slug);
        if (!car) {
            return <div className="error">
                <h3>No car with those characteristics on file</h3>
                <Link to='/cars' className='btn-primary'>Back to Cars</Link>
            </div>
        }

        const { name, description, engine, models, images, capacity } = car
        const [mainImg, ...defaultImg] = images;
        return (
            <>
                <StyledHero img={mainImg || 'https://images.unsplash.com/photo-1582834202430-ddcd18987a61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'}>
                    <Banner title={`${name}`}>
                        <Link to='/cars' className='btn-primary'>Back to Cars</Link>
                    </Banner>
                </StyledHero>

                <section className="single-car">
                    <div className="single-car-info">
                        <article className="desc">
                            <h3>Specs:</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                        <h3>info</h3>
                        <h6>Engine: {engine}</h6>
                        <h6>Number of Seats: {capacity}</h6>
                        </article>
                    </div>
                </section>
                <section className="car-models">
                    <h3>Models</h3>
                    <ul className="models">
                        {models.map((item, index)=> {
                            return <li key={index}>{item}</li>
                        })}
                    </ul>
                </section>
                <div className="single-car-images">
                        {/* TO SHOW ALL IMAGES WITH .MAP */}
                        {defaultImg.map((item, index) => { return <img key={index} src={item} alt={name} className='mapedImages'/> })}
                    </div>
            </>
        )
    }
}
