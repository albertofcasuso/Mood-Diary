const sendEntryToApi = (data) => {
  return fetch('http://localhost:3000/create-entry', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  }).then((response) => response.json());
};

const objToExport = {
  sendEntryToApi: sendEntryToApi,
};

export default objToExport;
