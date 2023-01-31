import React from 'react'
import { Container, Row, Col, Stack } from 'react-bootstrap'
import { UseGlobalContext } from '../Context'


export const Favorite = () => {
    const {FavoriteMeals, RemoveFromFavorite, ChooseMeal} = UseGlobalContext()

    
    return (
        <Container fluid className='favorite--container'>
            <Row>

                <Col lg={12} className='favorite--meal'>
                    {
                        FavoriteMeals.map( meal => {
                            const {strMealThumb: MealImage, strMeal: MealName, idMeal: MealID} = meal
                            return (
                                <div className='favorite--object'>
                                
                                    <img 
                                        src={MealImage} 
                                        alt={MealName} 
                                        className='favorite--img'
                                        onClick={() => ChooseMeal(MealID)}

                                    />
                                    <span 
                                        className='favorite--remove'
                                        onClick={() => RemoveFromFavorite(MealID)}
                                    >Remove</span>
                                </div>
                                    
                                    )
                        })
                    }
                </Col>
            </Row>
        </Container>
    )
}
