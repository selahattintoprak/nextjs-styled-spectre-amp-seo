import sidebarScss from "./sidebar.scss";
export default ({ children, withStyles }) => (
  <>
    <div className="app-sidebar off-canvas-sidebar" id="sidebar">
      {/* <Brand /> */}
      <div className="app-nav">{children}</div>
    </div>
    <a className="off-canvas-overlay" href="#close"></a>
    {withStyles && (
      <style jsx global>
        {sidebarScss}
      </style>
    )}
  </>
);
