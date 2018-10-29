import React from 'react'
import { IMDb } from 'simple-icons'
import { FaCloudDownloadAlt } from 'react-icons/fa'

import { MovieTableSc, ImdbLink } from './styles'

const MovieTable = props => {
  console.log(props)

  const releaseDate = ''
  const imdb = ''
  const budget = ''
  const revenue = ''
  const status = ''
  const postUrl = ''

  return (
    <MovieTableSc>
      <thead>
        <tr>
          <th>Released</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{releaseDate}</td>
          <td>
            <ImdbLink href={imdb} dangerouslySetInnerHTML={{__html: IMDb.svg}} />
          </td>
          <td>{budget}</td>
          <td>
            <a href={postUrl}>
              <FaCloudDownloadAlt />
            </a>
          </td>
          <td>{revenue}</td>
          <td>{status}</td>
        </tr>
      </tbody>

    </MovieTableSc>
  )
}

export default MovieTable
