import React from "react";

const StudentDetails = () => {
  const students = [
    {
      roll: "#0021",
      photo: "https://via.placeholder.com/40",
      name: "Mark Willy",
      gender: "Male",
      class: "2",
      section: "A",
      parents: "Jack Sparrow",
      address: "TA-107 NewYork",
      dob: "02/05/2001",
    },
    {
      roll: "#0022",
      photo: "https://via.placeholder.com/40",
      name: "Jessia Rose",
      gender: "Female",
      class: "1",
      section: "A",
      parents: "Maria Jamans",
      address: "59 Australia, Sydney",
      dob: "02/05/2001",
    },
    {
      roll: "#0021",
      photo: "https://via.placeholder.com/40",
      name: "Mark Willy",
      gender: "Male",
      class: "2",
      section: "A",
      parents: "Jack Sparrow",
      address: "TA-107 NewYork",
      dob: "02/05/2001",
    },
    {
      roll: "#0022",
      photo: "https://via.placeholder.com/40",
      name: "Jessia Rose",
      gender: "Female",
      class: "1",
      section: "A",
      parents: "Maria Jamans",
      address: "59 Australia, Sydney",
      dob: "02/05/2001",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Student Details</h1>
      <p className="mb-6">Here you can view detailed information about individual students.</p>

      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border border-gray-300">Select</th>
              <th className="p-2 border border-gray-300">Roll</th>
              <th className="p-2 border border-gray-300">Photo</th>
              <th className="p-2 border border-gray-300">Name</th>
              <th className="p-2 border border-gray-300">Gender</th>
              <th className="p-2 border border-gray-300">Class</th>
              <th className="p-2 border border-gray-300">Section</th>
              <th className="p-2 border border-gray-300">Parents</th>
              <th className="p-2 border border-gray-300">Address</th>
              <th className="p-2 border border-gray-300">Date of Birth</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index} className="even:bg-gray-100">
                <td className="p-2 text-center border border-gray-300">
                  <input type="checkbox" />
                </td>
                <td className="p-2 border border-gray-300">{student.roll}</td>
                <td className="p-2 border border-gray-300">
                  <img
                    src={student.photo}
                    alt="student"
                    className="rounded-full w-10 h-10"
                  />
                </td>
                <td className="p-2 border border-gray-300">{student.name}</td>
                <td className="p-2 border border-gray-300">{student.gender}</td>
                <td className="p-2 border border-gray-300">{student.class}</td>
                <td className="p-2 border border-gray-300">{student.section}</td>
                <td className="p-2 border border-gray-300">{student.parents}</td>
                <td className="p-2 border border-gray-300">{student.address}</td>
                <td className="p-2 border border-gray-300">{student.dob}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentDetails;
