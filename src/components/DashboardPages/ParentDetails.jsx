import React, { useState, useEffect } from "react";
import axios from "axios";

function ParentDetails() {
  const [parentData, setParentData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchParentData = async () => {
      try {
        // Adjust the URL below to match your backend endpoint.
        const response = await axios.get("http://localhost:5000/api/parent/profile", {
          headers: {
            Authorization: `Bearer ${token}`, // If your API uses Bearer token authentication
          },
        });
        setParentData(response.data); // Expected to return parent's details as JSON
      } catch (err) {
        console.error(err);
        setError("Failed to fetch parent data.");
      }
    };

    fetchParentData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Parent Details</h1>

      {/* Optional Search Fields (placeholders) */}
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
          placeholder="Search by Child Name..."
          className="border rounded p-2"
        />
        <input
          type="text"
          placeholder="Search by Phone..."
          className="border rounded p-2"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Search
        </button>
      </div>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {/* Table displaying parent's details */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Photo</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Gender</th>
              <th className="px-4 py-2 text-left">Child Name</th>
              <th className="px-4 py-2 text-left">Class</th>
              <th className="px-4 py-2 text-left">Section</th>
              <th className="px-4 py-2 text-left">Address</th>
              <th className="px-4 py-2 text-left">Phone</th>
            </tr>
          </thead>
          <tbody>
            {parentData ? (
              <tr className="border-b">
                {/* If your backend returns an ID, replace "#P001" with that */}
                <td className="px-4 py-2">#P001</td>
                <td className="px-4 py-2">
                  {/* Placeholder image – replace with actual image URL if available */}
                  <img
                    src="https://via.placeholder.com/50"
                    alt="Parent"
                    className="rounded"
                  />
                </td>
                <td className="px-4 py-2">
                  {parentData.firstName} {parentData.lastName}
                </td>
                {/* If gender, child name, class, or section are not provided, display "N/A" */}
                <td className="px-4 py-2">N/A</td>
                <td className="px-4 py-2">N/A</td>
                <td className="px-4 py-2">N/A</td>
                <td className="px-4 py-2">N/A</td>
                <td className="px-4 py-2">{parentData.address}</td>
                <td className="px-4 py-2">{parentData.phoneNumber}</td>
              </tr>
            ) : (
              <tr>
                <td colSpan={9} className="px-4 py-2 text-center">
                  No parent data found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ParentDetails;
