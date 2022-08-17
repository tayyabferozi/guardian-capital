import React from "react";

const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-sections">
        <div className="footer-one">
          <div className="logo">
            <svg
              width="80"
              height="72"
              viewBox="0 0 80 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M56.3951 63.4877C58.7213 66.1974 61.6938 67.2296 65.1832 67.7458C71.128 68.52 77.7191 65.5522 79.5284 63.3587V68.2619C76.2975 70.1974 69.448 72.0038 62.9861 71.7458C58.8506 71.6167 55.4904 70.3264 53.8103 69.5522C51.2256 68.2619 48.1239 65.8103 46.5731 62.9716C45.41 60.907 44.5053 58.9716 44.1176 56.52C41.2744 56.2619 37.5265 55.2296 33.6494 53.1651C26.1537 49.0361 24.2152 48.778 24.2152 48.778C24.7321 49.1651 28.7384 52.649 23.4397 55.2296C19.6919 57.0361 18.141 57.4232 18.141 57.4232C18.141 57.4232 21.5012 62.3264 22.6643 63.8748C23.2199 64.5404 23.6162 65.0895 23.9416 65.5402C24.7515 66.6621 25.1214 67.1746 26.4122 67.3587C28.0923 67.4877 33.0032 68.52 34.8126 69.0361C37.785 69.9393 36.8803 70.9716 34.9418 70.3264C34.9418 70.3264 32.3571 69.8103 29.3846 69.6812C25.2813 69.4764 20.2008 70.0033 18.0212 70.2293C17.455 70.288 17.0845 70.3264 16.9779 70.3264C16.5902 70.3264 16.7194 69.6812 17.2364 69.4232C17.3461 69.3684 17.5546 69.3021 17.8152 69.2192C18.7827 68.9113 20.4673 68.3752 20.4673 67.3587C20.4673 65.5522 5.21737 59.1006 5.21737 59.1006C5.21737 59.1006 3.92501 58.1974 4.82966 57.2941C5.47585 56.778 6.25127 55.7458 6.76821 54.4554C6.05791 53.3291 5.15849 52.2972 4.25775 51.2637C2.37242 49.1006 0.48129 46.9308 0.306381 43.8748C-0.0614599 37.7538 4.5729 35.1172 5.6007 34.5325C5.65621 34.5009 5.7012 34.4753 5.73432 34.4554C5.86356 34.4554 7.93134 33.5522 8.836 32.907C9.26663 35.7017 12.5671 36.6161 13.6572 36.9181C13.8758 36.9786 14.0055 37.0145 14.0055 37.0361C16.0732 45.9393 27.5753 45.0361 38.5604 38.9716C38.7543 38.8425 38.9481 38.7458 39.142 38.649C39.3358 38.5522 39.5297 38.4554 39.7235 38.3264C38.988 38.5467 38.2524 38.7253 37.493 38.9096C36.9181 39.0491 36.3297 39.1919 35.7172 39.3587C33.9079 39.6167 29.6431 39.8748 27.0584 36.778C27.3168 36.649 27.4461 36.649 27.5753 36.649C42.4375 33.5522 47.09 34.7135 48.5116 35.3587C48.5508 35.2805 48.6017 35.1906 48.6574 35.0924C48.7855 34.8662 48.9385 34.5963 49.0286 34.3264C47.2193 33.6812 42.4375 32.649 32.0986 34.3264C30.2893 34.4554 24.9906 34.1974 23.6982 30.4554C32.2278 30.0683 42.0498 29.8103 49.1578 34.3264C49.4163 33.8103 49.5455 33.2941 49.6748 32.778C44.1176 29.6812 37.1388 28.907 30.2893 28.778H28.9969C26.7999 28.649 22.1474 28.0038 20.7258 24.3909H22.5351C42.9545 24.3909 48.5116 30.0683 49.804 32.2619C49.9332 31.8748 50.0625 31.3587 50.0625 30.9716C47.8655 28.2619 41.6621 23.3587 24.7321 22.9716C22.4058 22.5845 17.3656 21.1651 16.461 15.6167C20.0796 16.778 24.8613 17.6812 31.3232 17.9393C43.3422 18.5845 48.3824 26.0683 50.1917 30.1974C50.321 29.2941 50.1917 28.778 50.1917 28.778C49.9332 27.2296 49.6748 25.6812 49.2871 24.5199C47.9947 20.5199 46.5731 14.3264 47.8655 9.55221C48.2532 8.26188 48.8993 6.97156 49.9332 5.81027V5.5522C49.804 2.06833 47.4777 0.261882 47.4777 0.261882C47.4777 0.261882 47.2193 -0.641344 51.2256 0.907043C53.5519 1.81027 54.4565 3.87479 54.715 5.29414L55.8781 4.77801C55.8781 4.77801 55.7489 4.13285 54.9735 3.22962L55.0607 3.21993C56.1887 3.09445 57.2061 2.98126 58.5921 3.35866C62.5984 4.26188 62.8569 8.00382 62.8569 8.00382C68.6726 8.51995 69.1895 13.8103 69.1895 13.8103C69.1895 13.8103 65.0539 12.0038 61.3061 12.907C59.626 13.2941 59.2383 16.1329 60.1429 17.5522C63.1154 22.0683 66.3463 29.2941 67.2509 32.778C70.8696 33.0361 75.2636 33.8103 78.6238 34.9716V37.4232C78.6238 38.6575 78.67 39.6612 78.7347 41.0685C78.7783 42.0151 78.8303 43.1442 78.8822 44.649H76.4268C75.8883 42.2834 75.3498 41.5307 74.7365 40.6735C74.6139 40.502 74.4882 40.3264 74.359 40.1329C73.7128 38.9716 72.6789 38.0683 71.128 37.4232C69.7064 36.778 67.8971 36.3909 65.7001 36.3909C62.8569 36.3909 60.5306 37.0361 58.5921 38.1974C58.3982 38.3264 58.2044 38.4877 58.0105 38.649C57.8167 38.8103 57.6228 38.9716 57.429 39.1006C57.1705 39.2296 57.0413 39.3587 56.912 39.4877C55.7489 40.649 54.8442 42.0683 54.0688 43.8748C53.0349 46.4554 52.518 49.4232 52.518 52.649C52.518 57.8103 54.0688 60.778 56.3951 63.4877ZM6.17652 50.1756C6.6873 50.8205 7.20141 51.4696 7.67287 52.1329C7.67287 52.1329 9.35294 51.2296 5.73432 46.9716C4.05424 44.907 3.92501 40.778 4.57119 39.4877C1.12138 43.7931 3.60695 46.9313 6.17652 50.1756ZM15.4256 15.3584C15.5549 16.3907 16.0718 20.3907 19.0443 22.9713C-2.53825 21.681 2.37275 8.77776 6.76679 5.16485C6.76679 5.03582 4.82824 11.4874 15.4256 15.3584ZM5.6037 21.4228C8.18844 23.3583 12.9702 24.2615 19.5613 24.5196C19.949 26.197 20.9829 27.8744 22.6629 28.9067L22.3475 28.9155C17.8235 29.0413 13.8016 29.1531 10.6439 28.6486C5.34523 27.8744 5.08675 21.0357 5.6037 21.4228ZM22.4044 30.7132C17.4934 30.9712 13.0994 31.1002 10.1269 30.197C10.1269 30.197 9.35152 38.7132 26.6692 35.4873C24.6014 34.5841 22.9214 32.5196 22.4044 30.7132ZM28.8663 41.2939C17.1057 44.0036 16.3303 37.681 16.3303 37.681C18.6566 38.0681 21.8875 37.939 26.1523 37.2939C26.9277 38.8423 28.6078 40.3907 30.6756 40.9068C30.3525 40.9713 30.0617 41.0358 29.7709 41.1003L29.7709 41.1003C29.4801 41.1649 29.1893 41.2294 28.8663 41.2939ZM66.9911 52.1323V53.9388C67.1535 53.9928 67.3159 54.0242 67.4593 54.052C67.6583 54.0904 67.8207 54.1219 67.8958 54.1968C69.7051 54.5839 70.739 54.842 71.1267 55.1001C71.3851 55.2291 71.6436 55.4872 71.7729 55.8743C71.9021 56.3904 72.0313 57.5517 72.0313 59.2291V60.1323H79.3978V52.1323C77.7178 52.2614 70.8682 52.3904 66.9911 52.1323Z"
                fill="#C4C2C1"
              ></path>
            </svg>
          </div>
        </div>
        <div className="footer-two">
          <div className="title">Quick Links</div>

          <a href="#0">Regulatory Documents</a>
          <a href="#0">Guardian Prosper™</a>
          <a href="#0">Guardian Create™</a>
          <a href="#0">About</a>
          <a href="#0">Insights</a>
          <a href="#0">Contact</a>
        </div>
        <div className="footer-three">
          <div className="title">Site Information</div>

          <a href="#0">Legal</a>
          <a href="#0">Privacy &amp; Security</a>
          <a href="#0">Social Media</a>
          <a href="#0">Accessibility</a>
          <a href="#0">Glossary of Financial Terms</a>
          <a href="#0">24-101 Trade Matching</a>
          <a href="#0">IRC Report to Securityholders</a>
        </div>
      </div>

      <div className="sub-footer">
        <p>
          Please read the prospectus before investing. Important information
          about each Guardian Capital mutual fund and exchange traded fund
          (“ETF”) is contained in its respective prospectus. Commissions,
          trailing commissions, management fees and expenses all may be
          associated with investments in mutual funds and ETFs. You will usually
          pay brokerage fees to your dealer if you purchase or sell units of an
          ETF on the Toronto Stock Exchange ("TSX"). If the units are purchased
          or sold on the TSX, investors may pay more than the current net asset
          value when buying units of the ETF and may receive less than the
          current net asset value when selling them. Except as noted otherwise,
          the indicated rates of return are the historical annual compounded
          total returns including changes in unit value and reinvestment of all
          distributions and do not take into account sales, redemptions,
          distribution or optional charges or income taxes payable by any
          security holder that would have reduced returns. Performance is
          calculated net of fees. Mutual funds and ETFs are not guaranteed,
          their values change frequently and past performance may not be
          repeated.
        </p>

        <p>
          The information on this website is intended for Canadian residents
          only. Mutual funds and ETFs on this website are sponsored by Guardian
          Capital LP and are only qualified for sale in certain provinces or
          territories of Canada. Your use of this website signifies that you
          accept our policies and terms of use, as found here Legal / Privacy
          and Security / Social Media / Accessibility
        </p>

        <p>
          Guardian Capital LP is the Manager of the Guardian Capital mutual
          funds and ETFs, and is a wholly-owned subsidiary of Guardian Capital
          Group Limited, a publicly traded firm, the shares of which are listed
          on the Toronto Stock Exchange.
        </p>

        <p>
          Guardian, Guardian Capital and the Guardian gryphin design are
          trademarks of Guardian Capital Group Limited, registered in Canada.
          Guardian Capital LP © Copyright2022
        </p>
      </div>
    </div>
  );
};

export default Footer;
