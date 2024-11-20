export const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const createCartFetcher = (
  url: string,
  data: { slug: string; quantity: number; customerId: string }
) =>
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());

export const checkOutCartFetcher = async (url: string) => {
  const checkOut = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const response = await checkOut.json();
  return response;
};
