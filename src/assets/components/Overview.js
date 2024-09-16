import React from "react";
import '../css/Overview.css';
import jpj from '../images/jpj.svg';
import png from '../images/png.svg';
import cut from '../images/cut.svg';
import compress from '../images/compress.svg';
import merge from '../images/merge.svg';
import powerpoint from '../images/powerpoint.svg';
import { Link } from "react-router-dom";

function Overview() {
    return (
        <>
        <div className="convert-files-heading">Convert Files</div>
        <div className="convert-overview-container">
            <Link to="/pages/jpgtopdf" className="convert-box-1">
                <div className="con-box1-border"></div>
                <div className="box-1">
                    <div className="box-1-top">
                        <div className="box-1-circle"></div>
                        <img className="box-1-image" src={jpj} />
                    </div>
                    <div className="box-1-text-box">
                        <div className="jpg-to-pdf">JPG TO PDF</div>
                        <div className="convert-a-jpg-to-pdf">
                        Convert a JPG
                        <br />
                        to PDF
                        </div>
                    </div>
                </div>
            </Link>
            <Link to="/pages/pngtopdf" className="convert-box-2">
                <div className="con-box-2-border"></div>
                <div className="box-2">
                    <div className="box-2-top">
                        <div className="box-2-circle"></div>
                        <img className="box-2-image" src={png} />
                    </div>
                    <div className="box-2-text-box">
                        <div className="png-to-pdf">PNG to PDF</div>
                        <div className="convert-a-png-to-pdf">
                        Convert a PNG
                        <br />
                        to PDF
                        </div>
                    </div>
                </div>
            </Link>
            <Link to="/pages/splittopdf" className="convert-box-2">
                <div className="con-box-2-border"></div>
                <div className="box-2">
                    <div className="box-2-top">
                        <div className="box-2-circle"></div>
                        <img className="box-2-image" src={cut} />
                    </div>
                    <div className="box-2-text-box">
                        <div className="png-to-pdf">Split to PDF</div>
                        <div className="convert-a-png-to-pdf">
                        Split into one or multple PDF
                        </div>
                    </div>
                </div>
            </Link>
        </div>
        {/* Row 2 */}
        <div className="convert-overview-container-r2">
            <Link to="/pages/powerpointtopdf" className="convert-box-1">
                <div className="con-box1-border"></div>
                <div className="box-1">
                    <div className="box-1-top">
                        <div className="box-1-circle"></div>
                        <img className="box-1-image" src={powerpoint} />
                    </div>
                    <div className="box-1-text-box">
                        <div className="jpg-to-pdf">Power Point...</div>
                        <div className="convert-a-jpg-to-pdf">
                        Convert power point to PDF
                        </div>
                    </div>
                </div>
            </Link>
            <Link to="/pages/mergepdf"className="convert-box-2">
                <div className="con-box-2-border"></div>
                <div className="box-2">
                    <div className="box-2-top">
                        <div className="box-2-circle"></div>
                        <img className="box-2-image" src={merge} />
                    </div>
                    <div style={{textDecoration: 'none'}} className="box-2-text-box">
                        <div className="png-to-pdf">Merge PDF</div>
                        <div className="convert-a-png-to-pdf">
                        Merge files into a single file
                        </div>
                    </div>
                </div>
            </Link>
            <Link to="/pages/compresspdf" className="convert-box-2">
                <div className="con-box-2-border"></div>
                <div className="box-2">
                    <div className="box-2-top">
                        <div className="box-2-circle"></div>
                        <img className="box-2-image" src={compress} />
                    </div>
                    <div className="box-2-text-box">
                        <div className="png-to-pdf">Compress PDF</div>
                        <div className="convert-a-png-to-pdf">
                        Convert a JPG
                        <br />
                        to PDF
                        </div>
                    </div>
                </div>
            </Link>
        </div>

        </>
    )
}

export default Overview;