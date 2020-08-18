class errorResponsesPresenter {
  listError = (data, status, body, type) => {
    return {
      data,
      status,
      body,
      type,
    };
  };

  formError = (data, status, body, type) => {
    return {
      data,
      status,
      body,
      type,
    };
  };
}

export default new errorResponsesPresenter();
