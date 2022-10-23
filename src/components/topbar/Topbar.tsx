import React from 'react';
import "./topbar.css";
import LanguageIcon from '@mui/icons-material/Language';
import OnnData from '../../util/onnData';

interface TopbarProps {
    onnData: OnnData;
}

const Topbar: React.FC<TopbarProps> = ({ onnData }) => {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">ONN Dashboard</span>
                    {onnData.etf?.etfInfo[0].file}
                </div>
                <div className="topRight">
                    <div className="topbarIcons">
                        <LanguageIcon />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Topbar
