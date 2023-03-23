import { Link } from 'react-router-dom'
import { BiWorld } from 'react-icons/bi'
import { FaMapMarkerAlt } from 'react-icons/fa'

const FilteredList = ({ filteredList }) => {
  let validateItems = []
  function removeHTMLTag(arr) {
    const regex = /(<([^>]+)>)/gi
    arr.map((item) => {
      if (item.fields.name_en.match(regex)) {
        validateItems.push(item.fields.name_en.replace(regex, ''))
        return
      }
      validateItems.push(item.fields.name_en)
      return
    })
  }
  removeHTMLTag(filteredList)

  return (
    <div className="container mx-auto px-5 mt-16">
      <h2 className="text-3xl font-bold">
        Result / {filteredList.length} Data Found
      </h2>
      <ul className="mt-8">
        {filteredList.map((filteredItem, index) => (
          <li
            style={{ textAlign: 'left' }}
            key={filteredItem.fields.name_en}
            className="mb-5 hover:-translate-y-1.5 duration-300"
          >
            <Link
              to={`heritageSite/${validateItems[index]}`}
              state={{ siteData: filteredItem.fields }}
              className="hover:opacity-80 duration-200"
            >
              <div className="bg-accentColor p-2 font-semibold">
                <BiWorld className="mr-2 inline-block" />
                {validateItems[index]}
              </div>
              <div className="bg-secondaryColor p-2">
                <FaMapMarkerAlt className="mr-2 inline-block" />
                {filteredItem.fields.continent_en} /
                {filteredItem.fields.country_en}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FilteredList
