const SiteListContents = ({ data, name }) => {
  const {
    country_en: country,
    continent_en: continent,
    short_description_en: description,
  } = data
  return (
    <div className="px-5 py-3">
      <h2
        className="text-xl font-bold mb-3 overflow-hidden"
        style={{
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: '1',
        }}
      >
        {name}
      </h2>
      <h4 className="text-lg font-semibold text-gray-300 mb-3">
        {continent} / {country}
      </h4>
      <p
        className="desc overflow-hidden"
        style={{
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: '4',
        }}
      >
        {description}
      </p>
    </div>
  )
}

export default SiteListContents
