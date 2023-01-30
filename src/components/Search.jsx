import React, {useState} from 'react'
import { Row, Col } from 'react-bootstrap'
import { UseGlobalContext } from '../Context'


export const Search = () => {

    const [Text, setText] = useState("");
    const {setSearchTerm, GetRandomMeal, SelectedMeal} = UseGlobalContext()

    const MonitorInput = (event) => {
        setText(event.currentTarget.value)
    }
    const SendInputToSearchTerm = (event) => {
        event.preventDefault()
        Text ? setSearchTerm(Text): setSearchTerm("")
        console.log(SelectedMeal)
    }

    return (
        <Row className='search--block'>
            <Col lg={12} className='search--area'>

                <form onSubmit={SendInputToSearchTerm}>
                    <input 
                        type="text" 
                        placeholder='Search'
                        name='SearchBar'
                        className='search--searchbar'
                        onChange={MonitorInput}
                        value={Text}
                        

                    />
                    <button type='submit' 
                        onClick={null} 
                        className='form--search'
                    >Search</button>

                    <button 
                        type='button'
                        onClick={() => GetRandomMeal()} 
                        className='form--random'
                        
                    >Surprise me</button>
                </form>
            </Col>
        </Row>
    )
}
