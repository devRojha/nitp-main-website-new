import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const Memberships = ({ data }) => {

  const sortedMemberships = [...data].sort((a, b) => {
    const isAContinuing = a.end.toLowerCase() === "continue";
    const isBContinuing = b.end.toLowerCase() === "continue";
    
    if (isAContinuing && isBContinuing) {
      return new Date(b.start) - new Date(a.start); // Sort by start date if both are ongoing
    }
    if (isAContinuing) return 1; // Ongoing at the end
    if (isBContinuing) return -1;
    return new Date(a.end) - new Date(b.end); // Sort by end date
  });
  return (
    <div className="p-6 border border-indigo-600 rounded-lg text-black bg-indigo-100 shadow-lg">
      <h2 className="text-xl font-bold text-indigo-800 border-b-2 border-indigo-500 pb-2 mb-4">
        Memberships
      </h2>
      <ul className="space-y-4">
        {sortedMemberships.map((membership, index) => {
          const startDate = new Date(membership.start).toLocaleDateString();
          const endDate =
            membership.end.toLowerCase() === "continue"
              ? "Ongoing"
              : new Date(membership.end).toLocaleDateString();

          return (
            <li
              key={index}
              className="p-4 border border-gray-300 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform duration-300"
            >
              <h3 className="text-lg ">
                <span className="font-semibold text-indigo-700">
                  ID: {membership.membership_id}
                </span>{" "}
                - <span className="font-semibold text-black">{membership.membership_society}</span>
              </h3>
              <p className="text-gray-800 flex items-center">
                <FaCalendarAlt className="w-4 h-4 mr-2 text-gray-600" />
                {startDate} – {endDate}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Memberships;
