import { request } from './request-bootstrap';

export const getFilms = async () => {
  const response = await request({
    url: `films`,
    actionType: 'get'
  });
  return response;
}
