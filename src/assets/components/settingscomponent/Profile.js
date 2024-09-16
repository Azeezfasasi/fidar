import React from "react";
import profileimage from '../../images/profileimage.svg'

function Profile() {
    return (
        <>
        <div className="profile-title">Avatar</div>
        <div
        className="profile-sub-title"
        >
        Update your avatar by clicking the image below. 288x288 px size recommended in
        PNG or JPG format only.
        </div>
        
        <form>
        <div className="profile-image">
            <div className="profile-icon-wrapper">
                <img className="profile-icon" src={profileimage} />
                <input type="file" />
            </div>
        </div>
            <input type="text" className="security-input" placeholder="First name" required/>
            <input type="text" className="security-input" placeholder="Last Name" required/>
            <input type="text" className="security-input" placeholder="Email Address" required/>
            <button type="submit" className="security-btn">
                <div className="save-changes">Save changes</div>
            </button>
        </form>
        </>
    )
}

export default Profile;