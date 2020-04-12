import { ModalsStyles } from "../../ui-styles/styles";
export default ({ className, id, title, body, footer }) => (
  <>
    <div class={"modal " + className} id={id}>
      <a href="#close" class="modal-overlay" aria-label="Close"></a>
      <div class="modal-container">
        <div class="modal-header">
          <div class="modal-title h5">{title}</div>
          <a href="#close" class="btn btn-clear" aria-label="Close">
            <i class="icon icon-cross"></i>
          </a>
        </div>
        <div class="modal-body">
          <div class="content">{body}</div>
        </div>
        <div class="modal-footer">{footer}</div>
      </div>
    </div>
    <ModalsStyles />
    <style jsx global>
      {`
        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      `}
    </style>
  </>
);
