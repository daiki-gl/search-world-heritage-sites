export const COUNTRY = 'country'
export const CONTINENT = 'continent'
export const CATEGORY = 'category'
export const KEYWORD = 'keyword'
export const SUBMIT_FORM = 'submit'
export const SET_IS_DISABLED = 'set_is_disabled'

export const initialSearchResultState = {
  country: '',
  continent: '',
  category: '',
  keyword: '',
  isDisabled: true,
}

// Reducer function
export function searchReducer(state, action) {
  switch (action.type) {
    case COUNTRY:
      return {
        ...state,
        country: action.value,
      }

    case CONTINENT:
      return {
        ...state,
        continent: action.value,
      }

    case CATEGORY:
      return {
        ...state,
        category: action.value,
      }

    case KEYWORD:
      return {
        ...state,
        keyword: action.value,
      }
    case SET_IS_DISABLED:
      return {
        ...state,
        isDisabled: action.value,
      }
    case SUBMIT_FORM:
      return fetchResult(state, action.payload)
    default:
      return state
  }
}

// OK Fetch searched result
function fetchResult(value, payload) {
  const { allHeritage, setFilteredList } = payload
  const { country = '', continent = '', category = '', keyword = '' } = value
  let filteredItems = []

  filteredItems = allHeritage
    .filter((heritage) => {
      return country != '' ? heritage.fields.country_en == country : heritage
    })
    .filter((heritage) => {
      return continent != ''
        ? heritage.fields.continent_en == continent
        : heritage
    })
    .filter((heritage) => {
      return category != '' ? heritage.fields.category == category : heritage
    })
    .filter((heritage) => {
      return keyword != ''
        ? heritage.fields.name_en.toLowerCase().includes(keyword.toLowerCase())
        : heritage
    })
  setFilteredList(filteredItems)
  return value
}
