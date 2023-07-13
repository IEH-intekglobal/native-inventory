# Sortly Mock App

Example code that shows basic functionality and navigation for an inventory tracking application

## Using Firebase

The following environment variables are required for *Firebase*

.env file

- APP_ID
- FIREBASE_API_KEY
- PROJECT_ID


**src/network/db/index.ts**
```js
export * from './firestore/db';
```

**src/network/auth/index.ts**
```js
export * from './firestore';
```

## Using mock data

**src/network/db/index.ts**
```js
export * from './mock-firestore/db';
```

**src/network/auth/index.ts**
```js
export * from './mock-firestore';
```