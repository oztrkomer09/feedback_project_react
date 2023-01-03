const Button = ({ isDisabled, children, version }) => {
  return (
    <button disabled={isDisabled} className={`btn btn-${version} `}>
      {children}
    </button>
  );
};

export default Button;
