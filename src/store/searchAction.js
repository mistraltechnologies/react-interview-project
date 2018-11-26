const search = (term, history) => {
  return () => {
    const path = (term && term.length > 0) ? `/user/${term}` : "";
    history.push(path);
  }
};

export default search;