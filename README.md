# TradeMeet

This is a full stack project I built to combine a simple stock dashboard with a video calling feature.

The idea was to create something like a basic trading app where users can manage their holdings, and also talk with others in real-time using video.

---

## What it does

* Users can sign up and log in
* After login, they can access a dashboard
* Users can add stock holdings (stock name, quantity, price)
* Data is stored in a database
* There is also a video call feature where multiple users can join
* Chat and screen sharing are available during the call

---

## Tech stack

Frontend:

* React
* Axios
* Material UI

Backend:

* Node.js
* Express

Database:

* MongoDB

Other:

* Socket.io (for real-time communication)
* WebRTC (for video calling)
* JWT (for authentication)

---

## How to run locally

Clone the repo:

```
git clone https://github.com/nafisajamal123/trademeet.git
cd trademeet
```

### Backend

```
cd backend
npm install
npm start
```

### Frontend

```
cd frontend
npm install
npm start
```

---

## Environment variables

Backend (.env):

```
PORT=8000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret
```

Frontend (.env):

```
REACT_APP_BACKEND_URL=your_backend_url
```

---

## Live project

Frontend: https://trademeetfrontend.onrender.com
Backend: https://trademeetbackend.onrender.com

---

## Things I would improve

* Better UI design
* Add profit/loss calculation
* Create unique room links for video calls
* Improve mobile responsiveness

---


