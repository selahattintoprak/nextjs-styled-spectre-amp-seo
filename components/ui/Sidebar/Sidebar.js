import sidebarScss from "./sidebar.scss";
export default ({ children, id}) => (
  <>
    <div className="app-sidebar off-canvas-sidebar" id={id}>
      {/* <Brand /> */}
      <div className="app-nav">{children}</div>
    </div>
    <a className="off-canvas-overlay" href="#close"></a>
    <style jsx global>
      {sidebarScss}
    </style>
  </>
);
