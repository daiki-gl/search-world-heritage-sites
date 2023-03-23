export function makeOptions(searchFilters) {
  let options = searchFilters.map((filterItem) => filterItem.name)
  options = options.sort().map((filterItem) => (
    <option key={filterItem} value={filterItem}>
      {filterItem}
    </option>
  ))
  return options
}
