import React from 'react'
import { homeObjOne, homeObjTwo } from './Data'
import { InfoSection, Pricing } from '../../components'

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>

        </>
    )
}

export default Home
