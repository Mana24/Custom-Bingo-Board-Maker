import "./styles/Dialog.scss";

export default function Dialog({ dialogOpen, close, children }) {
  if (!dialogOpen) return <></>;
  return (
    <div className="Dialog">
      <div className="Dialog-overlay" onClick={close} />
      <div className="Dialog-content">
        <button className="Dialog-close-btn danger-btn" title="Close" onClick={close}>
          X
        </button>
        <div className="Dialog-outside-content">{children}</div>
      </div>
    </div>
  );
}
