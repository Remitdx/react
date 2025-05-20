export function Checkbox({checked, onChange, label, id}) {
  return <div>
    <input
      id={id}
      type="checkbox"
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      />
      <label htmlFor={id}>{label}</label>
  </div>
}
