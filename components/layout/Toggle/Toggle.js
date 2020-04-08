import toggleScss from "./toggle.scss";

export default () => (
  <>
    <div>
      <a className="btn btn-primary btn-action open" on="tap:app-sidebar.toggle">
        <i className="icon icon-menu"></i>
      </a>
    </div>
    <style jsx global>
      {toggleScss}
    </style>
  </>
);
