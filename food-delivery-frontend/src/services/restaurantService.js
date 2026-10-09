/**
 * Restaurant API service — maps to RestaurantController.
 */
import api from '../api/axios';
import { fallbackRestaurants } from '../data/fallbackData';

const URL = '/api/restaurants';

const restaurantService = {
  getAll: () =>
    api
      .get(URL)
      .then((r) => (Array.isArray(r.data) && r.data.length > 0 ? r.data : fallbackRestaurants))
      .catch((err) => {
        console.warn('Backend unavailable, using fallback restaurants:', err.message);
        return fallbackRestaurants;
      }),

  getById: (id) =>
    api
      .get(`${URL}/${id}`)
      .then((r) => r.data)
      .catch((err) => {
        console.warn(`Backend unavailable, using fallback restaurant #${id}:`, err.message);
        return fallbackRestaurants.find((r) => String(r.id) === String(id)) || fallbackRestaurants[0];
      }),

  create: (data) => api.post(URL, data).then((r) => r.data),

  update: (id, data) => api.put(`${URL}/${id}`, data).then((r) => r.data),

  delete: (id) => api.delete(`${URL}/${id}`),
};

export default restaurantService;
