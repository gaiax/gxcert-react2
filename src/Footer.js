import React from "react";

class Footer extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <footer>
        <div className="footer-message">
          このアプリケーションは、通貨MATICの寄付により、データの書き込み・変更ができます。
        </div>
        <div className="footer-app">
          Copyright Gaiax inc.
        </div>
      </footer>
    );
  }
}

export default Footer;
