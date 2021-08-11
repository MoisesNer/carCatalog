import React from 'react'
import loadingGif from '../images/loading-buffering.gif'

export default function Loading() {
    return (
        <div className='loading'>
            <h4>Cars data loading...</h4>
            <img src={loadingGif} alt="loading" />
        </div>
    )
}