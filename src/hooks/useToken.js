export function useToken() {
  //   token = token ?? JSON.parse(token);
  let token = JSON.parse(localStorage.getItem("token"));
  return { token };
}
