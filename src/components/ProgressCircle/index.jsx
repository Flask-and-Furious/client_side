import React from "react";

function ProgressCircle(progress, language) {

    // const percentage = (4 / 5) * 100
    const percentage = (progress.progress / 5) * 100

    // let {
    //     size = 150,
    //     progress = 0,
    //     trackWidth = 10,
    //     trackColor = `#ddd`,
    //     indicatorWidth = 5,
    //     indicatorColor = `#07c`,
    //     indicatorCap = `round`,
    //     label = `Loading...`,
    //     labelColor = `#333`,
    //   } = props

    const center = 100 / 2
    const radius = center - 10
    const dashArray = 2 * Math.PI * radius
    const dashOffset = dashArray * ((100 - percentage)/100)
    console.log(progress)
    console.log(percentage)
    console.log(dashArray)
    console.log(dashOffset)

  return (
    <>
    <div className="svg-pi-wrapper">
      <svg class="svg-pi">
        <circle class="svg-pi-track" />
        <circle class="svg-pi-indicator" strokeDasharray={dashArray} strokeDashoffset={dashOffset}/>
      </svg>
      <div className="svg-pi-label">
        <span className="svg-pi-language">{progress.language}</span>
        <span className="svg-pi-percentage">{percentage}%</span>
      </div>
    </div>
    </>
    // <>
    //   <div
    //     className="svg-pi-wrapper"
    //     style={{ width: size, height: size }}
    //   >
    //     {!hideLabel && (
    //       <div 
    //         className="svg-pi-label" 
    //         style={{ color: labelColor }}
    //       >
    //         <span className="svg-pi-label__loading">
    //           {label}
    //         </span>

    //         {!spinnerMode && (
    //           <span className="svg-pi-label__progress">
    //             {`${
    //               progress > 100 ? 100 : progress
    //             }%`}
    //           </span>
    //         )}
    //       </div>
    //     )}
    //   </div>
    // </>
  );
}

export default ProgressCircle;