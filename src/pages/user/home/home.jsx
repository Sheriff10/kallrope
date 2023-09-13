import React from 'react'
import BookRide from './components/bookRide'
import Intro from './components/intro'
import Order from './components/order'
import Services from './components/services'

export default function Home() {
  return (
    <div className="home">
        <Intro />
        <Services />
        <Order />
        <BookRide />
    </div>
  )
}
