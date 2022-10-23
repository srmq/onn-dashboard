import React, { useState, useEffect } from 'react';
import './App.css';
import Topbar from './components/topbar/Topbar';
import OnnData from './util/onnData';
import { fetchONNData } from './services/w3storage';

function App() {
    const [onnData, setOnnData] = useState<OnnData>({});

    useEffect(() => {
        fetchONNData().then(onnIndexData => {
            let onnData = onnIndexData as OnnData;
            console.log(onnData);
            setOnnData(onnData);
        });
    }, []);

    return (
        <div>
            <Topbar onnData={onnData} />
        </div>
    );
}

export default App;
