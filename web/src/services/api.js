const sendEntryToApi = (data) => {
  
  return fetch('http://localhost:3000/create-entry', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  }).then((response) => response.json());
};

const getEntryFromApi = (entryId) => {
  console.log('Se están pidiendo datos de las entry nº:', entryId);
  return fetch('http://localhost:3000/get-entry', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', entry_id: entryId },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

const sendEditedEntryToApi = (entryId, data) => {
  console.log('Se están enviando datos al entry:', entryId, data);
  console.log(entryId);

  return fetch('http://localhost:3000/update-entry', {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      entry_id: entryId,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

const objToExport = {
  sendEntryToApi: sendEntryToApi,
  sendEditedEntryToApi: sendEditedEntryToApi,
  getEntryFromApi: getEntryFromApi,
};

export default objToExport;
