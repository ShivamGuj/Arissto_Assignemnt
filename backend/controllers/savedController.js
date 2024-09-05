let savedPapers = [];

const getSavedPapers = (req, res) => {
  res.json(savedPapers);
};

const savePaper = (req, res) => {
  //  console.log(req.body);
  const paper = req.body;
  savedPapers.push(paper);
  res.json(paper);
};

const removePaper = (req, res) => {
  const { id } = req.params;
  //  console.log(id);
  savedPapers.splice(id, 1);
  res.end();
};

module.exports = {
  getSavedPapers,
  savePaper,
  removePaper,
};
