/**
 * Search & Recommendations API service — maps to SearchController.
 */
import api from '../api/axios';
import { fallbackRestaurants, fallbackFoods } from '../data/fallbackData';

const searchService = {
  /**
   * Search restaurants by keyword, minRating, with pagination.
   */
  searchRestaurants: (params = {}) =>
    api
      .get('/api/search/restaurants', { params })
      .then((r) => r.data)
      .catch((err) => {
        console.warn('Backend unavailable, using fallback restaurant search:', err.message);
        let list = [...fallbackRestaurants];
        if (params.keyword) {
          const kw = params.keyword.toLowerCase();
          list = list.filter(
            (r) =>
              r.name.toLowerCase().includes(kw) ||
              (r.description && r.description.toLowerCase().includes(kw)) ||
              (r.city && r.city.toLowerCase().includes(kw))
          );
        }
        if (params.minRating) {
          list = list.filter((r) => (r.averageRating || 0) >= Number(params.minRating));
        }
        return list;
      }),

  /**
   * Search food items with filters: keyword, category, veg, minPrice, maxPrice.
   */
  searchFoods: (params = {}) =>
    api
      .get('/api/search/foods', { params })
      .then((r) => r.data)
      .catch((err) => {
        console.warn('Backend unavailable, using fallback food search:', err.message);
        let list = [...fallbackFoods];
        if (params.keyword) {
          const kw = params.keyword.toLowerCase();
          list = list.filter((f) => f.name.toLowerCase().includes(kw) || (f.description && f.description.toLowerCase().includes(kw)));
        }
        if (params.category) {
          list = list.filter((f) => f.category && f.category.toUpperCase() === params.category.toUpperCase());
        }
        return list;
      }),

  /**
   * Get top-rated restaurants.
   */
  getTopRestaurants: (limit = 10) =>
    api
      .get('/api/recommendations/top-restaurants', { params: { limit } })
      .then((r) => r.data)
      .catch(() => fallbackRestaurants.slice(0, limit)),

  /**
   * Get trending (most ordered) food items.
   */
  getTrendingFoods: (limit = 10) =>
    api.get('/api/recommendations/trending-foods', { params: { limit } }).then((r) => r.data),
};

export default searchService;
