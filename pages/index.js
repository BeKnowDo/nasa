import { MovieList } from '@components/MovieList'
import { PictureOfTheDay } from '@components/PictureOfTheDay'
import Head from 'next/head'

export default function Home() {
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

      <PictureOfTheDay />

      <MovieList />
    </>
  )
}
