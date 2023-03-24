import { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { Header, Map } from '../components'
import { fetchImage } from '../components/functions'

const HeritageSite = () => {
  const location = useLocation()

  const { siteData, imgSrc, title } = location.state
  const {
    country_en: country,
    continent_en: continent,
    category,
    short_description_en: desc,
    justification_en,
    latitude: lat,
    longitude: lng,
  } = siteData
  const [searchedImg, setSearchedImg] = useState(null)

  const { name } = useParams()
  useEffect(() => {
    imgSrc === undefined || imgSrc === null
      ? setSearchedImg(fetchImage(title))
      : ''
    window.document.title = 'ETWHS / ' + name
  }, [])

  return (
    <div className="container mx-auto mb-28">
      <Header />
      <img
        className="w-full mx-auto my-8 max-h-[650px] object-cover"
        src={imgSrc || searchedImg}
        alt=""
      />
      <div className="flex flex-col md:flex-row px-5">
        <div className="w-full md:w-8/12 mr-8">
          <h1 className="text-3xl font-bold mb-7 leading-relaxed">{title}</h1>
          <h3 className="text-lg font-semibold">Country:{country}</h3>
          <h3 className="text-lg font-semibold">Region:{continent}</h3>
          <h3 className="text-lg font-semibold mb-4">Category:{category}</h3>
        </div>
        <Map lat={lat} lng={lng} />
      </div>
      <div className="mt-10 px-5">
        <h4 className="text-xl font-semibold mb-3">Description:</h4>
        <p className="leading-relaxed tracking-wider">{desc}</p>
        <p className="leading-relaxed tracking-wider">{justification_en}</p>
      </div>

      <Link
        className="text-md font-semibold block mx-auto py-3 px-5 bg-secondaryColor rounded-lg w-44 text-center hover:bg-accentColor hover:text-primaryColor duration-300 mt-8"
        to="/"
      >
        Back to Home
      </Link>
    </div>
  )
}

export default HeritageSite
