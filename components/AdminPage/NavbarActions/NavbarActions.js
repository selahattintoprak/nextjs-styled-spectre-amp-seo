import navbarActionsScss from "./navbar-actions.scss";
export default ({ divider }) => (
  <div className="d-flex">
    {divider && <div className="divider-vert"></div>}
    <div>
      <a className="btn ml-1" href="#login">
        Login
      </a>
      <a className="btn btn-primary ml-1" href="#">
        Logout
      </a>
    </div>

    <style jsx global>
      {navbarActionsScss}
    </style>
  </div>
);
