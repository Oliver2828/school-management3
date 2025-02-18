import React, { useState, useEffect } from "react";
import axios from "axios";

function TeacherDetails() {
  const [teacherData, setTeacherData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchTeacherData = async () => {
      try {
        // Adjust this endpoint to your actual route, e.g. "/api/teacher/profile"
        const res = await axios.get("http://localhost:5000/api/teacher/profile", {
          headers: {
            Authorization: `Bearer ${token}`, // if your backend expects a Bearer token
          },
        });
        setTeacherData(res.data); // The response should have { firstName, lastName, address, phoneNumber, etc. }
      } catch (err) {
        console.error(err);
        setError("Failed to fetch teacher data.");
      }
    };

    fetchTeacherData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Teacher Details</h1>

      {/* Optional: Search Fields (placeholders) */}
      <div className="flex flex-wrap gap-2 mb-4">
        <input
          type="text"
          placeholder="Search by ID..."
          className="border rounded p-2"
        />
        <input
          type="text"
          placeholder="Search by Name..."
          className="border rounded p-2"
        />
        <input
          type="text"
          placeholder="Search by Subject..."
          className="border rounded p-2"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Search
        </button>
      </div>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Photo</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Gender</th>
              <th className="px-4 py-2 text-left">Subject</th>
              <th className="px-4 py-2 text-left">Address</th>
              <th className="px-4 py-2 text-left">Phone</th>
            </tr>
          </thead>
          <tbody>
            {teacherData ? (
              <tr className="border-b">
                {/* For now, ID is a placeholder (#T001). If your backend returns an actual ID, use that. */}
                <td className="px-4 py-2">#T001</td>

                {/* Photo is a placeholder. If your backend returns an image URL, use that instead. */}
                <td className="px-4 py-2">
                  <img
                    src="https://via.placeholder.com/50"
                    alt="Teacher"
                    className="rounded"
                  />
                </td>

                {/* Combine firstName and lastName from the fetched data */}
                <td className="px-4 py-2">
                  {teacherData.firstName} {teacherData.lastName}
                </td>

                {/* If your backend doesn't return gender, use "N/A" */}
                <td className="px-4 py-2">N/A</td>

                {/* If your backend doesn't return subject, use "N/A" */}
                <td className="px-4 py-2">N/A</td>

                <td className="px-4 py-2">{teacherData.address}</td>
                <td className="px-4 py-2">{teacherData.phoneNumber}</td>
              </tr>
            ) : (
              <tr>
                <td colSpan={7} className="px-4 py-2 text-center">
                  No teacher data found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TeacherDetails;
