import React from "react";

function Alert(props) {
    const alertClose = () => {
        props.onClick();
    }
    return(
        <div className="alert_wrap">
            <div className="alert_header">
                <h2>경고</h2>
            </div>
            <div className="alert_con">
                <p>{props.text}</p>
                <button onClick={alertClose}>확인</button>
            </div>
        </div>
    );
}

export default Alert;
