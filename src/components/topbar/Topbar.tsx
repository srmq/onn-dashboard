import * as React from 'react';
import "./topbar.css"
import LanguageIcon from '@mui/icons-material/Language';

export interface ITopbarProps {
}

export default class Topbar extends React.Component<ITopbarProps> {
  public render() {
    return (
      <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">ONN Dashboard</span>
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
}
