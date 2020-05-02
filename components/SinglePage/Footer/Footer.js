import footerScss from "./footer.scss";
export default () => (
  <>
      <p>
        <a href="https://github.com/picturepan2/spectre" target="_blank">
          GitHub
        </a>{" "}
        ·{" "}
        <a href="https://twitter.com/spectrecss" target="_blank">
          Twitter
        </a>{" "}
        ·{" "}
        <a href="https://www.paypal.me/picturepan2" target="_blank">
          PayPal Donate
        </a>{" "}
        ·{" "}
        <a href="https://www.patreon.com/spectrecss" target="_blank">
          Patreon Sponsor
        </a>{" "}
        · Version <span className="version"></span>
      </p>
      <p>
        Designed and built with <span className="text-error">&hearts;</span> by{" "}
        <a href="https://twitter.com/picturepan2" target="_blank">
          Yan Zhu
        </a>
        . Licensed under the{" "}
        <a href="https://github.com/picturepan2/spectre/blob/master/LICENSE" target="_blank">
          MIT License
        </a>
        .
      </p>
    <style jsx global>
      {footerScss}
    </style>
  </>
);
