import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
    // useState hook to manage the visibility of the confirmation dialog
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();

  // Function to toggle the confirmation dialog
  const handleLogoutClick = () => {
    setShowConfirmation(true);
  };

  // Function to handle the "Yes" option
  const confirmLogout = () => {
    // Perform the logout action here
    console.log("User logged out.");
    setShowConfirmation(false);
    navigate("/");
  };


  // Function to handle the "No" option
  const cancelLogout = () => {
    setShowConfirmation(false);
  };

    return (
        <>
        <div>
            <button onClick={handleLogoutClick}>Log Out</button>

            {showConfirmation && (
                <div className="confirmation-dialog">
                <p>Are you sure you want to log out?</p>
                <button onClick={confirmLogout}>Yes</button>
                <button onClick={cancelLogout}>No</button>
                </div>
            )}
        </div>
        </>
    )
}

export default Logout;