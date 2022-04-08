const callToApi = (data) => {
  // Llamamos al API
  return fetch('').then((response) => response.json());
};

export default callToApi;
