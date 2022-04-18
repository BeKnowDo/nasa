import { PictureOfTheDay } from '@components/PictureOfTheDay'
import { pictureOfTheDay } from 'nasa-config'
import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Home() {
  const [hdurl, setHdurl] = useState(null)
  const getPictureOfTheDay = () => {
    fetch(pictureOfTheDay)
      .then((response) => response.json())
      .then((data) => {
        if (data.hdurl) setHdurl(data.hdurl)
      })
  }

  useEffect(() => {
    const test = getPictureOfTheDay()
    console.log(test)

    return () => {}
  }, [])

  return (
    <>
      <Head>
        <title>IMDB & NASA Challenge</title>
        <meta
          name='description'
          content='this is a front-end challenge during our interview process'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <PictureOfTheDay hdurl={hdurl} />
    </>
  )
}
