export function getAuthFromLocal() {
  return typeof window !== "undefined"
    ? window.sessionStorage.getItem("token")
    : null;
}
