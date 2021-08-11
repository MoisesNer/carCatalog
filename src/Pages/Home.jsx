import React from 'react'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'
import {Link} from 'react-router-dom'
import LinkPages from '../Components/LinkPages'
import FeaturedCars from '../Components/FeaturedCars'

export default function Home() {
    return (
        <>
            <Hero hero='defaultHero'>
                <Banner title='The Fastest Cars' subtitle='Get rich in knowledge about cars'>
                    <Link to='/cars' className='btn-primary'>
                        Cars
                    </Link>
                </Banner>
            </Hero>
            <LinkPages/>
            <FeaturedCars/>
        </>
    )
}
