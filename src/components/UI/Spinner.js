import React from 'react'
import spinner from '../../assets/loader.gif'
const Spinner = () => {
    return (
        <img src={spinner} style={{width:'200px', margin:'auto', display:'block'}} alt='LOADING'/>
    )
}

export default Spinner
