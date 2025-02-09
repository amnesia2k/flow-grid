import PropTypes from "prop-types";

const Button = ({
  classes = " ",
  variant = "filled",
  color = "primary",
  children,
  ...rest
}) => {
  return (
    <button className={`btn ${variant} ${color} ${classes}`} {...rest}>
      {children}

      <div className="state-layer"></div>
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  classes: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.any,
};

export { Button };
