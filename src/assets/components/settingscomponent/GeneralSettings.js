import React from "react";

function GeneralSettings() {
    return (
        <>
        <div className="general-settings-container">
            <div className="language-region-title">Language &amp; Region</div>
                <div className="language-region-description">
                    Changes to your language and Time zone
                </div>
                <div className="language-section">
                    <div className="section-title">Language</div>
                        <select className="language-selection">
                            <option>English</option>
                            <option>French</option>
                            <option>German</option>
                            <option>Italian</option>
                        </select>
                    </div>
                <div className="timezone-section">
                    <div className="section-title">Time Zone</div>
                    <select className="timezone-selection">
                            <option>West Africa</option>
                            <option>America</option>
                            <option>Asia</option>
                            <option>Middle East</option>
                    </select>
                </div>
            </div>

        </>
    )
}

export default GeneralSettings;