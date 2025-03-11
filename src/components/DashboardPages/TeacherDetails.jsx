import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

function TeacherDetails() {
  const [teacherData, setTeacherData] = useState(null);
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setError("No token found. Please log in.");
      return;
    }

    const fetchTeacherData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/teachers/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log("Teacher Data:", response.data);
        setTeacherData(response.data);
      } catch (err) {
        console.error("Error fetching teacher data:", err.response?.data || err.message);
        setError("Failed to fetch teacher data.");
      }
    };

    fetchTeacherData();
  }, []);

  const handleFileChange = async (event) => {
    const token = localStorage.getItem("token");
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("profilePic", file);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/teachers/updateProfilePic",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Profile picture updated:", response.data);
      setTeacherData((prevData) => ({
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
  if (!teacherData) return <p className="mt-4">Loading teacher details...</p>;

  const fullName = `${teacherData.firstName || ""} ${teacherData.lastName || ""}`.trim();
  const photoUrl = teacherData.photo
    ? `http://localhost:5000${teacherData.photo}`
    : "https://via.placeholder.com/150";

  return (
    <div className="p-6 bg-white shadow rounded-md max-w-xl mx-auto">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-700">Home &gt; Teacher Details</h2>
      </div>
      <h1 className="text-2xl font-bold mb-6">About Me</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0">
          <img
            src={photoUrl}
            alt="Teacher Avatar"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border border-gray-200"
          />
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
            Passionate about teaching and student development.
          </p>
          <div className="mt-4 space-y-2">
            <p className="font-medium">
              Name: <span className="text-gray-700">{fullName || "N/A"}</span>
            </p>
            <p className="font-medium">
              Gender: <span className="text-gray-700">{teacherData.gender || "N/A"}</span>
            </p>
            <p className="font-medium">
              Subject: <span className="text-gray-700">{teacherData.subject || "N/A"}</span>
            </p>
            <p className="font-medium">
              Address: <span className="text-gray-700">{teacherData.address || "N/A"}</span>
            </p>
            <p className="font-medium">
              Phone: <span className="text-gray-700">{teacherData.phone || "N/A"}</span>
            </p>
            <p className="font-medium">
              ID: <span className="text-gray-700">#{teacherData._id}</span>
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

export default TeacherDetails;
