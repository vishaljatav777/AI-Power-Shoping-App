import React, { useEffect } from 'react'
import Nav from '../components/Nav'
import Background from '../components/Background';
import Hero from '../components/Hero';

function Home() {
  let heroData = [
    { text1: "Welcome to OneCart", text2: "Your One-Stop Shop for Everything!" },
    { text1: "Discover Amazing Products Today!", text2: "Shop Smart, Live Better!" },
    { text1: "Unbeatable Prices, Unmatched Quality!", text2: "Find It All at OneCart!" },
    { text1: "Shop the Future, Today!", text2: "Experience the OneCart Difference!" },
  ]

  let [heroCount, setHeroCount] = React.useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setHeroCount((prev) => (prev + 1) % heroData.length);
    }, 5000);
    return () => clearInterval(interval);
  })
  return (
    <div className='top-[70px] overflow-x-hidden relative'>
    <div className='w-[100vw] lg:h-[100vh] md:h-[50vh] sm:h-[30vh] bg-gradient-to-l from-[#141414] to-[#0c2025]'>
      <Background heroCount={heroCount} />
      <Hero
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        heroData={heroData[heroCount]}
      />
    </div>
    </div>
  )
}

export default Home
