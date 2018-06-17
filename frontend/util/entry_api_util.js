export const fetchEntries = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/entries',
  });
};

export const fetchEntry = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/entries/${id}`,
  });
};

export const createEntry = (entry) => {
  return $.ajax({
    method: 'POST',
    url: 'api/entries',
    data: { entry },
  });
};

export const updateEntry = (entry) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/entries/${entry.id}`,
    data: { entry },
  });
};

export const deleteEntry = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/entries/${id}`,
  });
};
