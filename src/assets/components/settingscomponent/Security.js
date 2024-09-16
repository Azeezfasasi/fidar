import React from "react";

function Security() {
    return (
        <>
        <div className="notification-title">Update your password</div>
        <div className="notification-sub-title">You can update your password below. If you forgot your current password please
        contact support for assistance.</div>

        <form>
            <input type="text" className="security-input" placeholder="Current passowrd" required/>
            <input type="text" className="security-input" placeholder="New passowrd" required/>
            <input type="text" className="security-input" placeholder="Confirm passowrd" required/>
            <button className="security-btn">
                <div className="save-changes">Save changes</div>
            </button>
        </form>

        </>
    )
}

export default Security;