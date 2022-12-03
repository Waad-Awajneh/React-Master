export const LoginPostConfig = {
  method: "post",
  url: "http://localhost:8000/api/login",
  headers: {
    Accept: "application/vnd.api+json",
    "Content-Type": "application/vnd.api+json",
  },
};

export const SignUpPostConfig = {
  method: "post",
  url: "http://localhost:8000/api/register",
  headers: {
    Accept: "application/vnd.api+json",
    "Content-Type": "application/vnd.api+json",
  },
};
