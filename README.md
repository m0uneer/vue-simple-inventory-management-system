# simple-inventory-management-system

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

## Project Todos
- [x] Vue
- [x] Typescript
- [x] IMS storage should apply First In First Out (FIFO) principle 
- [x] Unit testing
- [ ] Using Inversify to manage DI
- [ ] Form Validation
- [ ] Deploy your app using Firebase Hosting

## Assumptions and key points
- The uniqueness of an item is decided by the its name and value
- The scenario of returning an item has the same business rules (And test cases) of adding one
- Purchasing (Removal) an item should must pass the name and the value to be able to update that item properly.
