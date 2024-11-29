import { ACCESS_TOKEN } from "./Constants";

const useAuth = async () => {
  const response = await fetch("http://localhost:3000/api/auth", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
    },
  });
  return response;
};

export default useAuth;
