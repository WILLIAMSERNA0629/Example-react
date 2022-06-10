const API_URL = "https://coding-challenge-api.aerolab.co";
const HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGZmNjE3NDY3Mjk2ZTAwMTk5NjQxNDgiLCJpYXQiOjE2MjczNDkzNjR9.RXl7IBspfCgl_O49ryUTUo57QYHpKi6ZQjTXRJSzEJg",
};
const optionsGet = {
  method: "GET",
  headers: HEADERS,
  redirect: "follow",
};

export const getProducts = async()=>{
    const response = await fetch(`${API_URL}/user/history`, optionsGet);
    const data = await response.json();
    return data;
};