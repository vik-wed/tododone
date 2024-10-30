export default function Input({ type, value, onChange, testingId }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      data-cy={testingId}
    ></input>
  );
}
