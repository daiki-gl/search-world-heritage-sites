import { Link } from 'react-router-dom'
import { SiteListContents } from '..'
import { removeHTMLTag } from '../functions'

const SitesList = ({ siteData, imgSrces }) => {
  return (
    <div className="container grid grid-cols-1 px-5 mx-auto md:mt-20 md:grid-cols-3 md:gap-8">
      {siteData.map((data, index) => (
        <div
          key={data.fields.name_en}
          className="mx-auto mt-16 rounded-xl bg-secondaryColor hover:shadow-md hover:shadow-slate-600 duration-200 md:mt-0"
        >
          <Link
            to={{ pathname: `/heritageSite/${removeHTMLTag(siteData)[index]}` }}
            state={{
              siteData: siteData[index].fields,
              imgSrc: imgSrces[index],
              title: removeHTMLTag(siteData)[index],
            }}
          >
            <img
              className="max-h-72 min-h-[250px] object-cover w-full object-center md:max-h-52 rounded-t-xl"
              src={imgSrces ? imgSrces[index] : '../img/no-image.png'}
              alt={data.fields.name_en}
            />

            <SiteListContents
              data={data.fields}
              name={removeHTMLTag(siteData)[index]}
            />
          </Link>
        </div>
      ))}
    </div>
  )
}

export default SitesList
