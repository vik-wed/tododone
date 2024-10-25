export default function Button({ buttonText, onClick, isDisabled, variant }) {
  return (
    <button disabled={isDisabled} onClick={onClick} className={variant}>
      {buttonText}
    </button>
  );
}
