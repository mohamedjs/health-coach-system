# Backend

## Setup

1. Install dependencies:
   ```sh
   npm install
   ```

2. **Environment Variables:**
   - (Optional) Create a `.env` file to set the backend port:
     ```sh
     echo "PORT=5000" > .env
     ```
   - The server will use the `PORT` variable if set, otherwise defaults to 5000.

3. Start the server:
   ```sh
   npm start
   ```

## Environment Variables
- `PORT`: The port the backend server will listen on (default: 5000).

---

## Notes
- Make sure the port you set here matches the API URL used in your front-end `.env` file.
- For production, set the `PORT` variable in your deployment environment as needed. 