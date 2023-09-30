

## E-Assets

E-Assets is an asset management system designed for government schools, colleges, and offices in India. It enables the efficient exchange and tracking of assets among different institutions. The system maintains a comprehensive record of assets, including their availability, mobility, lifespan, maintenance details, and geographical information through GIS mapping. Users can also request assets for a specific duration.

### Features

- **User Authentication:** Secure user login with JWT authentication.
- **Asset Management:** Users can add, edit, and delete assets within their authority, ensuring data separation and preventing overlap.
- **Password Encryption:** Passwords are encrypted and stored securely in the database.
- **Location Tracking:** Ability to add location information for each asset using GIS mapping techniques.
- **Asset Images:** Attach images to assets to provide visual representation and facilitate identification.
- **Admin Privileges:** Assign admin roles to individuals responsible for overseeing specific areas and granting them complete access to the relevant data.

### Technologies Used

The project is built using the MERN (MongoDB, Express, React, Node.js) stack, which offers a robust and scalable foundation for developing web applications.

- MongoDB: A NoSQL database for storing asset and user-related information.
- Express: A backend framework for building the API endpoints and handling server-side logic.
- React: A frontend library for developing a dynamic and interactive user interface.
- Node.js: A JavaScript runtime environment for executing server-side code.

### Installation and Setup

To run the E-Assets project locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/dsasank04/E-Assets.git
   ```

2. Install dependencies:
   ```
   cd E-Assets
   npm install
   ```

3. Configure the environment:
   - Create a `.env` file in the root directory.
   - Set up environment variables such as database connection details, JWT secret, etc.

4. Run the application:
   ```
   npm start
   ```

### Contribution

Contributions to the E-Assets project are welcome. If you have any suggestions, bug reports, or feature requests, please submit them through the issue tracker on the GitHub repository.


