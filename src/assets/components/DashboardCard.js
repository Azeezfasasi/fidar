import React from "react";
import '../css/DashboardCard.css';
import document from '../images/document.svg';
import docu1 from '../images/docu1.svg';
import share from '../images/share.svg';
import person from '../images/person.svg';

function DashboardCard() {
    return (
        <>
        <div className="frame-512">
            <div className="frame-511">
                <div className="rectangle-24"></div>
                <div className="ellipse-148"></div>
                <div className="frame-3025"></div>
                <div className="received-files">Received Files</div>
                <div className="_2-580">2,580</div>
                <div className="pepicons-pencil-file">
                    <img className="group" src={document} />
                </div>
                <img className="bxs-file" src={docu1} />
            </div>
            <div className="frame-506">
                <div className="rectangle-25"></div>
                <div className="ellipse-1482"></div>
                <div className="pepicons-pencil-file2">
                <img className="group2" src={document} />
                </div>
                <div className="shared-files">Shared Files</div>
                <div className="_1-780">1,780</div>
                <img className="bxs-share" src={share} />
            </div>
            <div className="frame-506">
                <div className="rectangle-25"></div>
                <div className="ellipse-1482"></div>
                <div className="pepicons-pencil-file2">
                <img className="group2" src={document} />
                </div>
                <div className="shared-files">Members</div>
                <div className="_1-780">2,580</div>
                <img className="bxs-share" src={person} />
            </div>
        </div>
        </>
    )
}

export default DashboardCard;