import './styles/Toggle.scss';

export default function Toggle({
  toggleState,
  setToggleState,
  option1,
  option2,
}) {
  const firstOptionActice = toggleState === option1;
  const otherOption = firstOptionActice ? option2 : option1;

  const handleClick = () => {
    setToggleState(otherOption);
  };

  return (
    <div className="Toggle">
      <button
        className={`Toggle-btn ${firstOptionActice ? "Toggle-btn-active" : ""}`}
        type="button"
        onClick={handleClick}
        disabled={firstOptionActice}
      >
        {option1}
      </button>
      <button
        className={`Toggle-btn ${
          !firstOptionActice ? "Toggle-btn-active" : ""
        }`}
        type="button"
        onClick={handleClick}
        disabled={!firstOptionActice}
      >
        {option2}
      </button>
    </div>
  );
}
