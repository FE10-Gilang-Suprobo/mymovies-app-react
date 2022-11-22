import React, { Component } from 'react'
import Card from './components/Card';
import Navbar from './components/Navbar';

export default class App extends Component {


  render() {

    const films = [
      {
        image:
          "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810",
        title: "Avengers: End Game",
        description: "Lorem Ipsum, dolor sit amet blablabla",
      },
      {
        image:
          "https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2022/09/15/413375890.jpg",
        title: "Sri Asih",
        description: "Lorem Ipsum, dolor sit amet blablabla",
      },
      {
        image:
          "https://asset.tix.id/wp-content/uploads/2022/11/c6b9890add5c02fcf9b0bfbee9813858.jpg",
        title: "Black Panther: Wakanda Forever",
        description: "Lorem Ipsum, dolor sit amet blablabla",
      },
      {
        image:
          "https://upload.wikimedia.org/wikipedia/id/e/ea/Poster_teatrikal_Mencuri_Raden_Saleh.jpg",
        title: "Mencuri Raden Saleh",
        description: "Lorem Ipsum, dolor sit amet blablabla",
      },
    ]

    return (
      <div>
        <Navbar/>
      <div className="min-h-screen container mx-auto">
        <h1 className="text-center mt-10 text-5xl">List Favorite </h1>
        <div className='grid grid-cols-4 w-auto mt-10 gap-4 space-y-4'>
        {
          films.map((item) => {
            return (
                  <Card
                    image={item.image}
                    title={item.title}
                    description={item.description}
                  />        
            )
          })
        }
        </div>
      </div>
      <div className="min-h-screen container mx-auto mt-10">
        <h1 className="text-center mt-10 text-5xl">List Favorite </h1>
        <div className='grid grid-cols-4 w-auto mt-10 gap-4 space-y-4'>
        {
          films.map((item) => {
            return (
                  <Card
                    image={item.image}
                    title={item.title}
                    description={item.description}
                  />        
            )
          })
        }
        </div>
      </div>
      </div>
    )
  }
}
