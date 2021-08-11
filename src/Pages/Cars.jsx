import React from 'react'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'
import { Link } from 'react-router-dom'
import CarContainer from '../Components/CarContainer'

export const Cars = () => {
    return (
<>
        <Hero hero='carsHero'>
            <Banner title='Cars' subtitle='Do you know this models?'>
                <Link to='/' className='btn-primary'>
                    Back Home
                </Link>
            </Banner>
        </Hero>
        <CarContainer/>
        </>
    )
}
