import React from "react";

const PaperCard = ({ paper }) => {
  return (
    <div className="p-4 mb-2">
      <h2 className="text-xl underline font-semibold">{paper.Title}</h2>
      <p className="mt-2"><span className="font-semibold">Authors:</span> {paper.Authors.join(", ")}</p>
      <p className="mt-1"><span className="font-semibold">Year:</span> {paper.Publication_Year}</p>
      <p className="mt-1"><span className="font-semibold">Citations:</span> {paper.Citation}</p>
    </div>
  );
};

export default PaperCard;
