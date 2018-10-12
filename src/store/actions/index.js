import axios from 'axios'
import { endpoints } from '../../config/endpoints'

import { FETCHING_PIC, FETCHING_PIC_ERROR, FETCHING_PIC_SUCCESS } from '../constants'

// Notify we're fetching the picture
export const fetchingPictureRequst = () => ({
  type: FETCHING_PIC
})

// Notify of any errors
export const fetchingPictureFailure = error => ({
  type: FETCHING_PIC_ERROR,
  payload: error
})

// Notify of fetching picture success
export const fetchingPictureSuccess = data => ({
  type: FETCHING_PIC_SUCCESS,
  payload: data
})

// Fetch the picture
export const fetchPicture = () => {
  return async dispatch => {
    // notify we've requested a picture
    dispatch(fetchingPictureRequst())

    try {
      axios.get(endpoints.NASA.POTD)
        .then(response => {
          const copyright = response.data.copyright
          const date = response.data.date
          const hdurl = response.data.hdurl
          const url = response.data.url
          const title = response.data.title
          const description = response.data.explanation

          const data = {
            copyright,
            date,
            hdurl,
            url,
            title,
            description
          }
          dispatch(fetchingPictureSuccess(data))
        })
        .catch(error => {
          dispatch(fetchingPictureFailure(error))
        })
    } catch (error) {
      dispatch(fetchingPictureFailure(error))
    }
  }
}
