import React from 'react'
// import CarsFilter from './CarsFilter.jsx'
import CarsList from './CarsList.jsx'
import Loading from './Loading'

import { withCarConsumer } from '../Context'

function CarContainer({context}){
    const {loading, sortedCars, cars} = context;
    if(loading){
                                return <Loading/>
                            }
        
                            return(
                            <>
                                {/* <CarsFilter cars={cars}/> */}
                                <CarsList cars={sortedCars} />
                            </>)
}

export default withCarConsumer(CarContainer)

// import React from 'react'
// import CarsFilter from './CarsFilter.jsx'
// import CarsList from './CarsList.jsx'
// import Loading from './Loading'

// import { CarConsumer } from '../Context'

// export default function CarContainer() {
//     return (

//         <CarConsumer>
//             {value => {
//                 const {loading, sortedCars, cars} = value;
//                     // console.log(cars);
//                     if(loading){
//                         return <Loading/>
//                     }

//                     return(
//                     <div>
//                         <CarsFilter cars={cars}/>
//                         <CarsList cars={sortedCars} />
//                     </div>
//                     )
//                 }
//             }
//         </CarConsumer>

//     )
// }