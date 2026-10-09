/**
 * Food Item API service — maps to FoodItemController.
 */
import api from '../api/axios';
import { fallbackFoods } from '../data/fallbackData';

const URL = '/api/foods';

const foodService = {
  getAll: () =>
    api
      .get(URL)
      .then((r) => (Array.isArray(r.data) && r.data.length > 0 ? r.data : fallbackFoods))
      .catch((err) => {
        console.warn('Backend unavailable, using fallback foods:', err.message);
        return fallbackFoods;
      }),

  getById: (id) =>
    api
      .get(`${URL}/${id}`)
      .then((r) => r.data)
      .catch((err) => {
        console.warn(`Backend unavailable, using fallback food #${id}:`, err.message);
        return fallbackFoods.find((f) => String(f.id) === String(id)) || fallbackFoods[0];
      }),

  getByRestaurant: (restaurantId) =>
    api
      .get(`${URL}/restaurant/${restaurantId}`)
      .then((r) => (Array.isArray(r.data) && r.data.length > 0 ? r.data : fallbackFoods.filter((f) => String(f.restaurantId) === String(restaurantId))))
      .catch((err) => {
        console.warn(`Backend unavailable, using fallback foods for restaurant #${restaurantId}:`, err.message);
        return fallbackFoods.filter((f) => String(f.restaurantId) === String(restaurantId));
      }),

  create: (data) => api.post(URL, data).then((r) => r.data),

  update: (id, data) => api.put(`${URL}/${id}`, data).then((r) => r.data),

  delete: (id) => api.delete(`${URL}/${id}`),
};

export default foodService;
