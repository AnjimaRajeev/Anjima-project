// import React from 'react';

// const IndexPage = ({ userName, userPhoto }) => (
//   <div className="index-page">
//     <div className="greeting">
//       <h1>Hello, {userName}</h1>
//       <img src={userPhoto} alt="User" className="user-photo" />
//     </div>
//     {/* Add other modules/components as needed */}
//   </div>
// );

// export default IndexPage;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const IndexPage = ({ userName, userPhoto }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic (e.g., clear session, local storage, etc.)
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <div className="index-page">
      <div className="greeting">
        <h1>Hello, {userName}</h1>
        <img src={userPhoto} alt="User" className="user-photo" />
      </div>
      <button onClick={handleLogout} className="logout-btn">Logout</button>
      {/* Add other modules/components as needed */}
    </div>
  );
};

export default IndexPage;

