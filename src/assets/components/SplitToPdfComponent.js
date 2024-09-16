import React from "react";
import '../css/MergePdfComponent.css';
import arrowback from '../images/arrowback.svg';
import { Link } from "react-router-dom";
import docu2 from '../images/docu2.svg'

function SplitToPdfComponent() {
    return (
        <>
        <Link to="/pages/dashboard" className="arrow-wrapper">
            <img className="arrow-icon" src={arrowback} />
            <div className="arrow-back-text">Back</div>
        </Link>

        <div className="frame-3045">
            <div className="merge-pdf">Split to PDF</div>
            <div className="merge-files-into-a-single-file">
            Convert Powerpoint file to PDF
            </div>
        </div>

        {/*  */}
        <div className="upload-wrapper-box">
            <div className="upload-inner-box">
                <img className="upload-icon-logo" src={docu2} />
            </div>
            <div className="drag-and-drop">
                Drag and drop an image or select a file
            </div>
        </div>
        <div className="upload-url-and-bnt">
                <input type="text" className="upload-bottom-box" placeholder="Paste url..." />
            <div className="url-btn">
                <div className="url-btn-text">Upload File</div>
            </div>
        </div>
        
        {/*  */}
        <div className="how-to-action-wrapper">
            <div className="how-to-merge-pdf">How to convert Image to PDF</div>
            <div className="how-to-box">
                <div className="how-to-steps">
                    <div className="step-1">Step 1</div>
                    <div className="step-2">Step 2</div>
                    <div className="step-3">Step 3</div>
                </div>
                <div className="how-to-flow">
                    <div className="flow-box">
                        <div className="flow-box-1">
                            <div className="flow-circle-1 " />
                            <div className="flow-circle-2" />
                        </div>
                        <div className="line-4" />
                        <div className="flow-box-2">
                            <div className="flow-circle-3" />
                            <div className="flow-circle-4" />
                        </div>
                        <div className="line-5" />
                        <div className="flow-box-3">
                            <div className="flow-circle-5" />
                            <div className="flow-circle-6" />
                        </div>
                    </div>
                    <div className="frame-3048">
                        <div className="select-2-or-more-pdf-documents-to-upload-to-our-system">
                        Select one or more JPG images
                        </div>
                        <div className="upload-the-pdf-files-from-a-pc-or-smart-phone">
                        Upload to our servers for processing
                        </div>
                        <div className="download-your-new-pdf">Generate the PDF file and download with each image on a different page</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default SplitToPdfComponent;