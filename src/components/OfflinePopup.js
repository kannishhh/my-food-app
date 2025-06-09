import "../styles/OfflinePopup.css";

const OfflinePopup = () => {
  return (
    <div className="offline-overlay">
      <div className="offline-popup">
        <img src="/no-internet.png" alt="no-internet"/>
        <h2>Connection Error</h2>
        <p>Please check your internet connection and try again. </p>
      </div>
    </div>
  );
};

export default OfflinePopup;
