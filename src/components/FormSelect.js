export function FormSelect({
  labelFor = null,
  labelText = '',
  required = false,
  children,
}) {
  return (
    <div className="field-group">
      {labelFor !== null && (
        <label for={labelFor}>
          {labelText}: {required && <span>*Required</span>}
        </label>
      )}
      {children}
    </div>
  )
}
