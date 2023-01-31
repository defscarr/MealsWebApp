import React from 'react'
import { UseGlobalContext } from './Context'
import { Meals } from './components/Meals'
import { Favorite } from './components/Favorite'
import { Modal } from './components/Modal'
import { Search } from './components/Search'





export const App = () => {

  const {ShowModal, FavoriteMeals}  = UseGlobalContext()

  return (
    <main>

      <Search />
      { FavoriteMeals.length > 0 && <Favorite />}
      <Meals />
      { ShowModal && <Modal />}
      

    </main>
  )
}
