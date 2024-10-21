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

```

Ctrl+K to generate a command
@Codebase update the readme.md file to document all the features and aspects of the project

Final Codebase Context
README.md
bookit/
├── app/
│ ├── actions/
│ │ ├── bookRoom.js
│ │ ├── cancelBooking.js
│ │ ├── checkAuth.js
│ │ ├── checkRoomAvailability.js
│ │ ├── createRoom.js
│ │ ├── createUser.js
│ │ ├── deleteRoom.js
│ │ ├── getAllRooms.js
│ │ ├── getMyBookings.js
│ │ └── getSingleRoom.js
│ ├── components/
│ │ ├── BookingForm.jsx
│ │ ├── CancelBookingButton.jsx
│ │ ├── Footer.jsx
│ │ ├── Header.jsx
│ │ ├── Heading.jsx
│ │ ├── RoomCard.jsx
│ │ └── BookedRoomCard.jsx
│ ├── config/
│ │ └── appwrite.js
│ ├── layout.jsx
│ ├── login/
│ │ └── page.jsx
│ ├── pages/
│ │ └── ... (other pages)
│ └── register/
│ └── page.jsx
├── assests/
│ └── styles/
│ └── globals.css
├── public/
│ └── images/
│ └── rooms/
│ └── no-image.jpg
├── .gitignore
├── jsconfig.json
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.js
└── README.md
```

## Usage

### Browsing Rooms

- Navigate to the homepage to view all available rooms.
- Click on a room to view detailed information and make a booking.

### Booking a Room

1. **Select a Room:** Choose a room from the list.
2. **Fill in Details:** Enter check-in and check-out dates and times.
3. **Confirm Booking:** Submit the form to book the room.

### Managing Rooms (Admin)

- **Add Room:** Navigate to the "Add Room" page and fill in the required details to add a new room.
- **Edit/Delete Room:** From the room list, perform edit or delete actions as needed.

### Managing Bookings

- **View Bookings:** Access the "Bookings" page to see all your reservations.
- **Cancel Booking:** Click on "Cancel Booking" to remove a reservation.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new). Follow the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Appwrite](https://appwrite.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
- [Luxon](https://moment.github.io/luxon/)
