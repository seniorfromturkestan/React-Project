import React from 'react'
import MenImage from '../../images/image-hero-desktop.png'
import MenImageMobile from '../../images/image-hero-mobile.png'


import {ReactComponent as Databiz} from '../../images/client-databiz.svg'
import {ReactComponent as Audiophile} from '../../images/client-audiophile.svg'
import {ReactComponent as Meet} from '../../images/client-meet.svg'
import {ReactComponent as Maker} from '../../images/client-maker.svg'
import Button from '../button'





const MainSection = () => {
  return (
    <section className='w-full flex-col md:flex-row flex mt-6 justify-between'>
         <div className="relative order-2 md:order-1 text-center md:text-left mt-12 xl:mt-48 md:mt-28">
            <h1 className="text-3xl md:text-5xl xl:text-8xl font-black mt-6  md:whitespace-pre-line">{`Make \n remote work`}</h1>
            <p className='text-medium-gray text-lg my-12 whitespace-pre-line'>{`Lorem ipsum dolor sit amet consectetur adipisicing elit. \n Sint at quibusdam facere saepe nobis? Eaque? \n Ipsum dolor sit amet `}</p>
            <Button className='transition duration-500' isFilled='true'>Learn More</Button>
            <div className="flex justify-around mt-32">
                <Databiz/>
                <Audiophile/>
                <Meet/>
                <Maker/>

            </div>
         </div>
         <div className="hidden md:flex w-2/4 ml-10 mt-10 md:order-2">
            <img src={ MenImage } alt="/" />
         </div>

         <div className="flex md:hidden w-full mt-10 justify-center mb-8 order-1">
            <img src={ MenImageMobile } alt="/" />
         </div>
    </section>
  )
}

export default MainSection