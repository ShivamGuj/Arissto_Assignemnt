import React, { useState, useEffect } from "react";
import axios from "axios";
import PaperCard from "./paperCard";

const SavedPapersPage = () => {
  const [savedPapers, setSavedPapers] = useState([]);

  useEffect(() => {
    const fetchSavedPapers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/saved-papers");
        setSavedPapers(response.data);
      } catch (error) {
        console.error("Failed to fetch saved papers:", error);
      }
    };
    fetchSavedPapers();
  }, []);

  const handleRemove = async (id) => {
    await axios.delete(`http://localhost:5000/remove-paper/${id}`);
    alert("Paper removed successfully!");
    window.location.reload();
  };

  return (
    <div className="p-4">
      <nav>
        <a
          href="/"
          className="bg-blue-600 hover:bg-blue-500 text-white p-2 rounded-lg shadow"
        >
          Back to Search
        </a>
      </nav>
      {savedPapers.length > 0 ? (
        <div className="p-2 grid grid-cols-2 gap-2 mt-4">
          {savedPapers.map((paper, index) => (
            <div
              key={index}
              className="bg-white p-2 rounded shadow-lg flex flex-col justify-center border"
            >
              <PaperCard paper={paper} />
              <div className="mt-2">
                <button
                  onClick={() => handleRemove(index)}
                  className="bg-red-600 hover:bg-red-500 text-white p-2 rounded shadow"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-10 text-red-600 underline text-lg font-semibold">
          No saved papers found!!
        </p>
      )}
    </div>
  );
};

export default SavedPapersPage;
