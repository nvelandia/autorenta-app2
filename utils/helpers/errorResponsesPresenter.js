class errorResponsesPresenter {
  listError = (data, type) => {
    return {
      data,
      type,
    };
  };

  formError = (data, type) => {
    return {
      data,
      type,
    };
  };
}

export default new errorResponsesPresenter();
