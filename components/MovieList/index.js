import { MovieTile } from '@components/MovieTile'
import { getMovies } from 'nasa-config'
import React, { useEffect, useState } from 'react'
import ContentLoader from 'react-content-loader'
import { ContentWrapper, MovieListContainer } from './styles'

const MovieLoader = ({
  width = 360,
  row = 2,
  column = 2,
  padding = 12,
  borderRadius = 4,
}) => {
  const list = []

  let height

  for (let i = 1; i <= row; i++) {
    for (let j = 0; j < column; j++) {
      const itemWidth = (width - padding * (column + 1)) / column
      const x = padding + j * (itemWidth + padding)
      const height1 = itemWidth
      const height2 = 20
      const height3 = 20
      const space =
        padding + height1 + (padding / 2 + height2) + height3 + padding * 4
      const y1 = padding + padding * 2 + space * (i - 1)
      const y2 = y1 + padding + height1
      const y3 = y2 + padding / 2 + height2

      list.push(
        <>
          <rect
            key={`${i}-top`}
            x={x}
            y={y1}
            rx={borderRadius}
            ry={borderRadius}
            width={itemWidth}
            height={height1}
          />
          <rect
            key={`${i}-middle`}
            x={x}
            y={y2}
            rx={0}
            ry={0}
            width={itemWidth}
            height={height2}
          />
          <rect
            key={`${i}-bottom`}
            x={x}
            y={y3}
            rx={0}
            ry={0}
            width={itemWidth * 0.6}
            height={height3}
          />
        </>,
      )

      if (i === row) {
        height = y3 + height3
      }
    }
  }

  const finalList = list.map((item, index) => {
    const newItem = { ...item }
    newItem.key = index
    return newItem
  })

  return (
    <ContentWrapper>
      <ContentLoader
        key={'something'}
        viewBox={`0 0 ${width} ${height}`}
        width={width}
        height={height}
      >
        {finalList}
      </ContentLoader>
    </ContentWrapper>
  )
}

export const MovieList = () => {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)
  const fetchMovies = () => {
    fetch(`${getMovies}&${page}`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results || [])
      })
  }

  useEffect(() => {
    fetchMovies()
    return () => {}
  }, [])

  return (
    <>
      {movies.length <= 0 && <MovieLoader />}

      {movies.length > 0 && (
        <MovieListContainer>
          {movies.map((movie, index) => {
            return <MovieTile key={index} {...movie} />
          })}
        </MovieListContainer>
      )}

      {page > 2 && <div>CRAZY BITCH</div>}
    </>
  )
}
