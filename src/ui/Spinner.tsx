type SpinnerProps = {
  small?: boolean;
};

function Spinner({ small }: SpinnerProps) {
  return (
    <div className="spinner-box">
      <span className={`loader ${small ? "small-loader" : " "}`}></span>
    </div>
  );
}

export default Spinner;
