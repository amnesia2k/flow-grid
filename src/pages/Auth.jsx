import * as React from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Auth() {
  const { type } = useParams();
  const navigate = useNavigate();

  const handleStatus = () => {
    navigate(type === "sign-up" ? "/auth/sign-in" : "/auth/sign-up");
  };

  return (
    <div>
      {type === "sign-up" ? (
        <div>
          <h3>Sign Up</h3>
          <button onClick={handleStatus} className="cursor-pointer">
            Sign In
          </button>
        </div>
      ) : (
        <div>
          <h3>Sign In</h3>
          <button onClick={handleStatus} className="cursor-pointer">
            Sign Up
          </button>
        </div>
      )}
    </div>
  );
}
