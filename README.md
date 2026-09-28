# The Century Law Offices

A full-stack web platform for **The Century Law Offices**, a premier law firm based in Monrovia, Liberia. Built with a Django REST Framework backend and a Next.js frontend.

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 14, React, Bootstrap 5, SCSS |
| Backend | Django 5, Django REST Framework |
| Auth | SimpleJWT |
| Database | PostgreSQL |
| Media | Cloudinary |
| Fonts | Playfair Display, Source Serif 4, Montserrat |

---

## Getting Started

### Prerequisites
- Python 3.11+
- Node.js 18+
- PostgreSQL

---

### Backend Setup

```bash
cd backend

# Create and activate a virtual environment
python -m venv venv
venv\Scripts\activate       # Windows
# source venv/bin/activate  # macOS/Linux

# Install dependencies
pip install -r requirements.txt

# Copy environment file and configure
cp .env.example .env
# Edit .env with your database credentials and secret key

# Run migrations
python manage.py migrate

# Create a superuser (for Django admin)
python manage.py createsuperuser

# Start the development server
python manage.py runserver 8000
```

Backend API will be available at `http://localhost:8000`  
Django Admin panel: `http://localhost:8000/admin`

---

### Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Copy environment file
cp .env.example .env.local
# Edit .env.local if your backend runs on a different port

# Start the development server
npm run dev -- -p 3010
```

Frontend will be available at `http://localhost:3010`

---

## Project Structure

```
LawFirm/
├── backend/
│   ├── apps/
│   │   ├── attorneys/
│   │   ├── blog/
│   │   ├── case_results/
│   │   ├── consultations/
│   │   ├── contact/
│   │   ├── newsletter/
│   │   ├── portal/
│   │   ├── practice_areas/
│   │   └── testimonials/
│   ├── config/
│   │   └── settings/
│   ├── requirements.txt
│   └── .env.example
└── frontend/
    ├── src/
    │   ├── app/          # Next.js App Router pages
    │   ├── components/   # Reusable UI components
    │   ├── context/      # React context providers
    │   ├── hooks/        # Custom hooks
    │   ├── lib/          # API client config
    │   └── services/     # API service functions
    ├── styles/
    └── .env.example
```

---

## Environment Variables

See `backend/.env.example` and `frontend/.env.example` for all required environment variables.

> ⚠️ Never commit `.env` files to version control.

---

## License

© 2026 The Century Law Offices. All rights reserved.
