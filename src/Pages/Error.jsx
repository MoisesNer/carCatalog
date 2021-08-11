import React from 'react'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'
import { Link } from 'react-router-dom'

export default function Error() {
    return (
            <Hero hero='errorHero'>
                <Banner title='404' subtitle='Page not found'>
                <Link to='/' className='btn-primary'>
                    Back Home
                </Link>
                </Banner>
            </Hero>
    )
}
