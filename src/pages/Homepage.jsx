import React,{ useState } from 'react'
import HeroImage1 from '../assets/images/3.png'
import HeroImage2 from '../assets/images/2.png'
import HeroImage3 from '../assets/images/4.png'
import 'react-slideshow-image/dist/styles.css'

import Navbar from '../components/Navbar'
import Productlist from '../components/ProductList'
import HeroSlider, { Slide, Nav } from 'hero-slider';
import Shopbycategory from '../components/Shopbycategory'
import Features from '../components/Feature'

export default function Homepage() {

    return (
        <div>
          <HeroSlider
            slidingAnimation="left_to_right"
            orientation="horizontal"
            initialSlide={1}
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.33)'
            }}
            settings={{
              slidingDuration: 250,
              slidingDelay: 100,
              shouldAutoplay: true,
              shouldDisplayButtons: false,
              autoplayDuration: 5000,
              height: '90vh'
            }}>
            <Slide
              background={{
                backgroundImage: HeroImage1,
                backgroundAnimation: 'zoom'
              }}
            />
            <Slide
              background={{
                backgroundImage: HeroImage2,
                backgroundAnimation: 'zoom'
              }}
            />
            <Nav />
          </HeroSlider>
        <div className="bg-white"    
        // style={{
        //     backgroundImage: `url(${HeroImage1})`,
        //     backgroundSize: '60%',
        //     backgroundPosition: '88% 5%',
        //     backgroundRepeat: 'no-repeat',
        // }}
        >
            <Navbar />
            <div className="relative isolate px-6 pt-2 lg:px-6">
                <div className="max-w-2xl py-32 sm:py-48 lg:py-20">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-left">
                        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            Announcing our next round of funding.{' '}
                            <a href="#" className="font-semibold text-indigo-600">
                                <span className="absolute inset-0" aria-hidden="true" />
                                Read more <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                    <div className="text-left">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Data to enrich your online business
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600 text-left">
                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui commodo. Elit sunt amet
                            fugiat veniam occaecat fugiat aliqua.
                        </p>
                        <div className="mt-10 flex items-center justify-left gap-x-6">
                            <a
                                href="#"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Get started
                            </a>
                            <a href="#" className="text-sm font-semibold leading-6 text-gray-900 text-left">
                                Learn more <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </div>
            <Productlist />
            <Shopbycategory />
            <Features />
        </div>
        </div>

    )
}