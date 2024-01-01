import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const Welcome = () => {
  const [showWelcome, setShowWelcome] = useState();

  useEffect(() => {
    setShowWelcome(JSON.parse(localStorage.getItem("show_app_intro")) ?? true);
  }, []);

  const onHideWelcome = () => {
    setShowWelcome(false);
    localStorage.setItem("show_app_intro", "false");
  };

  return (
    <React.Fragment>
      {showWelcome && (
        <div className="container">
          <div className=" bg-primary text-white my-3">
            <FontAwesomeIcon
              icon={faClose}
              style={{ float: "right", margin: "5px" }}
              onClick={onHideWelcome}
            />
            <div className="p-4">welcome</div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
export default Welcome;
