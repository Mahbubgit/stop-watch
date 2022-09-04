import React from "react";
import "./ControlButtons.css";

export default function ControlButtons(props) {
    // const StartButton = (
    //     <div className="btn btn-one btn-grp"
    //         onClick={props.handleStart}>
    //         Start
    //     </div>
    // );
    const ActiveButtons = (
        <div className="btn-grp">
            <div className="btn btn-one"
                onClick={props.handleStart}>
                Start
            </div>
            <div className="btn btn-one"
                onClick={props.handleReset}>
                Reset
            </div>
            <div className="btn btn-one"
                onClick={props.handlePauseResume}>
                {props.isPaused ? "Resume" : "Stop"}
            </div>
        </div>
    );

    return (
        <div className="Control-Buttons">
            {/* <div>{props.active ? ActiveButtons : StartButton}</div> */}
            <div> {ActiveButtons} </div>
        </div>
    );
}
