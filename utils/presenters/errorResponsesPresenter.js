class errorResponsesPresenter {
  listError = (data, type) => {
    return {
      data,
      type,
      error: true,
    };
  };

  formError = (data, type) => {
    return {
      data,
      type,
      error: true,
    };
  };

  onlyMessage = (message, type) => {
    return {
      type,
      message,
      error: true,
    };
  };
}

export default new errorResponsesPresenter();
