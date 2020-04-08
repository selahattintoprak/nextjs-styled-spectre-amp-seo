import pageTitleScss from "./title.scss";
export default ({ title, anchor }) => (
  <>
    <h3 className="s-title">
      {title}
      <a className="anchor" href={anchor} aria-hidden="true">
        #
      </a>
    </h3>
    <style jsx global>
      {pageTitleScss}
    </style>
  </>
);
