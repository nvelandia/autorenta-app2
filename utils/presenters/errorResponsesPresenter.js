class errorResponsesPresenter {
  listError = (data, type) => {
    return {
      data,
      type,
      error: true,
    };
  };

  formError = (data, type) => {
    console.log(data);
    if (Object.keys(data).length !== 1) {
      let fullMessage = '';
      for (const field in data) {
        for (const message of data[field]) {
          console.log(fullMessage);
          fullMessage = fullMessage ? `${fullMessage}\n${message}` : message;
        }
      }
      return {
        message: fullMessage,
        type,
        error: true,
      };
    }
    console.log(data.message);
    return {
      message: data.message,
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
