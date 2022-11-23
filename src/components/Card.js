import React, { Component } from 'react'

export default class Card extends Component {
  render() {

    const { title, image, description } = this.props

    return (
        <div className="card bg-neutral-focus shadow-xl py-px-5">
        <figure>
            <img className='w-full max-h-[385px]' src={image} alt="Shoes"/>
            </figure>
        <div className="card-body text-white">
          <h2 className="card-title">{title}</h2>
          <p>Description : {description}</p>
          <div className="card-actions justify-end">
            <button className="btn bg-neutral w-full">Watch Now</button>
          </div>
        </div>
      </div>
    )
  }
}
