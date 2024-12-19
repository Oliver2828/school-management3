import React from "react";

const AllParents = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">All Parents Data</h1>
        
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
                <th className="border border-gray-300 px-4 py-2">Child Name</th>
                <th className="border border-gray-300 px-4 py-2">Class</th>
                <th className="border border-gray-300 px-4 py-2">Section</th>
                <th className="border border-gray-300 px-4 py-2">Address</th>
                <th className="border border-gray-300 px-4 py-2">Phone</th>
              </tr>
            </thead>
            <tbody>
              {/* Example Data Rows */}
              {[
                {
                  id: "#P001",
                  photo: "https://via.placeholder.com/30",
                  name: "John Smith",
                  gender: "Male",
                  childName: "Anna Smith",
                  class: "2",
                  section: "A",
                  address: "34 High Street, London",
                  phone: "+123 9988568",
                },
                {
                  id: "#P002",
                  photo: "https://via.placeholder.com/30",
                  name: "Mary Johnson",
                  gender: "Female",
                  childName: "Tom Johnson",
                  class: "1",
                  section: "B",
                  address: "59 Sydney Road, Australia",
                  phone: "+987 6543210",
                },
                {
                  id: "#P003",
                  photo: "https://via.placeholder.com/30",
                  name: "Paul Walker",
                  gender: "Male",
                  childName: "Liam Walker",
                  class: "3",
                  section: "C",
                  address: "22 Baker Street, NY",
                  phone: "+345 1234567",
                },
              ].map((parent, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">{parent.id}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <img
                      src={parent.photo}
                      alt="Parent"
                      className="h-8 w-8 rounded-full mx-auto"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">{parent.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{parent.gender}</td>
                  <td className="border border-gray-300 px-4 py-2">{parent.childName}</td>
                  <td className="border border-gray-300 px-4 py-2">{parent.class}</td>
                  <td className="border border-gray-300 px-4 py-2">{parent.section}</td>
                  <td className="border border-gray-300 px-4 py-2">{parent.address}</td>
                  <td className="border border-gray-300 px-4 py-2">{parent.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllParents;
