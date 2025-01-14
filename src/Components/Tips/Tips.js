import React from 'react'
import './Tips.scss'
import ok from '../../assets/ok.svg'
import { Slide } from 'react-awesome-reveal'

const Tips = () => {

    const tips = [
        {
            id: 1,
            image: ok,
            text: "Get a daily or weekly skincare-tip"
        },
        {
            id: 2,
            image: ok,
            text: " Play with an interactive model to discover your perfect skincare routine for your specific skin type"
        },
        {
            id: 3,
            image: ok,
            text: "Read about new beauty products and recomendations"
        },
        {
            id: 4,
            image: ok,
            text: "Shop beauty products from stores near you"
        }
    ]

  return (
    <section className='tips'>
        {
            tips.map((tips, index) => (
                <Slide damping={0.1} className='slide' triggerOnce={true}>
                    <aside key={tips.id}>
                        <img src={tips.image} alt="" />
                        <p>{tips.text}</p>
                    </aside>
                </Slide>
            ))
        }
    </section>
  )
}

export default Tips