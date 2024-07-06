# Events Creator

## Description

Events Creator is a web application that allows users to register, create events, and indicate their attendance at events. This project incorporates both frontend and backend development using vanilla JavaScript. The aim is to provide a platform where different users can interact with events based on their roles.

- **Admin**: Can access all events, view all registered users, and manage events.
- **User**: Can see all events, create new events, and view only the events they have confirmed attendance for.
- **Guest**: Can view all events and see which users are attending them.

The backend utilizes MongoDB for data storage and Cloudinary for image storage. User authentication is managed through JSON Web Tokens (JWT).

## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm
- MongoDB
- Cloudinary account

### Frontend

1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm run dev
    ```

### Backend

1. Navigate to the backend directory:
    ```bash
    cd backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the backend directory and add the following variables:
    ```env
    CLOUDINARY_CLOUD_NAME=your_cloud_name
    CLOUDINARY_API_KEY=your_api_key
    CLOUDINARY_API_SECRET=your_api_secret
    JWT_SECRET=your_jwt_secret
    MONGODB_URI=your_mongodb_uri
    ```

4. Start the backend server:
    ```bash
    npm start
    ```

## Usage

Once the servers are running, you can access the application at `http://localhost:3000`.

### User Registration and Login

- Register a new user account or log in with existing credentials.
- Admin accounts have additional privileges.

### Creating and Managing Events

- Users can create new events and upload images for the events.
- Admins can view and manage all events and users.

### Viewing Events

- Guests can view all events and see which users are attending.
- Registered users can view all events and manage their own events.


