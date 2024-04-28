import {html} from "lit";
import {TapIcon} from "../../icon";

export class SquarePersonFillIcon extends TapIcon {
  render() {
    return this.renderIcon(html`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_24_1699)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M20 2C20.5046 1.99984 20.9906 2.19041 21.3605 2.5335C21.7305 2.87659 21.9572 3.34684 21.995 3.85L22 4V20C22.0002 20.5046 21.8096 20.9906 21.4665 21.3605C21.1234 21.7305 20.6532 21.9572 20.15 21.995L20 22H4C3.49542 22.0002 3.00943 21.8096 2.63945 21.4665C2.26947 21.1234 2.04284 20.6532 2.005 20.15L2 20V19H1C0.734784 19 0.48043 18.8946 0.292893 18.7071C0.105357 18.5196 0 18.2652 0 18C0 17.7348 0.105357 17.4804 0.292893 17.2929C0.48043 17.1054 0.734784 17 1 17H2V13H1C0.734784 13 0.48043 12.8946 0.292893 12.7071C0.105357 12.5196 0 12.2652 0 12C0 11.7348 0.105357 11.4804 0.292893 11.2929C0.48043 11.1054 0.734784 11 1 11H2V7H1C0.734784 7 0.48043 6.89464 0.292893 6.70711C0.105357 6.51957 0 6.26522 0 6C0 5.73478 0.105357 5.48043 0.292893 5.29289C0.48043 5.10536 0.734784 5 1 5H2V4C1.99984 3.49542 2.19041 3.00943 2.5335 2.63945C2.87659 2.26947 3.34684 2.04284 3.85 2.005L4 2H20ZM20 4H4V20H4.062C4.2394 18.5952 4.78608 17.2626 5.64633 16.138C6.50659 15.0133 7.64964 14.1369 8.959 13.598C8.46238 13.0168 8.1427 12.3055 8.03782 11.5482C7.93294 10.791 8.04726 10.0196 8.36723 9.32527C8.6872 8.63099 9.19942 8.04293 9.84324 7.63074C10.4871 7.21854 11.2355 6.99948 12 6.99948C12.7645 6.99948 13.5129 7.21854 14.1568 7.63074C14.8006 8.04293 15.3128 8.63099 15.6328 9.32527C15.9527 10.0196 16.0671 10.791 15.9622 11.5482C15.8573 12.3055 15.5376 13.0168 15.041 13.598C16.3504 14.1369 17.4936 15.0134 18.354 16.138C19.2144 17.2626 19.7613 18.5952 19.939 20H20V4Z" fill="currentColor"/>
        </g>
        <defs>
          <clipPath id="clip0_24_1699">
            <rect width="24" height="24" fill="white"/>
          </clipPath>
        </defs>
      </svg>
      `);
  }
}