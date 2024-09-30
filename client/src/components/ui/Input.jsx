export default function Input({
  className,
  onChange,
  labelText,
  name,
  required,
  ...props
}) {
  return (
    <div className="grid p-2 gap-1">
      <label htmlFor={name} className="text-gray-600 font-bold px-3 text-sm">
        {labelText}{' '}
        {required && <span className="text-red-600 font-medium">*</span>}
      </label>
      <input
        name={name}
        id={name}
        className={`rounded-md px-3 py-1.5 border shadow-inner bg-gray-50 ${className}`}
        onChange={(e) => onChange(e.target.value)}
        {...props}
      />
    </div>
  );
}
