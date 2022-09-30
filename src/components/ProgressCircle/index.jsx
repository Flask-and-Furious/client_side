import React from "react";
import { pythonFetchedCodePackages } from "../../pages/Game/pythonQuestions";
import { javascriptFetchedCodePackages } from "../../pages/Game/javascriptQuestions";

function ProgressCircle(progress, language) {

    const jsPercentage = (progress.progress / javascriptFetchedCodePackages.length ) * 100
    const pyPercentage = (progress.progress / pythonFetchedCodePackages.length ) * 100

    const center = 100 / 2
    const radius = center - 10
    const dashArray = 2 * Math.PI * radius
    const pyDashOffset = dashArray * ((100 - pyPercentage)/100)
    const jsDashOffset = dashArray * ((100 - jsPercentage)/100)

  return (
    <>
    <div className="svg-pi-wrapper">
      <svg className="svg-pi">
        <circle className="svg-pi-track" />
        {progress.language == "Javascript" ? 
        <circle className="svg-pi-indicator" strokeDasharray={dashArray} strokeDashoffset={jsDashOffset}/> :
        <circle className="svg-pi-indicator" strokeDasharray={dashArray} strokeDashoffset={pyDashOffset}/>}
      </svg>
      <div className="svg-pi-label">
        <span className="svg-pi-language">{progress.language}</span>
        {progress.language == "Javascript" ?
        <span className="svg-pi-percentage">{jsPercentage}%</span> :
        <span className="svg-pi-percentage">{pyPercentage}%</span>}
      </div>
    </div>
    </>
  );
}

export default ProgressCircle;
