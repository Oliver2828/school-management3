import React, { useState, useEffect } from "react";
import axios from "axios";

function StudentDetails() {
  const [studentData, setStudentData] = useState(null);
  const [error, setError] = useState("");
  const [newPicture, setNewPicture] = useState(null);
  const [uploadError, setUploadError] = useState("");
  const [uploadSuccess, setUploadSuccess] = useState("");
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

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

  const handlePictureChange = (e) => {
    setNewPicture(e.target.files[0]);
    setUploadError("");
    setUploadSuccess("");
  };

  const handlePictureUpload = async () => {
    if (!newPicture) {
      setUploadError("Please select a picture to upload.");
      return;
    }
    setUploading(true);
    setUploadError("");
    setUploadSuccess("");

    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("profilePic", newPicture);

    try {
      // Replace the endpoint with your actual update picture endpoint.
      const res = await axios.post("http://localhost:5000/api/auth/student/updateProfilePic", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      // Assume the server returns the new photo URL in res.data.photo
      setStudentData({ ...studentData, photo: res.data.photo });
      setUploadSuccess("Profile picture updated successfully!");
    } catch (err) {
      console.error(err);
      setUploadError("Failed to update profile picture.");
    }
    setUploading(false);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Student Details</h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {studentData ? (
        <>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="px-4 py-2 text-left">Unique ID</th>
                  <th className="px-4 py-2 text-left">Photo</th>
                  <th className="px-4 py-2 text-left">Name</th>
                  <th className="px-4 py-2 text-left">Gender</th>
                  <th className="px-4 py-2 text-left">Class</th>
                  <th className="px-4 py-2 text-left">Section</th>
                  <th className="px-4 py-2 text-left">Address</th>
                  <th className="px-4 py-2 text-left">Phone</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-2">{studentData.studentId || "N/A"}</td>
                  <td className="px-4 py-2">
                    <img
                      src={
                        studentData.photo
                          ? `http://localhost:5000${studentData.photo}`
                          : "https://via.placeholder.com/50"
                      }
                      alt="Student"
                      className="rounded w-16 h-16 object-cover"
                    />
                  </td>
                  <td className="px-4 py-2">
                    {studentData.firstName} {studentData.lastName}
                  </td>
                  <td className="px-4 py-2">{studentData.gender || "N/A"}</td>
                  <td className="px-4 py-2">{studentData.studentClass || "N/A"}</td>
                  <td className="px-4 py-2">N/A</td>
                  <td className="px-4 py-2">{studentData.address}</td>
                  <td className="px-4 py-2">{studentData.phoneNumber}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Section to update profile picture */}
          <div className="mt-4">
            <h2 className="text-xl font-semibold mb-2">Change Profile Picture</h2>
            <input type="file" accept="image/*" onChange={handlePictureChange} />
            <button
              onClick={handlePictureUpload}
              disabled={uploading}
              className="ml-4 bg-blue-500 text-white px-3 py-1 rounded"
            >
              {uploading ? "Uploading..." : "Upload New Picture"}
            </button>
            {uploadError && <p className="text-red-500 mt-2">{uploadError}</p>}
            {uploadSuccess && <p className="text-green-500 mt-2">{uploadSuccess}</p>}
          </div>
        </>
      ) : (
        <div className="text-center p-4">No student data found.</div>
      )}
    </div>
  );
}

export default StudentDetails;
