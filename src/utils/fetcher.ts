import { ACCESS_TOKEN } from "./Constants";

export const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const createCartFetcher = (
  url: string,
  data: { slug: string; quantity: number; customerId: string }
) =>
  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
    },
  }).then((res) => res.json());

export const checkOutCartFetcher = async (url: string) => {
  const checkOut = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
    },
  });
  const response = await checkOut.json();
  return response;
};

export const fetcherGetCart = async (url: string) => {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access-token")}`,
    },
  });

  const data = await response.json();
  return data;
};

export const fetcherGetAuth = async (url: string) => {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access-token")}`,
    },
  });

  const data = await response.json();
  return data;
};

export const fetchDeleteCartItem = async (url: string, productId: string) => {
  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
    },
    body: JSON.stringify({ productId }),
  });

  const data = await response.json();
  return data;
};
