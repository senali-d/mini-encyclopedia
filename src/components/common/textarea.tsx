const Textarea = ({ label = '', placeholder = '', name = '', rows = 4, ...props }) => {
  return (
    <div className="w-full flex flex-col">
      {label ? <label className="text-[#374151] font-medium mt-3">{label}</label> : null}
      <textarea
        name={name}
        placeholder={placeholder}
        rows={rows}
        className="w-full border rounded-md border-[#D1D5DB] p-3 shadow-md focus:border-[#f99839] focus:outline-transparent focus:outline-offset-2 focus:shadow-[1px_1px_1px_#f99839] disabled:opacity-50 disabled:cursor-not-allowed mb-2"
        {...props}>
      </textarea>
    </div>
  )
}

export default Textarea