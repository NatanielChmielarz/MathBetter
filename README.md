# MathBetter

MathBetter is a web application designed to enhance mathematical skills through interactive gameplay. It utilizes Django for the backend, Svelte for the frontend, and SQL Server for the database.

Live demo : https://mathbetter.vercel.app/

You can create an account to save your progress or just play the game without registering.

## Features

- **Mathematical Challenges**: Engage in various mathematical challenges ranging from arithmetic to advanced calculus.
- **Progress Tracking**: Keep track of your progress and improvement over time.
- **Leaderboards**: Compete with friends and other users on the global leaderboards.
- **User Authentication**: Securely register and login to track your scores and achievements.

## Technologies:
- **Django**
- **Django restframework**
- **Svelte**
- **SQLServer**

### Prerequisites

- Python (3.7 or higher)
- Node.js
- SQL Server
 
### Steps

1. Clone the repository: git clone https://github.com/NatanielChmielarz/MathBetter.git
2. Navigate to the backend project directory: cd Backend
3. Install Python dependencies: pip install -r requirements.txt
4. Install Node.js dependencies for the frontend:
   cd Frontend
   npm install
5. Set up the SQL Server database and configure the database settings in `MathBetter/settings.py`.
6. Run migrations to create the necessary database schema:
   python manage.py migrate
7. Compile the Svelte frontend: npm run build
8. Start the development server: python manage.py runserver
9. Access the application at `http://localhost:8000` in your web browser.

### Swagger 
![image](https://github.com/NatanielChmielarz/MathBetter/assets/129111960/fe7cd27d-497e-42eb-af91-c91fe995dc1d)
