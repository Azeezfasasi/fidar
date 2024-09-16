import React from "react";
import '../css/DashRightSide.css';
import line3 from '../images/Line3.svg';
import uploaddoc from '../images/uploaddoc.svg';

function DashRightSide() {
    return (
        <>
        <div className="frame-3021">
            <img className="line-3" src={line3} />
            <div className="donut"></div>
            <div className="donut2"></div>
            <div className="donut3"></div>
            <div className="donut4"></div>
            <div className="legend">
                <span>
                    <span className="legend-span">
                        20 GB
                        <br />
                    </span>
                    <span className="legend-span2">Used of 40 GB</span>
                </span>
            </div>
            
            <div className="upgrade-plan">Upgrade Plan</div>
            <div className="frame-3044">
                <div className="frame-3037">
                <div className="frame-3036">
                    <div className="frame-3026">
                        <div className="images">Images</div>
                        <div className="_1200-files">1200 files</div>
                    </div>
                    <div className="_5-gb">5 GB</div>
                </div>
                <div className="static-progress-bar">
                    <div className="track"></div>
                </div>
                </div>
                <div className="frame-3038">
                <div className="frame-30362">
                    <div className="frame-3026">
                    <div className="documents">Documents</div>
                    <div className="_1800-files">1800 files</div>
                    </div>
                    <div className="_14-gb">14 GB</div>
                </div>
                <div className="static-progress-bar">
                    <div className="track2"></div>
                </div>
                </div>
                <div className="frame-3039">
                <div className="frame-30363">
                    <div className="frame-3026">
                    <div className="archives">Archives</div>
                    <div className="_1200-files">1200 files</div>
                    </div>
                    <div className="_14-gb2">14 GB</div>
                </div>
                <div className="static-progress-bar">
                    <div className="track3"></div>
                </div>
                </div>
                <div className="frame-3040">
                <div className="frame-30364">
                    <div className="frame-3026">
                    <div className="others">Others</div>
                    <div className="_1200-files">1200 files</div>
                    </div>
                    <div className="_14-gb3">14 GB</div>
                </div>
                <div className="static-progress-bar">
                    <div className="track3"></div>
                </div>
                </div>
            </div>
            <div className="frame-3042">
                <div className="frame-3041">
                    <div className="upload-image-icon">
                        <img className="upload-image" src={uploaddoc} />
                    </div>
                    <div className="drag-and-drop-an-image-or-select-a-file">
                        Drag and drop an image or select a file
                    </div>
                </div>
                <div className="button">
                    <div className="button2">Upload File</div>
                </div>
            </div>
            </div>

        </>
    )
}

export default DashRightSide;