let notes;

function getData() {
  if (!notes) {
    notes = new Array(15).fill(1).map((_, i) => ({
      id: i,
      title: `Note ${i}`,
    }));
  }

  return notes;
}
module.exports = getData();
