import axios from 'axios';

export const baseURL =
  process.env.NODE_ENV === 'development'
    ? 'https://api.github.com/users'
    : process.env.REACT_APP_GITHUB_API;

const Client = axios.create({
  baseURL
});

//headers
const config = () => {
  return {
    headers: {
      Accept: "application/vnd.github.v3+json"
    }
  };
};


// GET action
const get = async url => {
  try {
    const response = await Client.get(url, config);
    return response;
  } catch (err) {
    console.error({ err });
    throw err.response.data;
  }
};

export { get };
