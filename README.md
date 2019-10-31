# Body Parts Ebay

## Frontend (React)

### Dependencies
- axios
- redux
- react-router-dom
- react-redux
- http-proxy-middleware
- redux-promise-middleware
- node-sass

### routes

- login/register => "/" => AuthComponent.js
- store => "/body_parts" => AvailableBodyParts.js
- profile => "/profile" => Profile.js

### file-structure
- src/
    - components/
        - AuthComponent.js
        - AvailableBodyParts.js
        - Profile.js
    - App.js
    - index.js
    - index.css => reset.css
    - setupProxy.js
    - ducks/
        - store.js
        - reducer.js


## Backend (Express)

### Dependencies
- express
- massive
- dotenv
- express-session
- bcrypt

### Server File Structure
- db
- server/
    - index.js
    - controller/ 
        - userController.js
        - inventoryController.js
    - middleware/
        - sessionCheck.js

### Endpoints

**Auth**
- userSession: => get => /api/session
- Register: => /auth/register
- login: => /auth/login
- logout: => /auth/logout

- addToCart: => post => /api/add_to_cart
- getCart : => get => /api/get_cart
- deleteFromCart: => delete => /api/delete_from_cart/:id
- updateEmail: => put => /api/update_email
- getPurchaseHistory: => /api/purchase_history

**Inventory**
- showAllInventory: => get => /api/inventory

### Secrets
```text
CONNECTION_STRING=
SESSION_SECRET=
SERVER_PORT=
```

## Database (Postgres)

- user table
```sql
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username TEXT UNIQUE,
    password TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL
)
```

- body parts inventory table
```sql
CREATE TABLE inventory (
    part_id SERIAL PRIMARY KEY,
    part_name VARCHAR(64) NOT NULL,
    price INTEGER NOT NULL,
    quality TEXT NOT NULL,
    image TEXT NOT NULL
)
```
- purchase history
```sql
CREATE TABLE purchase_history (
    purchase_id SERIAL PRIMARY KEY,
    purchase_date DATE DEFAULT NOW(),
    user_id INTEGER REFERENCES users(user_id)
    part_id INTEGER REFERENCES inventory(part_id)
)
```
- admin table
```sql
    ICE BOX
```