export function Input({placeholder, value, onChange}) {
  return <>
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      />
  </>
}
