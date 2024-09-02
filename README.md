# Safe Routes Finder

This is a web application that allows users to find the safest routes based on crime rates rather than just the fastest routes. The app leverages geospatial data and crime statistics to provide users with a safer travel experience.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Flask
- **Routing**: Open Route Service SDK
- **Maps**: Open Street Maps API
- **Authentication**: JWT (JSON Web Tokens), Firebase
- **Database**: Firebase

## Features

- **Safe Route Calculation**: Users can calculate routes based on safety, factoring in crime rates in the area.
- **Map Visualization**: Routes are displayed on a map, allowing users to visualize the safest path.
- **User Authentication**: Secure user authentication is implemented using JWT and Firebase.
- **Real-time Updates**: The app provides real-time updates on route safety.

## Installation

### Prerequisites

- Node.js
- Python 3.x
- Flask
- npm (Node Package Manager)
- Open Route Service SDK API key
- Firebase project setup

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/MuhammadSharyar/safe-routes-client.git
   cd safe-routes-client
   ```

2. **Install frontend dependencies:**

   ```bash
   cd frontend
   npm install
   ```

3. **Install backend dependencies:**

   ```bash
   cd ../backend
   pip install -r requirements.txt
   ```

4. **Set up environment variables:**

   Create a `.env` file in the `backend` directory with the following content:

   ```bash
   FLASK_APP=app.py
   FLASK_ENV=development
   SECRET_KEY=your_secret_key
   OPEN_ROUTE_SERVICE_API_KEY=your_open_route_service_api_key
   ```

   Create another `.env` file in the `frontend` directory with the following content:

   ```bash
   REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
   ```

5. **Run the backend server:**

   ```bash
   cd backend
   flask run
   ```

6. **Run the frontend development server:**

   ```bash
   cd ../frontend
   npm start
   ```

   The application should now be running on `http://localhost:3000`.

## Usage

1. **Sign Up/Login**: Users can sign up or log in using their email and password.

2. **Enter Start and Destination**: Users can input their starting point and destination to find the safest route.

3. **View Route**: The safest route, considering crime data, is displayed on the map.

4. **Adjust Preferences**: Users can adjust preferences to balance between safety and speed.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Acknowledgments

- Open Route Service SDK
- Open Street Maps API
- Firebase
- Flask
- React.js
