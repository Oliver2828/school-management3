import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

function StudentDetails() {
  const [studentData, setStudentData] = useState(null);
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setError("No token found. Please log in.");
      return;
    }

    const fetchStudentData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/auth/student/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log("Fetched student data:", res.data);
        setStudentData(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch student data.");
      }
    };

    fetchStudentData();
  }, []);

  const handleFileChange = async (event) => {
    const token = localStorage.getItem("token");
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("profilePic", file);

    try {
      const res = await axios.post("http://localhost:5000/api/auth/student/updateProfilePic", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      setStudentData((prevData) => ({
        ...prevData,
        photo: res.data.photo,
      }));
    } catch (err) {
      console.error(err);
      setError("Failed to update profile picture.");
    }
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  if (error) return <p className="text-red-500 mt-4">{error}</p>;
  if (!studentData) return <p className="mt-4">Loading student details...</p>;

  const fullName = `${studentData.firstName || ""} ${studentData.lastName || ""}`.trim();
  const photoUrl = studentData.photo
    ? `http://localhost:5000${studentData.photo}`
    : "https://via.placeholder.com/150";

  return (
    <div className="p-6 bg-white shadow rounded-md max-w-xl mx-auto">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-700">Home &gt; Student Details</h2>
      </div>
      <h1 className="text-2xl font-bold mb-6">About Me</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0">
          <img
            src={photoUrl}
            alt="Student Avatar"
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
            Dedicated student striving for excellence.
          </p>
          <div className="mt-4 space-y-2">
            <p className="font-medium">
              Student ID: <span className="text-gray-700">#{studentData.studentId || "N/A"}</span>
            </p>
            <p className="font-medium">
              Name: <span className="text-gray-700">{fullName || "N/A"}</span>
            </p>
            <p className="font-medium">
              Gender: <span className="text-gray-700">{studentData.gender || "N/A"}</span>
            </p>
            <p className="font-medium">
              Class: <span className="text-gray-700">{studentData.studentClass || "N/A"}</span>
            </p>
            <p className="font-medium">
              Section: <span className="text-gray-700">{studentData.section || "N/A"}</span>
            </p>
            <p className="font-medium">
              Address: <span className="text-gray-700">{studentData.address || "N/A"}</span>
            </p>
            <p className="font-medium">
              Phone: <span className="text-gray-700">{studentData.phoneNumber || "N/A"}</span>
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

export default StudentDetails;
