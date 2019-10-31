# Body Parts Ebay

## frontend (React)

## backend (Express)

### dependecies

- express
- massive
- dotenv
- express-session
- bcrypt

### server file structure

- db/
- server/
  - index.js
  - controller/
    - userContoller.js
    - inventoryController.js
  - middleware/
    - sessionCheck.js

### enpoints

**User/auth**

- userSession: => get => /auth/session
- register: => /auth/register
- logout: => /auth/logout
- login: => /auth/login

- addToCart: => post => /api/add_to_cart
- getCart: => get => /api/get_cart
- deleteFromCart: => delete => /api/delete_from_cart/:id
- updateEmail: => put => /api/update_email
- getPurchaseHistory => /api/purchase_history/:id

**inventory**

- showAllInventory => get => /api/inventory

### secrets

```text
CONNECTION_STRING=
SESSION_SECRET=
SERVER_PORT=
```

## database (PostgreSQL)

- User Table

```sql
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL
);
```

- Body Parts Inventory Table

```sql
CREATE TABLE inventory (
    part_id SERIAL PRIMARY KEY,
    part_name VARCHAR(64) NOT NULL,
    price INTEGER NOT NULL,
    quality TEXT NOT NULL,
    image TEXT NOT NULL
)
```

- purchase_history

```sql
CREATE TABLE purchase_history (
    purchase_id SERIAL PRIMARY KEY,
    purchase_date DATE DEFAULT NOW(),
    user_id INTEGER REFERENCES users(user_id),
    part_id INTEGER REFERENCES inventory(part_id)
);
```

- Admin Table (icebox)
