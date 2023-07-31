import React, {useEffect, useState} from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import randomNumber from 'random-number'

const SpeechToText: React.FC = () => {
    const [transcript, setTranscript] = useState('');
    const { transcript: currentTranscript, resetTranscript } = useSpeechRecognition();

    useEffect(() => {
        if (currentTranscript) {
            setTranscript(currentTranscript);
            resetTranscript();
        }
    }, [currentTranscript, resetTranscript]);

    const generateRandomNumber = () => {
        const options = {
            min: 0,
            max: 100,
            integer: true,
        };

        return randomNumber(options);
    };

    return (
        <div>
            <h1>Speech to Text</h1>
            <p>Transcript: {transcript}</p>
            <p>Random Number: {generateRandomNumber()}</p>

            <button onClick={() => SpeechRecognition.startListening()}>Start</button>
            <button onClick={() => SpeechRecognition.stopListening()}>Stop</button>
        </div>
    );
};

export default SpeechToText

