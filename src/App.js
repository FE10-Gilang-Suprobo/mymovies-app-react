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
        description: "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance",
      },
      {
        image:
          "https://asset.tix.id/wp-content/uploads/2022/11/c6b9890add5c02fcf9b0bfbee9813858.jpg",
        title: "Black Panther: Wakanda Forever",
        description: "Queen Ramonda, Shuri, M'Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T'Challa's death. As the Wakandans strive to embrace their next chapter, the heroes must band together with Nakia and Everett Ross to forge a new path for their beloved kingdom.",
      },
      {
        image:
          "https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2022/09/15/413375890.jpg",
        title: "Sri Asih",
        description: "Sri Asih merupakan film superhero terbaru dari Jagat Sinema Bumilangit yang berkisah tentang superhero wanita pertama di Indonesia. Film ini juga menjadi rilisan kedua dari semesta Bumilangit setelah Gundala (2019). Upi Avianto didapuk sebagai sutradara film ini, dengan naskah yang ditulis bersama Joko Anwar",
      },
      {
        image:
          "https://upload.wikimedia.org/wikipedia/id/e/ea/Poster_teatrikal_Mencuri_Raden_Saleh.jpg",
        title: "Mencuri Raden Saleh",
        description: "Stealing Raden Saleh is a 2022 heist action film directed by Angga Dwimas Sasongko and written by Sasongko and Husein M. Atmodjo. The film features an ensemble cast, consists of: Iqbaal Ramadhan, Angga Yunanda, Rachel Amanda, Umay Shahab, Aghniny Haque and Ari Irham",
      },
    ]

    const nowPlaying = [
      {
        image:
          "https://asset.tix.id/wp-content/uploads/2022/11/c6b9890add5c02fcf9b0bfbee9813858.jpg",
        title: "Black Panther: Wakanda Forever",
        description: "Queen Ramonda, Shuri, M'Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T'Challa's death. As the Wakandans strive to embrace their next chapter, the heroes must band together with Nakia and Everett Ross to forge a new path for their beloved kingdom.",
      },
      {
        image:
          "https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2022/09/15/413375890.jpg",
        title: "Sri Asih",
        description: "Sri Asih merupakan film superhero terbaru dari Jagat Sinema Bumilangit yang berkisah tentang superhero wanita pertama di Indonesia. Film ini juga menjadi rilisan kedua dari semesta Bumilangit setelah Gundala (2019). Upi Avianto didapuk sebagai sutradara film ini, dengan naskah yang ditulis bersama Joko Anwar",
      },
      {
        image:
          "https://upload.wikimedia.org/wikipedia/id/e/ea/Poster_teatrikal_Mencuri_Raden_Saleh.jpg",
        title: "Mencuri Raden Saleh",
        description: "Stealing Raden Saleh is a 2022 heist action film directed by Angga Dwimas Sasongko and written by Sasongko and Husein M. Atmodjo. The film features an ensemble cast, consists of: Iqbaal Ramadhan, Angga Yunanda, Rachel Amanda, Umay Shahab, Aghniny Haque and Ari Irham",
      },
    ]

    return (
      <div>
        <Navbar/>
      <div className="container mx-auto">
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
      <div className="container mx-auto mt-10">
        <h1 className="text-center mt-10 text-5xl">Now Playing</h1>
        <div className='grid grid-cols-3 w-auto mt-10 gap-4 space-y-4'>
        {
          nowPlaying.map((item) => {
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
