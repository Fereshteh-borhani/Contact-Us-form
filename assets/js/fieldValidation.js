let errorMessage = null;

const validateName = (data) => {
  errorMessage = "";
  const regex = /^[a-zA-Z\d_]{2,16}/;

  if (!data.length) {
    errorMessage = "1";
  } else {
    const result = regex.test(data);
    if (!result) {
      errorMessage = "2";
    }
  }
  return errorMessage;
};

const validateEmail = (data) => {
  errorMessage = "";
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!data.length) {
    errorMessage = "1";
  } else {
    const result = regex.test(data);
    if (!result) {
      errorMessage = "3";
    }
  }
  return errorMessage;
};

const validateMessage = (data) => {
  errorMessage = "";
  const regex = /^.{2,300}$/;

  if (!data.length) {
    errorMessage = "1";
  } else {
    const result = regex.test(data);
    if (!result) {
      errorMessage = "4";
    }
  }
  return errorMessage;
};
export { validateName, validateEmail, validateMessage };
