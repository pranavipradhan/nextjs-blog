import React from "react"; // header.tsx

const CovidBanner: React.FC = () => {
  return (
    <>
      <div className="covid_message">
        <div className="container flex_me">
          <div>
            <img src="/media/2216/alert_icon.svg" alt="" />{" "}
            <span>Warning: Emails are not used to Pay Bills!</span>{" "}
            <a
              href="/en/caution"
              className="btn linear_btn waves-effect waves-light"
            >
              Find out more
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CovidBanner;