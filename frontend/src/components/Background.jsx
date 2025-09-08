import React from 'react'
import bg1 from '../assets/img1.jpg'
import bg2 from '../assets/img2.jpg'
import bg3 from '../assets/img3.jpg'
import bg4 from '../assets/img4.jpg'

function Background({ heroCount }) {
  if (heroCount === 0) {
    return <img src={bg1} alt="" className='w-[50%] h-[100%]  overflow-auto float-right object-cover' />
  } else if (heroCount === 1) {
    return <img src={bg2} alt="" className='w-[50%] h-[100%]  overflow-auto float-right object-cover' />
  } else if (heroCount === 2) {
    return <img src={bg3} alt="" className='w-[50%] h-[100%]  overflow-auto float-right object-cover' />
  } else if (heroCount === 3) {
    return <img src={bg4} alt="" className='w-[50%] h-[100%]  overflow-auto float-right object-cover' />
  }

  return <img src={bg1} alt="" className='w-[50%] h-[100%]  overflow-auto float-right object-cover' />
}

export default Background
