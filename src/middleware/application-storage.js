function getAccessToken(userId) {
  return localStorage.getItem(userId);
}

function getProviderId(providerId) {
  debugger;
  return localStorage.getItem(providerId);
}
export default {
  getAccessToken,
  getProviderId,
};
