import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from '../UI/Spinner'
const CMenu = ({isLoading, items}) => {
    return isLoading ? <Spinner/>:
        <section>
            <div className="container">
                <div className="row">
                    {items.map(item => (
                        <div className="col-sm-12 col-md-4 col-lg-4">
                            <CharacterItem key={item.char_id} item={item}></CharacterItem>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    
}

export default CMenu
