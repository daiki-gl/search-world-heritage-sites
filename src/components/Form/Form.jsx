import React from 'react'
import { makeOptions } from './function'
import { FormSelect, FormInput } from '..'

const Form = ({
  handleSubmit,
  handleChange,
  handleChangeSelect,
  searchFilters,
  isDisabled,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <FormInput handleChange={handleChange} />

      <FormSelect
        selectName={searchFilters[1].name.replace('_en', '')}
        optionData={makeOptions(searchFilters[1].facets)}
        handleChangeSelect={handleChangeSelect}
      />

      <FormSelect
        selectName={searchFilters[2].name.replace('_en', '')}
        optionData={makeOptions(searchFilters[2].facets)}
        handleChangeSelect={handleChangeSelect}
      />

      <FormSelect
        selectName={searchFilters[0].name.replace('_en', '')}
        optionData={makeOptions(searchFilters[0].facets)}
        handleChangeSelect={handleChangeSelect}
      />

      <button
        disabled={isDisabled}
        className={` mt-7 py-2 px-8 mx-auto block text-white rounded-md duration-300 ${
          isDisabled
            ? 'cursor-not-allowed bg-primaryColor'
            : 'hover:bg-secondaryColor bg-formBtnColor'
        }`}
      >
        Search
      </button>
    </form>
  )
}

export default Form
