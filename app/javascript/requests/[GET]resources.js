import { request } from './request-bootstrap';

const getResources = async (url) => {
  const response = await request({
    url: url,
    actionType: 'get'
  });
  return response;
}

export default getResources;
