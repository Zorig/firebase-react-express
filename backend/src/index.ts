import Server from "./server";

const PORT = process.env.PORT || 8001;

Server()
  .then((server) =>
    server.listen(PORT, () => {
      console.log(`[Server]: Server is running at http://localhost:${PORT})`);
    })
  )
  .catch((err) => {
    console.error(`[Error]: ${err}`);
  });
