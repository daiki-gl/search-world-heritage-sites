import axios from 'axios'
import { useEffect, useState } from 'react'
import { Header, SearchForm, SitesList, FilteredList } from '../components'
import { fetchImages } from '../components/functions'

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

  async function fetchData(url) {
    await axios
      .get(url)
      .then(async (res) => {
        const { data } = await res
        setAllHeritage(data)

        for (let i = 0; i < 3; i++) {
          const randomRecord =
            data.records[Math.floor(Math.random() * data.records.length)]
          addData(randomRecord)
        }
      })
      .catch((e) => console.log('Error:' + e))
  }

  let randomArrData = []
  function addData(data) {
    randomArrData.push(data)
    setRandomSite([...randomArrData])
  }

  useEffect(() => {
    const searchWords = randomSite.map((site) => site.fields.name_en)
    setImages(fetchImages(searchWords))
  }, [randomSite])

  return (
    <div className="mb-28">
      <Header />
      <SearchForm
        allHeritage={allHeritage.records}
        setFilteredList={setFilteredList}
        searchFilters={allHeritage.facet_groups}
      />
      <SitesList siteData={randomSite} imgSrces={images} />
      {filteredList && <FilteredList filteredList={filteredList} />}
    </div>
  )
}

export default Home
