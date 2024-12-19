import React from "react";

const AllTeachers = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-xl font-bold mb-4">All Teachers Data</h1>
        
        {/* Search Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <input
            type="text"
            placeholder="Search by ID ..."
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
          />
          <input
            type="text"
            placeholder="Search by Name ..."
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
          />
          <input
            type="text"
            placeholder="Search by Phone ..."
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
          />
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300">
            SEARCH
          </button>
        </div>
        
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-300 px-4 py-2">ID</th>
                <th className="border border-gray-300 px-4 py-2">Photo</th>
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Gender</th>
                <th className="border border-gray-300 px-4 py-2">Class</th>
                <th className="border border-gray-300 px-4 py-2">Subject</th>
                <th className="border border-gray-300 px-4 py-2">Section</th>
                <th className="border border-gray-300 px-4 py-2">Address</th>
                <th className="border border-gray-300 px-4 py-2">Phone</th>
              </tr>
            </thead>
            <tbody>
              {/* Example Data Rows */}
              {[
                {
                  id: "#0021",
                  photo: "https://via.placeholder.com/30",
                  name: "Mark Willy",
                  gender: "Male",
                  class: "2",
                  subject: "English",
                  section: "A",
                  address: "TA-107 Newyork",
                  phone: "+123 9988568",
                },
                {
                  id: "#0022",
                  photo: "https://via.placeholder.com/30",
                  name: "Jessia Rose",
                  gender: "Female",
                  class: "1",
                  subject: "Mathematics",
                  section: "A",
                  address: "59 Australia, Sydney",
                  phone: "+123 9988568",
                },
              ].map((teacher, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">{teacher.id}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <img
                      src={teacher.photo}
                      alt="Teacher"
                      className="h-8 w-8 rounded-full mx-auto"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">{teacher.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{teacher.gender}</td>
                  <td className="border border-gray-300 px-4 py-2">{teacher.class}</td>
                  <td className="border border-gray-300 px-4 py-2">{teacher.subject}</td>
                  <td className="border border-gray-300 px-4 py-2">{teacher.section}</td>
                  <td className="border border-gray-300 px-4 py-2">{teacher.address}</td>
                  <td className="border border-gray-300 px-4 py-2">{teacher.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllTeachers;
