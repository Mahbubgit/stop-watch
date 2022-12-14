import React, { useState } from "react";
import "./StopWatch.css";
import Timer from "../Timer/Timer";
import ControlButtons from "../ControlButtons/ControlButtons";

function StopWatch() {
	const [isActive, setIsActive] = useState(false);
	const [isPaused, setIsPaused] = useState(true);
	const [time, setTime] = useState(0);

	React.useEffect(() => {
		let interval = null;

		if (isActive && isPaused === false) {
			interval = setInterval(() => {
				setTime((time) => time + 10);
			}, 10);
		}
		else {
			clearInterval(interval);
		}
		return () => {
			clearInterval(interval);
		};
	}, [isActive, isPaused]);

	const handleStart = () => {
		setIsActive(true);
		setIsPaused(false);
	};

	const handlePauseResume = () => {
		setIsPaused(!isPaused);
	};

	const handleReset = () => {
		setIsActive(false);
		setTime(0);
	};

	return (
		<div className="stop-watch">
			<h1 className='font-bold' style={{fontSize:48, color:"lightblue"}}>Stop Watch</h1>
			<Timer time={time} />
			
			<ControlButtons
				active={isActive}
				isPaused={isPaused}
				handleStart={handleStart}
				handlePauseResume={handlePauseResume}
				handleReset={handleReset}
			/>
		</div>
	);
}

export default StopWatch;
