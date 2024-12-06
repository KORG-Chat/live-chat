import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { chatbubbleEllipsesOutline, personCircleOutline, settingsOutline, logOutOutline, addCircleOutline } from "ionicons/icons";

export default function Navbar() {
  const navigate = useNavigate();

  async function handleLogout() {
    localStorage.clear();
    navigate(`/login`);
  }

  return (
    <nav className="bg-gradient-to-r from-rose-100 to-teal-100 shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img src="/roundedLogo.png" alt="Connectly" className="w-8 h-8" />
              <span className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">Connectly</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/createroom" className="px-4 py-2 rounded-full bg-violet-100 text-violet-600 hover:bg-violet-200 transition duration-300 flex items-center space-x-2">
              <IonIcon icon={addCircleOutline} className="h-5 w-5" />
              <span>Create Room</span>
            </Link>
            <button 
              onClick={handleLogout} 
              className="flex items-center space-x-2 focus:outline-none"
            >
              <IonIcon 
                icon={logOutOutline} 
                className="h-8 w-8 text-violet-600 hover:text-violet-700 transition duration-300" 
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
