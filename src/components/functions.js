import axios from 'axios'
import { UNSPLASH_ACCESS_KEY } from '../config'

export function removeHTMLTag(arr) {
  let validateItems = []
  const regex = /(<([^>]+)>)/gi
  arr.map((item) => {
    if (item.fields.name_en.match(regex)) {
      validateItems.push(item.fields.name_en.replace(regex, ''))
      return
    }
    validateItems.push(item.fields.name_en)
  })
  return validateItems
}

export async function fetchImages(searchWords, setImage) {
  const promises = searchWords.map((searchWord) => fetchImage(searchWord))
  const imageUrls = await Promise.all(promises)
  setImage(imageUrls)
}

export async function fetchImage(searchWord, setImage) {
  const encodedSearchWord = encodeURIComponent(searchWord)
  const UNSPLASH_URL = `https://api.unsplash.com/search/photos?query=${encodedSearchWord}&client_id=${UNSPLASH_ACCESS_KEY}`
  try {
    const response = await axios.get(UNSPLASH_URL)
    const { data } = response
    setImage && setImage(data.results[0].urls.regular)
    return data.results[0].urls.regular
  } catch (error) {
    console.error(error)
  }
}
