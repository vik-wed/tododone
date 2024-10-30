export default function Button({
  buttonText,
  onClick,
  isDisabled,
  variant,
  testingId,
}) {
  return (
    <button
      data-cy={testingId}
      type="button"
      disabled={isDisabled}
      onClick={onClick}
      className={variant}
    >
      {buttonText}
    </button>
  );
}
