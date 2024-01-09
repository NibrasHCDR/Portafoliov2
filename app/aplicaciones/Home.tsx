"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import HomeGallery from '../components/aplicaciones/components/HomeGallery'
import Homexplendev from '../components/aplicaciones/components/HomeXplendev'
import HomeEllegant from '../components/aplicaciones/components/HomeEllegant'

type Props = {}

function Home({}: Props) {

  return (
    
    <>
    
    <Homexplendev>
      
    </Homexplendev>
    
    <HomeGallery>
    
    </HomeGallery>

    <HomeEllegant>
      
    </HomeEllegant>
      
    </>
  )
}

export default Home