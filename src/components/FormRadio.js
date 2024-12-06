export function FormRadio({
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
      <div className="radio-group">{children}</div>
    </div>
  )
}

export function FormRadioOption({ labelText = '', children }) {
  return (
    <>
      {labelText !== '' && (
        <label class="btn">
          {children}
          {labelText}
        </label>
      )}
    </>
  )
}
