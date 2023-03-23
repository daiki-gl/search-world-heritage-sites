const FormInput = ({ handleChange }) => {
  return (
    <div className="flex flex-col mb-4">
      <label className="font-semibold mb-1" htmlFor="keyword">
        KEYWORD
      </label>
      <input
        type="text"
        onChange={(e) => handleChange(e.target.value)}
        id="keyword"
        className="bg-inputBgColor rounded h-8 px-2 cursor-pointer"
      />
    </div>
  )
}

export default FormInput
