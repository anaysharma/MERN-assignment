export default function Button({ className, children, buttonType, ...props }) {
  return (
    <button
      className={`rounded-md font-medium px-4 text-sm py-2 hover:opacity-70 transition-opacity ${
        buttonType == 'primary'
          ? 'bg-violet-600 text-white'
          : 'bg-violet-100 text-violet-700'
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
