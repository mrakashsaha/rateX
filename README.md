# RateX
![RateX Screenshot](https://raw.githubusercontent.com/mrakashsaha/rateX/refs/heads/main/public/RateXSS.png)  

## Overview
RateX is a comprehensive service review platform that allows users to share their experiences with various services. Users can post reviews, manage their own reviews, and explore feedback from others. The platform includes user authentication, interactive features, and a responsive design for a seamless experience.


## Technologies Used
- **Frontend:** React, React Router, React Icons, Swiper
- **Backend & Services:** Firebase (Authentication & Hosting)
- **State Management & Utilities:** Moment.js, LocalForage, Match Sorter, Axios
- **Styling & Animations:** Tailwind CSS, DaisyUI, Framer Motion, Lottie React


## Features
- **User Authentication**: Secure email/password and Google-based authentication.
- **Add Services**: Logged-in users can create, update, or delete their own services.
- **Review Management**: Users can post, edit, or delete reviews with star ratings and text feedback.
- **Dynamic Pages**: Service details, reviews, and user-specific data are dynamically loaded.
- **Search and Filter**: Powerful search and filter capabilities to find services by category or keyword.
- **Interactive UI**: Engaging animations using Framer Motion and smooth interactions with react-icons.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop.
- **Additional Features**:
  - Spinner for loading states
  - JWT-based API security
  - Toast notifications for CRUD operations
  - 404 Page for non-existent routes
  - React Helmet for dynamic titles

## Dependencies
The project uses the following dependencies:

### Main Dependencies:
```json
{
  "dependencies": {
    "@smastrom/react-rating": "^1.5.0",
    "axios": "^1.7.9",
    "firebase": "^11.1.0",
    "localforage": "^1.10.0",
    "lottie-react": "^2.4.0",
    "match-sorter": "^8.0.0",
    "moment": "^2.30.1",
    "motion": "^11.15.0",
    "react": "^18.3.1",
    "react-countup": "^6.5.3",
    "react-dom": "^18.3.1",
    "react-helmet": "^6.1.0",
    "react-icons": "^5.4.0",
    "react-router-dom": "^7.1.0",
    "sort-by": "^1.2.0",
    "sweetalert2": "^11.15.3",
    "swiper": "^11.1.15"
  }
}
```
### Dev Dependencies:
```json
{
  "dependencies": {
  "@eslint/js": "^9.17.0",
  "@types/react": "^18.3.17",
  "@types/react-dom": "^18.3.5",
  "@vitejs/plugin-react": "^4.3.4",
  "autoprefixer": "^10.4.20",
  "daisyui": "^4.12.22",
  "eslint": "^9.17.0",
  "eslint-plugin-react": "^7.37.2",
  "eslint-plugin-react-hooks": "^5.0.0",
  "eslint-plugin-react-refresh": "^0.4.16",
  "globals": "^15.13.0",
  "postcss": "^8.4.49",
  "tailwindcss": "^3.4.17",
  "vite": "^6.0.3"
  }
}
```

## Running the Project Locally
Follow these steps to set up and run RateX on your local machine:

1. **Clone the repository**  
   ```bash
   git clone https://github.com/mrakashsaha/rateX.git
   cd ratex
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Set up environment variables**  
   - Create a `.env` file in the root directory.
   - Add Firebase configuration keys.

4. **Start the development server**  
   ```bash
   npm run dev
   ```

5. **Build for production**  
   ```bash
   npm run build
   ```

## Live Project & Resources
- **Live Demo**: [Visit RateX](https://rate-x.web.app)
- **GitHub Repository**: [GitHub Link](https://github.com/mrakashsaha/rateX)
- **Firebase Hosting**: Deployed with Firebase Hosting.

## Thank You
Thank you for exploring RateX! Your feedback and support are greatly appreciated.
