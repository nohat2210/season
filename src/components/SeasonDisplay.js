import React from 'react';
import '../styles/SeasonDisplay.css';


const seasonConfig = {
    summer : {
        text: "Let's hit the beach!!",
        iconName: 'sun'
    },
    winter : {
        text: "Brr, it is chillyyy",
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

function SeasonDisplay(props) {
    const season = getSeason(props.lat, new Date().getMonth());
    // const text = season === 'winter' ? "Brr, it is chilly" : "Let's hit the beach";
    // const icon = season === 'winter' ? "snowflake" : "sun";
    const {text, iconName} = seasonConfig[season];
    return (
        <div className = {`season-display ${season}`}>
            <i className= {`icon-left massive ${iconName} icon`} />
            <h4>My Friend!!</h4>
            <h1>{text}</h1>
            <i className= {`icon-right massive ${iconName} icon`}/>
        </div>
    )
}

export default SeasonDisplay
