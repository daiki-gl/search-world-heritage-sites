import axios from 'axios'
import { useEffect, useState } from 'react'
import { UNSPLASH_ACCESS_KEY } from '../config'
import { Header, SearchForm, SitesList, FilteredList } from '../components'

const WORLD_HERITAGE_SITES_URL =
  'https://examples.opendatasoft.com/api/records/1.0/search/?dataset=world-heritage-unesco-list&q=&rows=1052&facet=category&facet=country_en&facet=continent_en'

const Home = () => {
  const [randomSite, setRandomSite] = useState([])
  const [allHeritage, setAllHeritage] = useState([])
  const [filteredList, setFilteredList] = useState(null)
  const [images, setImages] = useState([])

  useEffect(() => {
    fetchData(WORLD_HERITAGE_SITES_URL)
    window.document.title = 'Explore The World Heritage Site'
  }, [])

  let randomArrData = []
  function addData(data) {
    randomArrData.push(data)
    setRandomSite([...randomArrData])
  }

  async function fetchData(url) {
    await axios
      .get(url)
      .then(async (res) => {
        const { data } = await res
        setAllHeritage(data)
        // console.log(data)
        for (let i = 0; i < 3; i++) {
          const randomRecord =
            data.records[Math.floor(Math.random() * data.records.length)].fields
          addData(randomRecord)
        }
      })
      .catch((e) => console.log('Error:' + e))
  }

  //Fetch Random Images
  useEffect(() => {
    const searchWords = randomSite.map((site) => site.name_en)
    fetchImages(searchWords)
  }, [randomSite])

  async function fetchImages(searchWords) {
    const promises = searchWords.map((searchWord) => fetchImage(searchWord))
    const imageUrls = await Promise.all(promises)
    setImages(imageUrls)
  }

  async function fetchImage(searchWord) {
    const encodedSearchWord = encodeURIComponent(searchWord)
    const UNSPLASH_URL = `https://api.unsplash.com/search/photos?query=${encodedSearchWord}&client_id=${UNSPLASH_ACCESS_KEY}`
    const response = await axios.get(UNSPLASH_URL)
    const { data } = response
    return data.results[0].urls.regular
  }

  return (
    <div className="mb-28">
      <Header />

      <div className="min-h-[500px] bg-[url('../img/hero.jpg')] bg-cover">
        <SearchForm
          allHeritage={allHeritage.records}
          setFilteredList={setFilteredList}
          searchFilters={allHeritage.facet_groups}
        />
      </div>

      <div className="container grid grid-cols-1 px-5 mx-auto md:mt-20 md:grid-cols-3 md:gap-8">
        <SitesList siteData={randomSite} imgSrces={images} />
      </div>

      {filteredList && <FilteredList filteredList={filteredList} />}
    </div>
  )
}

export default Home
