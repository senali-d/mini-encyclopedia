const Input = ({ type = 'text', label = '', ...props }) => {
  return (
    <div className="w-full flex flex-col">
      {label ? <label className="text-[#374151] font-medium mt-3">{label}</label> : null}
      <input type={type} className="w-full border rounded-md border-[#D1D5DB] p-3 shadow-md focus:border-[#f99839] focus:outline-transparent focus:outline-offset-2 focus:shadow-[1px_1px_1px_#f99839] disabled:opacity-50 disabled:cursor-not-allowed mb-2" {...props} />
    </div>
  ) 
}

export default Input