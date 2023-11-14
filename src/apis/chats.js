const BASE_URL = "http://localhost:5000";

export const chatList = fetch(`${BASE_URL}/chats`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    return data;
  })
  .catch((err) => {
    console.error(err);
  });
