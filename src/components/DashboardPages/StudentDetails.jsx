import React, { useState, useEffect } from "react";
import axios from "axios";

function StudentDetails() {
  const [studentData, setStudentData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchStudentData = async () => {
      try {
        // Adjust this endpoint to your actual route, e.g. "/api/student/profile"
        const res = await axios.get("http://localhost:5000/api/student/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setStudentData(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch student data.");
      }
    };

    fetchStudentData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Student Details</h1>

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
          placeholder="Search by Class..."
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
              <th className="px-4 py-2 text-left">Class</th>
              <th className="px-4 py-2 text-left">Section</th>
              <th className="px-4 py-2 text-left">Address</th>
              <th className="px-4 py-2 text-left">Phone</th>
            </tr>
          </thead>
          <tbody>
            {studentData ? (
              <tr className="border-b">
                {/* For now, ID is a placeholder (#S001). If your backend returns an actual ID, use that. */}
                <td className="px-4 py-2">#S001</td>

                {/* Photo is a placeholder */}
                <td className="px-4 py-2">
                  <img
                    src="https://via.placeholder.com/50"
                    alt="Student"
                    className="rounded"
                  />
                </td>

                {/* Combine firstName and lastName from the fetched data */}
                <td className="px-4 py-2">
                  {studentData.firstName} {studentData.lastName}
                </td>

                {/* If your backend doesn't return gender, use "N/A" */}
                <td className="px-4 py-2">N/A</td>

                {/* If your backend doesn't return class, use "N/A" */}
                <td className="px-4 py-2">N/A</td>

                {/* If your backend doesn't return section, use "N/A" */}
                <td className="px-4 py-2">N/A</td>

                <td className="px-4 py-2">{studentData.address}</td>
                <td className="px-4 py-2">{studentData.phoneNumber}</td>
              </tr>
            ) : (
              <tr>
                <td colSpan={8} className="px-4 py-2 text-center">
                  No student data found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentDetails;
