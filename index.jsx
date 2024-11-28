import React, { useState, useEffect, useRef } from 'React';
function Dongho() {

    const [isRuning, setIsRuning] = useState(false);
    const [elapsedTime, seteladsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {

    }, [isRuning]);

    function Start() {

    }

    function Stop() {

    }
    function Resset() {

    }
    function formatTime() {

        return '00:00:00';

    }

    return (
        <div className="Dongho">
            <div className="display">{formatTime()}</div>

        </div>
    );
}
export default Dongho