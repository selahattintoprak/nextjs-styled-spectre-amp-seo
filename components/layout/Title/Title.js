import pageTitleScss from "./title.scss";
export default ({ title, titleAnchor }) => (
  <>
    <h3 className="s-title">
      {title}
      <a className="anchor" href={titleAnchor} aria-hidden="true">
        #
      </a>
    </h3>
    <style jsx global>
      {pageTitleScss}
    </style>
  </>
);
