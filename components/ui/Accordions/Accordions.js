import accordionsScss from "./accordions.scss";
import { AccordionsStyles } from "../../../ui-styles/styles";
export default ({ children, accordionItems }) => (
  <>
    <div className="accordion-container">
      {accordionItems.map(({ id, title, link, columns }) => (
        <div className="accordion" key={id}>
          <input id={"accordion-" + id} type="checkbox" name={id + "-accordion-checkbox"} hidden checked/>
          <label className="accordion-header c-hand" htmlFor={"accordion-" + id}>
            {title}
          </label>
          <div className="accordion-body">
            <ul className="menu menu-nav" style={{ display: "block" }}>
              {columns.map(({ items }, index) => (
                <React.Fragment key={index}>
                  {items.map(({ title, link }) => (
                    <li className="menu-item" key={title}>
                      <a href={link}>{title}</a>
                    </li>
                  ))}
                </React.Fragment>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
    <AccordionsStyles />
    <style jsx global>
      {accordionsScss}
    </style>
  </>
);
