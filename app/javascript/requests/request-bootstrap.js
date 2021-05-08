import axios from 'axios';

class RequestError extends Error {
  constructor(errors, ...params) {
    super(...params);
    this.name = 'RequestError'
    this.message = `${errors.join(' ')}`;
    this.messages = errors;
    this.date = new Date();
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, RequestError)
    }
  }
}

axios.defaults.baseURL = `${window.location.origin}/api`;
axios.interceptors.response.use(undefined, function resolveError(error) {
  const errors = [];
  if (error.response.data) {
    error.response.data?.errors?.forEach((error) => {
      errors.push(error)
    })
  }
  return Promise.reject(new RequestError(errors));
})

export const request = async (info) => {
  try {
    // const credentials = { withCredentials: true };
    const axiosArgs = info.data ? [info.url, info.data] : [info.url]
    const response = await axios[info.actionType].apply(this, axiosArgs);
    console.log('bootrsap', response.data)
    return response.data;
  } catch (error) {
    if (!error.response) throw error;
    return error.response.data;
  }
}

//return normalize(response.data[Array.isArray(entity) ? 'entities' : 'entity'], entity)
