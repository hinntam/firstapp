import React, { useRef } from 'react';

const AudioPlayer = ({ src }) => {
    const audioRef = useRef(null);

    const handlePlay = () => {
        audioRef.current.play();
    };

    const handlePause = () => {
        audioRef.current.pause();
    };

    return (
        <div>
            <audio ref={audioRef} src={src} />
            <button onClick={handlePlay} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Play
            </button>
            <button onClick={handlePause} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ml-2">
                Pause
            </button>
        </div>
    );
};

export default AudioPlayer;