import React from "react";
import '../css/RecentFiles.css';
import recentavatar from '../images/recentavatar.svg';
import recentstar from '../images/recentstar.svg';

function RecentFiles() {
    return (
        <>
        <div className="recent-files">Recent Files</div>
        <div className="frame-65">
            <div className="frame-3033">
                <div className="check-box">
                    <input type="checkbox" className="check-boxt" />
                </div>
                <div className="username">Username</div>
            </div>
            <div className="description">Description</div>
        </div>
        {/* row 1 */}
        <div className="frame-3034">
            <div className="frame-69">
                <div className="frame-61">
                    <div className="check-box">
                        <input type="checkbox" className="rectangle-3036" />
                    </div>
                    <img className="star-4" src={recentstar} />
                    <div className="frame-60">
                        <img className="avatar-8" src={recentavatar} />
                        <div className="group-1892">
                            <div className="fd-2481-41-b">FD-2481-41B</div>
                            <div className="tom-hanks">Tom hanks</div>
                        </div>
                    </div>
                </div>
                <div className="frame-59">
                    <div className="subject-statement-of-account">
                        Subject: Statement of Account
                    </div>
                    <div className="frame-58">
                        <div className="tom-hanks-statement-of-account">
                        Tom hanks Statement of account
                        </div>
                    </div>
                </div>
                <div className="_4-47-pm">4:47 PM</div>
            </div>
        </div>

        {/* row 2 */}
        <div className="frame-3034">
            <div className="frame-69">
                <div className="frame-61">
                    <div className="check-box">
                        <input type="checkbox" className="rectangle-3036" />
                    </div>
                    <img className="star-4" src={recentstar} />
                    <div className="frame-60">
                        <img className="avatar-8" src={recentavatar} />
                        <div className="group-1892">
                            <div className="fd-2481-41-b">FD-2481-41B</div>
                            <div className="tom-hanks">Tom hanks</div>
                        </div>
                    </div>
                </div>
                <div className="frame-59">
                    <div className="subject-statement-of-account">
                        Subject: Statement of Account
                    </div>
                    <div className="frame-58">
                        <div className="tom-hanks-statement-of-account">
                        Tom hanks Statement of account
                        </div>
                    </div>
                </div>
                <div className="_4-47-pm">4:47 PM</div>
            </div>
        </div>

        {/* row 3 */}
        <div className="frame-3034">
            <div className="frame-69">
                <div className="frame-61">
                    <div className="check-box">
                        <input type="checkbox" className="rectangle-3036" />
                    </div>
                    <img className="star-4" src={recentstar} />
                    <div className="frame-60">
                        <img className="avatar-8" src={recentavatar} />
                        <div className="group-1892">
                            <div className="fd-2481-41-b">FD-2481-41B</div>
                            <div className="tom-hanks">Tom hanks</div>
                        </div>
                    </div>
                </div>
                <div className="frame-59">
                    <div className="subject-statement-of-account">
                        Subject: Statement of Account
                    </div>
                    <div className="frame-58">
                        <div className="tom-hanks-statement-of-account">
                        Tom hanks Statement of account
                        </div>
                    </div>
                </div>
                <div className="_4-47-pm">4:47 PM</div>
            </div>
        </div>

        </>
    )
}

export default RecentFiles;