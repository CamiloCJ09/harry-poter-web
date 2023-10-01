import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import PropTypes from "prop-types";

const ApplicationBar = ({ children }) => {
  return (
    <AppBar
      position="absolute"
      style={{
        background: "transparent",
        boxShadow: "none",
        marginTop: "24px",
      }}
    >
      <Toolbar style={{ flexDirection: "column", alignItems: "center" }}>
        {children}
      </Toolbar>
    </AppBar>
  );
};

ApplicationBar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ApplicationBar;
