import axios from 'axios'

import { NASA } from '../../config/endpoints'
import { FETCH_PIC, FETCH_PIC_ERROR, FETCH_PIC_SUCCESS } from '../constants'

// Notify we're fetching the picture
export const fetchPictureRequst = () => ({
  type: FETCH_PIC,
})

// Notify of any errors
export const fetchPictureFailure = (error) => ({
  type: FETCH_PIC_ERROR,
  payload: error,
})

// Notify of fetch picture success
export const fetchPictureSuccess = (data) => ({
  type: FETCH_PIC_SUCCESS,
  payload: data,
})

// Fetch the picture
export const fetchPicture = () => {
  return async (dispatch) => {
    try {
      await axios
        .get(NASA.POTD)
        .then((response) => {
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
            description,
          }
          dispatch(fetchPictureSuccess(data))
        })
        .catch((error) => {
          dispatch(fetchPictureFailure(error))
        })
    } catch (error) {
      dispatch(fetchPictureFailure(error))
    }
  }
}
