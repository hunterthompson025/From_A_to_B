# Project Title

Brief description of what your project does.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Features](#features)
4. [API Endpoints](#api-endpoints)
5. [Database Schema](#database-schema)
6. [Contributing](#contributing)
7. [License](#license)
8. [Contact](#contact)

## Installation

### Prerequisites

- Node.js
- PostgreSQL

### Clone the Repository

```bash
git clone https://github.com/hunterthompson025/From_A_to_B.git
cd your-repo
```

### Install Dependencies

```bash
npm install
```

### Set Up Environment Variables

Create a `.env` file in the root directory and add the following:

```
DATABASE_URL=postgres://username:password@localhost:5432/your-database
SECRET_KEY=your_secret_key
```

### Run Database Migrations

```bash
npx sequelize-cli db:migrate
```

### Seed the Database (optional)

```bash
npx sequelize-cli db:seed:all
```

### Start the Server

```bash
npm start
```

The server should now be running at `http://localhost:3000`.

## Usage

Provide instructions and examples for using your project. This can include code snippets or screenshots.

## Features

- Feature 1
- Feature 2
- Feature 3

## API Endpoints

### Car Routes (/cars)

- `GET /`: Get all cars
- `GET /:id`: Get a specific car by ID
- `GET /:id/comments`: Post to add a comment to a car post

### User Routes (/users)

- `GET /`: Get all users
- `POST /`: Create a new user
- `POST /login`: Login
- `POST /logout`: Logout

### Example Endpoint

```http
GET /example
```

#### Request

```bash
curl -X GET http://localhost:3000/example
```

#### Response

```json
{
  "data": "example response"
}
```

## Database Schema

### 'Car' Model

| Column      | Data Type | Constraints                              |
|-------------|-----------|------------------------------------------|
| id          | INTEGER   | PRIMARY KEY, AUTO_INCREMENT              |
| title       | STRING    | NOT NULL                                 |
| price       | DECIMAL   | NOT NULL                                 |
| description | TEXT      | NOT NULL                                 |
| image_URL   | STRING    |                                          |
| date_created| DATE      | NOT NULL                                 |
| user_id     | DATE      | NOT NULL, FOREIGN KEY REFERENCES user(id)|

### 'User' Model

| Column      | Data Type | Constraints                            |
|-------------|-----------|----------------------------------------|
| id          | INTEGER   | PRIMARY KEY, AUTO_INCREMENT            |
| name        | STRING    | NOT NULL                               |
| email       | STRING    | NOT NULL, UNIQUE, must be an email     |
| password    | STRING    | NOT NULL, must be at least 8 chars long|

### 'Comment' Model

| Column      | Data Type | Constraints                             |
|-------------|-----------|-----------------------------------------|
| id          | INTEGER   | PRIMARY KEY, AUTO_INCREMENT             |
| comment_text| TEXT      | NOT NULL                                |
| car_id      | STRING    | NOT NULL, FOREIGN KEY REFERENCES car(id)|
| user_id     | STRING    | NOT NULL, FOREIGN KEY REFERENCES car(id)|

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- **Your Name**
- **Email**: your.email@example.com
- **GitHub**: [yourusername](https://github.com/yourusername)

Feel free to reach out if you have any questions or need further assistance!