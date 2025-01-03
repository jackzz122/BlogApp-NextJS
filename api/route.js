const localHost = "http://localhost:3030";

export const blogListRoute = {
  get: localHost + "/blogs",
  post: localHost + "/blogs/add",
  details: localHost + "/blogs/",
};
export const emailRoute = {
  post: localHost + "/email/adds",
  send_mail: localHost + "/email/send_mail",
};
export const loginRoute = localHost + "/auth/login";
export const RegisterRoute = localHost + "/auth/register";
