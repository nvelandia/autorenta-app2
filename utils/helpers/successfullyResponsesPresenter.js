class successfullyResponsesPresenter {
  listResponse = (type, items, data, message) => {
    return {
      type,
      [items]: data,
      message,
    };
  };
}

export default new successfullyResponsesPresenter();
