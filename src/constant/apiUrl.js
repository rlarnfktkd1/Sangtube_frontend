export const url = {
  youtube:
    process.env.NODE_ENV === "development"
      ? "http://localhost:4000"
      : "http://localhost:4000"
}

console.log(
  "this app is Youtube Service",
  // `${process.env.NODE_ENV.substr(0,2)}-${url.dasom.substr(21,4)}`
)