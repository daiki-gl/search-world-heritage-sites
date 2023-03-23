import { Link } from 'react-router-dom'
import { SiteListContents } from '../index'

const SitesList = ({ siteData, imgSrces }) => {
  return (
    <>
      {siteData.map((data, index) => (
        <div
          key={data.name_en}
          className="mx-auto mt-16 rounded-xl bg-secondaryColor hover:shadow-md hover:shadow-slate-600 duration-200 md:mt-0"
        >
          <Link
            to={{ pathname: `/heritageSite/${data.name_en}` }}
            state={{ siteData: siteData[index], imgSrc: imgSrces[index] }}
          >
            {imgSrces[index] && (
              <img
                className="max-h-72 object-cover w-full object-center md:max-h-52 rounded-t-xl"
                src={imgSrces[index]}
                alt={data.name_en}
              />
            )}

            <SiteListContents data={data} />
          </Link>
        </div>
      ))}
    </>
  )
}

export default SitesList
