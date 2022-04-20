import { MDB, movieKey } from 'nasa-config'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Post = () => {
  const router = useRouter()
  const { id } = router.query || null
  const URL = `${MDB.baseUrl}${MDB.detail}${id}?api_key=${movieKey}`

  const [details, setDetails] = useState(null)

  const fetchDetails = () => {
    if (id === null || id === undefined) {
      return false
    }
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setDetails(data)
        console.log({ ...data })
      })
  }

  useEffect(() => {
    fetchDetails()
    return () => {}
  }, [id])

  return (
    <>
      {!details && <h2>Loading...</h2>}

      {details && (
        <>
          <img
            src={`${MDB.imageUrl}${details.poster_path}`}
            layout='responsive'
          />

          <h2>
            <strong>Title: </strong> {details.title}
          </h2>

          <h2>
            <strong>Tagline: </strong> {details.tagline}
          </h2>

          <h2>
            <strong>Overview: </strong> {details.overview}
          </h2>

          <h2>
            <strong>Vote Average: </strong> {details.vote_average}
          </h2>

          <h2>
            <strong>Total Votes: </strong> {details.vote_count}
          </h2>

          <h2>
            <strong>Status: </strong> {details.status}
          </h2>

          <h2>
            <strong>IMDB Link: </strong>
            <a
              href={`https://www.imdb.com/title/${details.imdb_id}`}
              target='_blank'
            >
              {details.imdb_id}
            </a>
          </h2>

          <h2>
            <strong>Budget: </strong>
            {details.budget <= 0
              ? 'Unknown budget costs'
              : `$${details.budget}`}
          </h2>

          {details.production_countries && (
            <>
              <h2>
                <strong>Production Countries: </strong>
              </h2>
              <ul>
                {details.production_countries.map((country, index) => {
                  return <li key={index}>{country.name}</li>
                })}
              </ul>
            </>
          )}

          <h2>
            <strong>Genres: </strong>
          </h2>
          {details.genres && (
            <>
              <ul>
                {details.genres.map((language, index) => {
                  return <li key={index}>{language.name}</li>
                })}
              </ul>
            </>
          )}

          <h2>
            <strong>Languages: </strong>
          </h2>
          {details.spoken_languages && (
            <>
              <ul>
                {details.spoken_languages.map((language, index) => {
                  return <li key={index}>{language.name}</li>
                })}
              </ul>
            </>
          )}
        </>
      )}
    </>
  )
}

export default Post
