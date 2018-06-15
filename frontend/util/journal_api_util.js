export const fetchJournals = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/journals',
  });
};

export const fetchJournal = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/journals/${id}`,
  });
};

export const createJournal = (journal) => {
  return $.ajax({
    method: 'POST',
    url: 'api/journals',
    data: { journal },
  });
};

export const updateJournal = (journal) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/journals/${journal.id}`,
    data: { journal },
  });
};

export const deleteJournal = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/journals/${id}`,
  });
};
