import { request } from './request-bootstrap';

export const getFilm = async (id) => {
  console.log(id)
  const response = await request({
    url: `films/${id}`,
    actionType: 'get'
  });
  return response;
}
