import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { UseGlobalContext } from '../Context'


export const Favorite = () => {
    const {FavoriteMeals, ChooseMeal} = UseGlobalContext()

    
    return (
        <Container fluid className='favorite--container'>
            <Row>

                <Col lg={12} className='favorite--meal'>
                    {
                        FavoriteMeals.map( meal => {
                            const {strMealThumb: MealImage, strMeal: MealName, idMeal: MealID} = meal
                            return (
                                <>
                                
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
                                </>
                                    
                                    )
                        })
                    }
                </Col>
            </Row>
        </Container>
    )
}
