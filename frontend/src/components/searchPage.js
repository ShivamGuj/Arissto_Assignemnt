import React, { useEffect, useState } from "react";
import axios from "axios";
import PaperCard from "./paperCard";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setFilteredData(data);
      });
  }, []);

  useEffect(() => {
    setFilteredData(
      data.filter((paper) =>
        paper.Title.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query,data]);

  const handleSave = async (paper) => {
    try {
      await axios.post("http://localhost:5000/save-paper", paper);
      alert("Paper saved successfully!");
    } catch (error) {
      alert("Failed to save paper. Please try again.");
      console.log(error);
    }
  };

  return (
    <div className="p-4 flex flex-col gap-2">
      <nav className="flex justify-between items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 w-[20vw] rounded"
          placeholder="Search for papers..."
        />
        <a
          href="/saved-papers"
          className="bg-blue-600 hover:bg-blue-500 text-white p-2 shadow rounded-lg"
        >
          Saved Papers
        </a>
      </nav>
      <div>
        <div className="p-2 grid grid-cols-2 gap-2">
          {filteredData.map((paper) => (
            <div className="bg-white p-2 rounded shadow-lg flex flex-col justify-center border">
              <PaperCard key={paper.id} paper={paper} />
              <div>
                <button
                  onClick={() => handleSave(paper)}
                  className="bg-green-600 hover:bg-green-500 text-white p-2 ml-2 rounded shadow"
                >
                  Save
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
