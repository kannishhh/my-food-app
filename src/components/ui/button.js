import "./button.css"; //

export function Button({ className = "", ...props }) {
  return (
    <button
      className={`btn ${className}`}
      {...props}
    />
  );
}
