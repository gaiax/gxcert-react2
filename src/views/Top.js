
import { Link } from "react-router-dom";

function Top() {
  return (
    <div className="top">
      <div className="top-right">
        <p className="concept">確かな証明書を誰にでも簡単に</p>
        <p className="concept-large">ブロックチェーン技術による、改ざんされない確かな証明書を簡単に発行、受け取りすることができます。</p>
        <Link to="/signup">
          <div className="sign-up">
            SIGN UP
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Top;
