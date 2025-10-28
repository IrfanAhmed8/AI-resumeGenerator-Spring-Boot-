import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import profileImg from "../assets/profileImage.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  const { userName, setUserName } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUserName("");
    localStorage.removeItem("userName");
    window.location.reload();
  };

  const SignOut = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <div className="navbar bg-white shadow-md px-6 py-3 sticky top-0 z-50 backdrop-blur-lg">
      {/* 🌟 Logo Section */}
      <div className="flex-1">
        <motion.a
          onClick={() => navigate("/")}
          className="relative cursor-pointer text-3xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent select-none inline-block"
          whileHover={{
            scale: 1.15,
            rotate: 1,
            textShadow: "0px 0px 8px rgba(59,130,246,0.6)",
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* ✨ Shimmer effect */}
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0"
            initial={{ x: "-100%", opacity: 0 }}
            whileHover={{
              x: "100%",
              opacity: 1,
              transition: {
                duration: 1.2,
                ease: "easeInOut",
                repeat: 0,
              },
            }}
            style={{
              WebkitMaskImage:
                "linear-gradient(90deg, transparent, black, transparent)",
              maskImage:
                "linear-gradient(90deg, transparent, black, transparent)",
            }}
          />
          Resume<span className="text-blue-700">In</span>Qlik
        </motion.a>
      </div>

      {/* 👤 User / Auth Section */}
      <div className="flex items-center gap-4">
        {userName ? (
          <>
            <motion.span
              className="text-blue-700 font-semibold tracking-wide"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              Hi,&nbsp;{userName}
            </motion.span>

            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar hover:scale-105 transition-transform"
              >
                <div className="w-10 rounded-full ring ring-blue-400 ring-offset-2">
                  <img alt="Profile" src={profileImg} />
                </div>
              </div>

              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a onClick={() => navigate("/profile")}>Profile</a>
                </li>
                <li onClick={SignOut}>
                  <a>Sign Out</a>
                </li>
                <li>
                  <a onClick={handleLogout}>Logout</a>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <motion.button
            onClick={() => navigate("/login")}
            className="btn btn-outline btn-primary rounded-full px-5 font-medium hover:bg-blue-600 hover:text-white transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sign In
          </motion.button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
