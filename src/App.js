import React, { Component } from 'react'
import Card from './components/Card';
import Navbar from './components/Navbar';
import axios from 'axios'
import Carousel from './components/Carousel';

export default class App extends Component {

  state = {
    result: []
  }

  // async getAllProducts() {
  //   await api
  //     .all_products()
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  getData = () => {
    axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=1f544c04cf1ef5802217d856467c1a64`)
      .then((response) => {
        this.setState({ result: response.data.results })
      })
  }

  componentDidMount() {
    this.getData()
  }


  render() {
    const datas = this.state.result
    console.log("tet", datas)
    // const films = [
    //   {
    //     image:
    //       "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810",
    //     title: "Avengers: End Game",
    //     description: "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance",
    //   },
    //   {
    //     image:
    //       "https://asset.tix.id/wp-content/uploads/2022/11/c6b9890add5c02fcf9b0bfbee9813858.jpg",
    //     title: "Black Panther: Wakanda Forever",
    //     description: "Queen Ramonda, Shuri, M'Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T'Challa's death. As the Wakandans strive to embrace their next chapter, the heroes must band together with Nakia and Everett Ross to forge a new path for their beloved kingdom.",
    //   },
    //   {
    //     image:
    //       "https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2022/09/15/413375890.jpg",
    //     title: "Sri Asih",
    //     description: "Sri Asih merupakan film superhero terbaru dari Jagat Sinema Bumilangit yang berkisah tentang superhero wanita pertama di Indonesia. Film ini juga menjadi rilisan kedua dari semesta Bumilangit setelah Gundala (2019). Upi Avianto didapuk sebagai sutradara film ini, dengan naskah yang ditulis bersama Joko Anwar",
    //   },
    //   {
    //     image:
    //       "https://upload.wikimedia.org/wikipedia/id/e/ea/Poster_teatrikal_Mencuri_Raden_Saleh.jpg",
    //     title: "Mencuri Raden Saleh",
    //     description: "Stealing Raden Saleh is a 2022 heist action film directed by Angga Dwimas Sasongko and written by Sasongko and Husein M. Atmodjo. The film features an ensemble cast, consists of: Iqbaal Ramadhan, Angga Yunanda, Rachel Amanda, Umay Shahab, Aghniny Haque and Ari Irham",
    //   },
    // ]

    // const nowPlaying = [
    //   {
    //     image:
    //       "https://asset.tix.id/wp-content/uploads/2022/11/c6b9890add5c02fcf9b0bfbee9813858.jpg",
    //     title: "Black Panther: Wakanda Forever",
    //     description: "Queen Ramonda, Shuri, M'Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T'Challa's death. As the Wakandans strive to embrace their next chapter, the heroes must band together with Nakia and Everett Ross to forge a new path for their beloved kingdom.",
    //   },
    //   {
    //     image:
    //       "https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2022/09/15/413375890.jpg",
    //     title: "Sri Asih",
    //     description: "Sri Asih merupakan film superhero terbaru dari Jagat Sinema Bumilangit yang berkisah tentang superhero wanita pertama di Indonesia. Film ini juga menjadi rilisan kedua dari semesta Bumilangit setelah Gundala (2019). Upi Avianto didapuk sebagai sutradara film ini, dengan naskah yang ditulis bersama Joko Anwar",
    //   },
    //   {
    //     image:
    //       "https://upload.wikimedia.org/wikipedia/id/e/ea/Poster_teatrikal_Mencuri_Raden_Saleh.jpg",
    //     title: "Mencuri Raden Saleh",
    //     description: "Stealing Raden Saleh is a 2022 heist action film directed by Angga Dwimas Sasongko and written by Sasongko and Husein M. Atmodjo. The film features an ensemble cast, consists of: Iqbaal Ramadhan, Angga Yunanda, Rachel Amanda, Umay Shahab, Aghniny Haque and Ari Irham",
    //   },
    // ]

    return (
      <div className='bg-black'>
        <Navbar />
        <div>
        {/* <Carousel/> */}
        </div>
        <div className="container mx-auto">
          <h1 className="text-center mt-10 text-5xl text-white">NOW PLAYING</h1>
          <div className='grid w-auto mt-10 gap-4 space-y-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2'>
            {
              datas.map((item) => {
                return (
                  <Card
                    image={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                    title={item.title}
                    description={item.overview.substring(0, 200) + ` . . . .`}
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
