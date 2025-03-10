import React from 'react'
import Image from 'next/image'
import banner from '../../../../public/assets/banner-imge.svg'

const Banner = () => {
  return (
    <div className=''>
        <Image src={banner} />
    </div>
  )
}

export default Banner
