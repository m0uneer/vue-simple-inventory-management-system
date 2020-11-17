# Simple Inventory Management System
Tech Store would like to have an Inventory Management System (IMS) to keep track of items procured from suppliers,
sold to customers or returned by customers. Each item has a Value and Quantity, for example Item A has a Value of 1
and Quantity of 3. IMS needs to be updated each time the store procures goods, for example a new Item A is bought
by the store from a supplier. IMS will also need to be updated when a customer buys items (i.e. the item will need
to be removed from the inventory). In addition, it could also happen that a customer buys an item then returns it.
In this case, the item will need to be removed from the inventory when the customer buys it and then added
to the inventory when the customer returns it.

## Live
https://simple-inventory-system.web.app/#/

## Assumptions and key points
- The uniqueness of an item is decided by the its name and value
- The scenario of returning an item has the same business rules (And test cases) of adding one
- Purchasing (Removal) an item should must pass the name and the value to be able to update that item properly.

## Technical Features
- Using typescript
- Using Vue
- Using Vuex
- Unit test using Jest
- Using SCSS
- Using Bootstrap 4
- Applying AirBnB Style guide 
- Using `semantic-release` for semantic versioning and generation changelog
- Using `commitlint` and `husky` to force Angular conventional commit format and linting staged files
- Using Travis for CI/CD and releasing
- Deployed to Firebase

## Development
### Requirements
- NodeJS > v10.18

### Project setup
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
- [x] Deploy your app using Firebase Hosting
- [ ] Using Inversify to manage DI
- [ ] Advanced form validation
- [ ] Using a logger
- [ ] Using Djaty for bug tracking
- [ ] Add the badges to the README.md
