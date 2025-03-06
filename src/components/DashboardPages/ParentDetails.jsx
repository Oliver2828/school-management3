import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

function ParentDetails() {
  const [parentData, setParentData] = useState(null);
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Token from localStorage:", token);

    if (!token) {
      setError("No token found. Please log in.");
      return;
    }

    const fetchParentData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/parents/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log("Parent Data:", response.data);
        setParentData(response.data);
      } catch (err) {
        console.error("Error fetching parent data:", err.response?.data || err.message);
        setError("Failed to fetch parent data.");
      }
    };

    fetchParentData();
  }, []);

  const handleFileChange = async (event) => {
    const token = localStorage.getItem("token");
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("profilePic", file);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/parents/updateProfilePic",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Profile picture updated:", response.data);
      // Update parent's photo field with the new photo URL returned by the server
      setParentData((prevData) => ({
        ...prevData,
        photo: response.data.photo,
      }));
    } catch (err) {
      console.error("Error updating profile picture:", err.response?.data || err.message);
      setError("Failed to update profile picture.");
    }
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  if (error) return <p className="text-red-500 mt-4">{error}</p>;
  if (!parentData) return <p className="mt-4">Loading parent details...</p>;

  const fullName = `${parentData.firstName || ""} ${parentData.lastName || ""}`.trim();
  const photoUrl = parentData.photo
    ? `http://localhost:5000${parentData.photo}`
    : "https://via.placeholder.com/150";

  return (
    <div className="p-6 bg-white shadow rounded-md max-w-xl mx-auto">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-700">Home &gt; Parent Details</h2>
      </div>
      <h1 className="text-2xl font-bold mb-6">About Me</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0">
          <img
            src={photoUrl}
            alt="Parent Avatar"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border border-gray-200"
          />
          {/* Hidden file input to choose new profile picture */}
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
            accept="image/*"
          />
        </div>
        <div className="flex-grow">
          <h2 className="text-2xl font-semibold mb-2">{fullName || "No Name Provided"}</h2>
          <p className="text-gray-500 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="mt-4 space-y-2">
            <p className="font-medium">
              Name: <span className="text-gray-700">{fullName || "N/A"}</span>
            </p>
            <p className="font-medium">
              Gender: <span className="text-gray-700">{parentData.gender || "N/A"}</span>
            </p>
            <p className="font-medium">
              Occupation: <span className="text-gray-700">{parentData.occupation || "N/A"}</span>
            </p>
            <p className="font-medium">
              iD: <span className="text-gray-700">#{parentData._id}</span>
            </p>
          </div>
          <button
            className="bg-blue-600 text-white px-4 py-2 mt-6 rounded hover:bg-blue-700"
            onClick={handleButtonClick}
          >
            Change Profile Pic
          </button>
        </div>
      </div>
    </div>
  );
}

export default ParentDetails;
