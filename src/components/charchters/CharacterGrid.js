import React from 'react'
import CharacterItems from './CharacterItems'
import Spinner from '../UI/Spinner'

const CharacterGrid = ({items, isLoading}) => {
    return (
        isLoading ? (<Spinner/>) : 
            <section className='cards'>
                {items.map((item,index) => (
                    <CharacterItems key={index} item={item}></CharacterItems>
                ))}
            </section>
        
    )
}

export default CharacterGrid