# RateX

RateX is a comprehensive service review platform designed to empower users to share their experiences with various services. Users can post reviews, manage their own reviews, and explore feedback on services provided by others.

## Live Website
[RateX](https://rate-x.web.app)

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

## npm Packages
The project utilizes the following npm packages:
- **@smastrom/react-rating**: For interactive star ratings.
- **axios**: Simplifies HTTP requests.
- **firebase**: For authentication and database.
- **lottie-react**: Adding animations for a better user experience.
- **moment**: Date and time manipulation.
- **motion**: Animations and transitions.
- **react**: Core framework for building user interfaces.
- **react-countup**: Animated number counters for stats.
- **react-helmet**: Managing document head dynamically.
- **react-icons**: Icon library for consistent design.
- **react-router-dom**: Managing application routing.
- **sweetalert2**: For customizable alerts.
- **swiper**: Slider implementation for the banner section.

## Project Structure
### Pages
- **Home**: Featured services, partners, and additional informational sections.
- **Services**: List and details of all services.
- **My Reviews**: Manage personal reviews.
- **Add Service**: Create new services.
- **Login/Register**: Secure authentication system.
- **404 Page**: Displayed for non-existent routes.

### Backend Features
- **Secure API Routes**: POST, PATCH, and DELETE routes protected by JWT.
- **Database**: Integration with MongoDB for secure and scalable storage.

---

Thank you for exploring RateX! 🚀
