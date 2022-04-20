import { MDB } from 'nasa-config'
import Link from 'next/link'
import React from 'react'
import {
  MovieDescriptionTitle,
  MovieImageBackground,
  MovieOverview,
  MoviePopularity,
  MovieReleaseDate,
  MovieTileContainer,
  MovieTitle,
} from './styles'

export const MovieTile = ({
  backdrop_path = null,
  original_title = null,
  overview = null,
  popularity = null,
  poster_path = null,
  release_date = null,
  title = null,
  id,
}) => {
  return (
    <MovieTileContainer>
      <Link href={`/movies/${id}`} passHref>
        <a>
          {poster_path !== null && poster_path !== '' && (
            <MovieImageBackground
              background={`${MDB.imageUrl}/${poster_path}`}
            />
          )}

          {(poster_path === null || poster_path === '') && (
            <MovieImageBackground background='/image/gallery.png' />
          )}

          <MovieTitle>{original_title}</MovieTitle>
          <MovieDescriptionTitle>Description:</MovieDescriptionTitle>
          <MovieOverview>{overview}</MovieOverview>
          <MoviePopularity>
            Popularity: <em>{popularity}</em>
          </MoviePopularity>
          <MovieReleaseDate>
            Release Date: <em>{release_date}</em>
          </MovieReleaseDate>
        </a>
      </Link>
    </MovieTileContainer>
  )
}
