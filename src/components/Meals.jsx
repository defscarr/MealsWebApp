import React from 'react'
import {BsHandThumbsUp} from "react-icons/bs"
import { UseGlobalContext } from '../Context'
import { Button, Card, Container } from 'react-bootstrap'

export const Meals = () => {

    const {

        Meals, 
        IsLoading, 
        ChooseMeal, 
        MakeFavorite,

    } = UseGlobalContext()

    const Liked = {
        color: "deepskyblue",
    }
    const UnLiked = {
        color: "black",
    }
    
    if(IsLoading)
        return (
            <h2>Meals are Loading...</h2>
        )

    if(Meals.length < 1)
            return (
                <h2>The searched meal was not found</h2>
            )

    return (
            <Container fluid className='card--container'>
                {
                    Meals.map( meal => {
                        const {idMeal: MealID, strMealThumb: MealImage, strMeal: MealName} = meal
                        return (
                            <Card variant="top" style={{width: "17rem"}} className='card--card'>

                                <Card.Img 
                                    src={MealImage} 
                                    className="meal--image"
                                    onClick={() => ChooseMeal(MealID)}
                                ></Card.Img>
                                <Card.Footer className='meal--footer'>
                                    <span>{MealName}</span>
                                    <span>
                                        <BsHandThumbsUp
                                             onClick={() => MakeFavorite(MealID)}
                                        />
                                    </span>
                                </Card.Footer>

                            </Card>
                        )
                     
                    })
                }
            </Container>
    )
}
