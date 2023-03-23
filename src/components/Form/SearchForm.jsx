import { useEffect, useReducer } from 'react'
import { HeroTitle, Form } from '..'
import {
  initialSearchResultState,
  searchReducer,
  KEYWORD,
  SET_IS_DISABLED,
  SUBMIT_FORM,
} from './searchReducer'

const SearchForm = ({ searchFilters, allHeritage, setFilteredList }) => {
  const [searchResultState, dispatch] = useReducer(
    searchReducer,
    initialSearchResultState
  )

  const checkState = (state) => {
    const { category, country, continent, keyword } = state
    category == '' && country == '' && continent == '' && keyword == ''
      ? dispatch({ type: SET_IS_DISABLED, value: true })
      : dispatch({ type: SET_IS_DISABLED, value: false })
  }

  const handleChange = (val) => {
    dispatch({ type: KEYWORD, value: val })
  }

  const handleChangeSelect = (typeName, val) => {
    dispatch({ ...searchResultState, type: typeName, value: val })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: SUBMIT_FORM, payload: { allHeritage, setFilteredList } })
  }

  useEffect(() => {
    checkState(searchResultState)
  }, [
    searchResultState.country,
    searchResultState.continent,
    searchResultState.category,
    searchResultState.keyword,
  ])

  return (
    <div className="container flex flex-col justify-between mx-auto gap-0 px-5 py-10 md:px-16 md:flex-row md:gap-4  lg:p-24 ">
      <HeroTitle />

      <div className="bg-white text-gray-800 py-10 px-8 rounded-xl max-w-lg md:w-7/12">
        {searchFilters ? (
          <Form
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            handleChangeSelect={handleChangeSelect}
            searchFilters={searchFilters}
            isDisabled={searchResultState.isDisabled}
          />
        ) : (
          'Loading...'
        )}
      </div>
    </div>
  )
}

export default SearchForm
