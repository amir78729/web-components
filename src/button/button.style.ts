import { css } from "lit";

export default css`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }

  :host {
    cursor: pointer;
    display: inline-flex;
    user-select: none;
    text-overflow: ellipsis;
    place-content: center;
    place-items: center;
    position: relative;
  }

  .button {
    position: relative;
    border-radius: inherit;
    cursor: inherit;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    vertical-align: middle;
    background: transparent;
    text-decoration: none;
    font: inherit;
    gap: inherit;
    width: 100%;
    font-family: var(--tap-sys-font-family);
    border-radius: 999px;
  }

  :host([size="small"]) .button {
    padding: 0 var(--tap-sys-spacing-5);
    height: var(--tap-sys-spacing-9);
  }

  :host([size="small"]) .label {
    line-height: var(--tap-sys-typography-label-sm-height);
    font-size: var(--tap-sys-typography-label-sm-size);
    font-weight: var(--tap-sys-typography-label-sm-weight);
  }

  :host([size="medium"]) .button {
    padding: 0 var(--tap-sys-spacing-6);
    height: var(--tap-sys-spacing-10);
  }

  :host([size="medium"]) .label {
    line-height: var(--tap-sys-typography-label-sm-height);
    font-size: var(--tap-sys-typography-label-sm-size);
    font-weight: var(--tap-sys-typography-label-sm-weight);
  }

  :host([size="large"]) .button {
    padding: 0 var(--tap-sys-spacing-8);
    height: var(
      --tap-sys-spacing-11
    ); // FIXME: height of the large button is 52px but we dont have 52px in our tokens
  }

  :host([size="large"]) .label {
    line-height: var(--tap-sys-typography-label-lg-height);
    font-size: var(--tap-sys-typography-label-lg-size);
    font-weight: var(--tap-sys-typography-label-lg-weight);
  }
`;
