## Getting Started

First add `serviceAccountKey.json` to the root of the `backend` project and to run the development server:

```bash
npm run start
# or
yarn start
```

Open [http://localhost:8001](http://localhost:8001) with your browser to see the project. It must show following:

```json
{
  "message": "It works"
}
```

To run lint:

```bash
yarn lint
```

To run test:

```bash
yarn test:unit
# with coverage
yarn test:unit --coverage
```

To build the project:

```bash
yarn build
```

this will create `build` directory
