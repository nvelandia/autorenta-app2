class errorResponsesPresenter {
  listError = (data, type) => {
    return {
      data,
      type,
      error: true,
    };
  };

  formError = (data, type) => {
    if (Object.keys(data).length !== 1) {
      let fullMessage = '';
      for (const field in data) {
        for (const message of data[field]) {
          fullMessage = fullMessage ? `${fullMessage}\n${message}` : message;
        }
      }
      return {
        message: fullMessage,
        type,
        error: true,
      };
    }
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

  onlyMessageAndCode = (message, type, code) => {
    return {
      type,
      message,
      error: true,
      code,
    };
  };
}

export default new errorResponsesPresenter();
