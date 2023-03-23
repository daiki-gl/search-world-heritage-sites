const FormSelect = ({ selectName, optionData, handleChangeSelect }) => {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor="country" className="font-semibold mb-1">
        {selectName.toUpperCase()}
      </label>
      <select
        onChange={(e) => {
          handleChangeSelect(selectName, e.target.value)
        }}
        id="country"
        className="bg-inputBgColor rounded h-8 px-2 cursor-pointer"
      >
        <option value="">Choose {selectName}</option>
        {optionData}
      </select>
    </div>
  )
}

export default FormSelect
