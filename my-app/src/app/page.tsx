'use client';

import Image from 'next/image';
import React, { FC } from 'react';


// import React from 'react'
import Hero from './components/Hero'
import AbountUs from './components/AbountUs'
import FoodCategory from './components/FoodCategory'
import Items from './components/Items'
import MeetShef from './components/MeetShef'
import MenuItem from './components/MenuItem'
import RestaurantActive from './components/RestaurantActive'
import Blog from './components/Blog'
import Testimonials from './components/Testimonials';

import ExtraTaste from './components/ExtraTaste'





function page() {
  return (
<>    
    
    

    <Hero />
    <AbountUs />
    <FoodCategory />
    <ExtraTaste />
    <Items />

    <MenuItem />
    <MeetShef />
    
    <Testimonials />
    <RestaurantActive />
    <Blog />
    
  </>
  )
}

export default page