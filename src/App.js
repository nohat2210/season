import React, { useState, useEffect } from 'react';
import SeasonDisplay from './components/SeasonDisplay'
import Spinner from './components/Spinner'

function App() {
    const [lat, setLat] = useState(null)
    // const [long, setLong] = useState(null)
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                setLat(position.coords.latitude);
                // setLong(position.coords.longitude);
            },
            // (position) => console.log(position),
            (err) => {
                setErrorMessage(err.message);
            }
        )
    }, [lat, errorMessage]);

    const renderContent = () => {
        if (lat && !errorMessage) {
            return (
                <SeasonDisplay lat={lat} />
            )
        } if (!lat && errorMessage) {
            return (
                <div>Error: {errorMessage}</div>
            )
        } else {
            return (
                <Spinner message="Please accept location request" />
            )
        };
    };
    
    return (
        <div className="border red">
            {renderContent()}
        </div>
    )
}

export default App
