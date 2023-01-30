import React from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { UseGlobalContext } from '../Context'


export const Modal = () => {
    const {SelectedMeal} = UseGlobalContext()
    console.log(SelectedMeal)

    
    const {
        strMeal: MealName, 
        strInstructions: MealDescription, 
        strMealThumb:MealImage, 
        strYoutube: OriginalSource,
        } = SelectedMeal

    return (
        
        <Container className='modal--container'>
            <Card variant="top" className='modal--meal'>
                <Card.Img src={MealImage} className='modal--img'></Card.Img>
                    <Card.Body>
                        <Card.Title>{MealName}</Card.Title>
                        <Card.Subtitle>Cooking Instructions</Card.Subtitle>
                        <Card.Text>{MealDescription}</Card.Text>

                        <Card.Footer className='modal--footer'>
                            <Card.Link href={OriginalSource}>OriginalSource</Card.Link>
                            <Button variant="secondary" onClick={null}>Close</Button>
                        </Card.Footer>

                    </Card.Body>
            </Card>            
        </Container>
    )
}
