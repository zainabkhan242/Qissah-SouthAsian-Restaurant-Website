# Qissah

A restaurant web application with a Django backend and a React frontend. Customers can browse the menu and place orders or reservations, and staff can manage everything from the admin panel.

## Features

- Browse the menu by category, with item details and prices
- Place orders or make table reservations
- Admin panel to add, edit and remove menu items and orders
- Responsive design that works on phones and desktops

## Tech Stack

- **Backend:** Python, Django
- **Frontend:** React, HTML, CSS, JavaScript
- **Database:** SQLite (Django default)

## Project Structure

```
diwaanstyle/
├── aldasbackend/          # Django backend
│   ├── restaurant/        # Restaurant app (models, views, urls)
│   ├── aldasfrontend/     # Frontend code
│   └── manage.py
└── README.md
```

## Getting Started

### Prerequisites

- Python 3.12+
- Node.js 18+ and npm
- Git

### 1. Clone the repository

```bash
git clone https://github.com/excitedcat24/Qissah.git
cd Qissah
```

### 2. Set up the backend

```bash
cd aldasbackend
python -m venv venv

# Windows (Git Bash)
source venv/Scripts/activate
# Windows (Command Prompt): venv\Scripts\activate
# macOS / Linux: source venv/bin/activate

pip install -r requirements.txt
```

Create a `.env` file inside `aldasbackend/` with your own values:

```
SECRET_KEY=your-secret-key
DEBUG=True
```

Run migrations and start the server:

```bash
python manage.py migrate
python manage.py createsuperuser   # optional: creates an admin login
python manage.py runserver
```

The backend runs at http://127.0.0.1:8000/ and the admin panel at http://127.0.0.1:8000/admin/.

### 3. Set up the frontend

Open a second terminal:

```bash
cd aldasbackend/aldasfrontend
npm install
npm start
```

The frontend runs at http://localhost:3000/ (use `npm run dev` instead if the project uses Vite).

## Environment Variables

| Variable     | Description                    |
|--------------|--------------------------------|
| `SECRET_KEY` | Django secret key              |
| `DEBUG`      | `True` for development         |

Never commit your `.env` file to GitHub.

## Author

**excitedcat24**
GitHub: [@excitedcat24](https://github.com/excitedcat24)

## License

This project is licensed under the MIT License.
