# Bookit

Bookit is a comprehensive room booking application built with [Next.js](https://nextjs.org/). It allows users to browse available rooms, make bookings, and manage their reservations seamlessly. Admin users can add, edit, and delete rooms, as well as oversee all bookings.

## Features

### User Authentication
- **Registration & Login:** Users can create an account and log in to access booking features.
- **Session Management:** Secure session handling using Appwrite.

### Room Management
- **View Rooms:** Browse a list of available rooms with details like size, capacity, and availability.
- **Add Rooms:** Admins can add new rooms with comprehensive details including name, description, square footage, capacity, location, address, price per hour, amenities, availability, and images.
- **Edit & Delete Rooms:** Admins have the ability to modify or remove rooms as needed.

### Booking System
- **Book Rooms:** Users can book rooms by selecting check-in and check-out dates and times.
- **Manage Bookings:** Users can view their bookings and cancel them if necessary.
- **Availability Check:** Real-time availability checking to prevent double bookings.

### Notifications
- **Success & Error Notifications:** Real-time feedback using React Toastify for actions like booking confirmations and error alerts.

### Responsive Design
- **Mobile-Friendly:** Fully responsive design ensuring optimal user experience across all devices.

## Technologies Used

- **Frontend:**
  - [Next.js](https://nextjs.org/) - React framework for server-side rendering and static site generation.
  - [React](https://reactjs.org/) - JavaScript library for building user interfaces.
  - [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for rapid UI development.
  - [React Icons](https://react-icons.github.io/react-icons/) - Popular icons library.
  - [React Toastify](https://fkhadra.github.io/react-toastify/) - Notification library for React.

- **Backend:**
  - [Appwrite](https://appwrite.io/) - Backend-as-a-Service platform for authentication, database, and storage.
  - [Node Appwrite SDK](https://github.com/appwrite/sdk-for-node) - Server SDK for interacting with Appwrite services.

- **Utilities:**
  - [Luxon](https://moment.github.io/luxon/) - Library for working with dates and times in JavaScript.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) package manager
- [Appwrite](https://appwrite.io/) instance set up and running

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/bookit.git
   cd bookit
   ```

2. **Install Dependencies**

   Using npm:

   ```bash
   npm install
   ```

   Or using Yarn:

   ```bash
   yarn install
   ```

3. **Configure Environment Variables**

   Create a `.env.local` file in the root directory and add the following variables:

   ```env
   NEXT_PUBLIC_APPWRITE_ENDPOINT=https://your-appwrite-endpoint.com/v1
   NEXT_PUBLIC_APPWRITE_PROJECT=your_project_id
   NEXT_APPWRITE_KEY=your_appwrite_secret_key
   NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_ROOMS=your_storage_bucket_id
   NEXT_PUBLIC_APPWRITE_DATABASE_ID=your_database_id
   NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS=your_rooms_collection_id
   NEXT_PUBLIC_APPWRITE_COLLECTION_BOOKINGS=your_bookings_collection_id
   ```

4. **Run the Development Server**

   Using npm:

   ```bash
   npm run dev
   ```

   Or using Yarn:

   ```bash
   yarn dev
   ```

   The application will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure
