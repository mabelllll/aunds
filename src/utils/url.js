export const BASE_URL_API =
  process.env.WP_BACKEND_URL.slice(-1) === "/"
    ? `${process.env.WP_BACKEND_URL.slice(0, -1)}`
    : process.env.WP_BACKEND_URL;

export const getUrl = (v1) => {
  if (v1) {
    return `${BASE_URL_API}/wp-json/`;
  } else {
    return `${BASE_URL_API}/wp-json/wp/v2`;
  }
};

export const BASE_URL_V1 = `${BASE_URL_API}/wp-json/`;
export const BASE_URL_V3 = `${BASE_URL_API}/wp-json/acf/v3`;
export const BASE_URL = `${BASE_URL_API}/wp-json/wp/v2`;
