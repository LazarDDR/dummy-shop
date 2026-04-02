function Spinner({ small }) {
  return (
    <div className="spinner-box">
      <span className={`loader ${small ? "small-loader" : " "}`}></span>
    </div>
  );
}

export default Spinner;
