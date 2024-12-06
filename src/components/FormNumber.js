export function FormNumber({
  labelFor = null,
  labelText = '',
  required = false,
  children,
  handleValue,
}) {
  return (
    <div className="field-group">
      {labelFor !== null && (
        <label for={labelFor}>
          {labelText}: {required && <span>*Required</span>}
        </label>
      )}
      <div className="number-group">
        <button type="button" onClick={() => handleValue('minus')}>
          -1
        </button>
        {children}
        <button type="button" onClick={() => handleValue('plus')}>
          +1
        </button>
      </div>
    </div>
  )
}
