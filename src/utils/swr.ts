import useSWR from "swr";

export function useProducts(url: string) {
  const { data, error, isLoading } = useSWR(url);

  return {
    data,
    isLoading,
    error,
  };
}

// export const fetcher = (...args:any) => fetch(...args:).then(res => res.json())
