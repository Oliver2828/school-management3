import React from "react";

const StudentPromotion = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-xl font-bold mb-4">Search Student Promotion</h1>
        <form className="space-y-4">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Current Session *
              </label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              >
                <option>2017-2018</option>
                <option>2018-2019</option>
                <option>2019-2020</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Promote Session *
              </label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              >
                <option>2017-2018</option>
                <option>2018-2019</option>
                <option>2019-2020</option>
              </select>
            </div>
          </div>
          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Promotion From Class *
              </label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              >
                <option>Please Select</option>
                <option>Class 1</option>
                <option>Class 2</option>
                <option>Class 3</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Promotion To Class *
              </label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              >
                <option>Please Select</option>
                <option>Class 2</option>
                <option>Class 3</option>
                <option>Class 4</option>
              </select>
            </div>
          </div>
          {/* Action Buttons */}
          <div className="flex space-x-4 mt-4">
            <button
              type="submit"
              className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300"
            >
              Save
            </button>
            <button
              type="reset"
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-300"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentPromotion;
