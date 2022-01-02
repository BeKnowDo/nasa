import React, { PureComponent } from 'react'
import { FaCloudDownloadAlt, FaQuestion } from 'react-icons/fa'
import { IMDb } from 'simple-icons'

import { MovieTableSc, ImdbLink } from './styles'

class MovieTable extends PureComponent {
  generateTableHeaders() {
    const tableHeaders = this.props.headers || undefined

    if (tableHeaders) {
      return tableHeaders.map((header, index) => {
        return <th key={index}>{header.name}</th>
      })
    }
  }

  generateTableBody() {
    const tableBody = this.props.details
    if (tableBody) {
      return tableBody.map((body, index) => {
        return <td key={index}>here</td>
      })
    }
  }

  render() {
    const movieData = this.props.body
    const releaseDate = movieData.releaseDate
    const imdb = movieData.imdb
    const budget = movieData.budget
    const revenue = movieData.revenue
    const status = movieData.status
    const postUrl = movieData.postUrl

    return (
      <MovieTableSc>
        <thead>
          <tr>{this.generateTableHeaders()}</tr>
        </thead>

        <tbody>
          <tr>
            <td>{releaseDate}</td>
            <td>
              {imdb ? (
                <ImdbLink
                  target="_blank"
                  href={`//www.imdb.com/title/${imdb}`}
                  dangerouslySetInnerHTML={{ __html: IMDb.svg }}
                />
              ) : (
                <FaQuestion />
              )}
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
}

export default MovieTable
