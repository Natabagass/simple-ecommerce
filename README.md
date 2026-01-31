# E-Commerce Product Detail Page

This project is a Product Detail Page (PDP) built using Create React App (CRA) as part of a frontend technical assessment.

The main focus of this project is frontend architecture, UI/UX handling, and clean, maintainable code structure rather than backend or deployment concerns.

---

## Getting Started

### Prerequisites

- Node.js >= 18
- npm or yarn

### Installation

```bash
npm install
npm start
```

### The application will run locally at:

```bash
http://localhost:3000
```

## Tech Stack

- **React** – Frontend library
- **Create React App (CRA)** – Project bootstrapping
- **TypeScript** – Static typing
- **Tailwind CSS** – Utility-first styling
- **Swiper** – Product image gallery and carousel
- **Axios** – HTTP client for API requests
- **React Query** – Server state management (data fetching, caching)

---

## Project Structure

```txt
src/
 ├── components/          # Components that used for reusable (button, error state, text, etc.)
 ├── hooks/               # Custom React Query hooks
 ├── services/            # API service layer
 ├── utils/               # Utility functions (e.g. currency formatter)
 ├── pages/               # Page-level components
 ├── sections/            # Place that i used to create section per page that will be show
 └── types/               # TypeScript types and interfaces
 ```

---

## Technical Overview

### Data Fetching

- Data fetching is handled using **React Query**.
- React Query manages loading, error, caching, and refetching states without manual `useEffect`.
- This approach keeps components clean and scalable.

### Image Handling

- Product images are displayed with a **generic placeholder** during loading to prevent layout shift.
- Image placeholders are generic due to CRA being a client-only application.
- Server-side image placeholder generation is intentionally not implemented.

### Loading State

- **Skeleton loading** is used for page-level loading states.
- Skeletons provide better visual feedback and improve perceived performance compared to spinners.

### Error Handling

- An error state is displayed when API requests fail.
- A retry mechanism is provided so users can recover without reloading the page.

### Product Gallery

- The product gallery is implemented using **Swiper**.
- Each slide represents a product.
- Changing the active slide updates the product information section.
- Thumbnail navigation is used to enhance usability.

### Styling

- Styling is implemented using **Tailwind CSS**.
- Reusable UI components are used to ensure consistency across the page.

---

## API Contract

### GET /api/products

Retrieve list of products.

**Response:**

```json
{
  "status": "success",
  "data": [
    {
      "id": "string",
      "name": "string",
      "price": "number",
      "rating": "number",
      "badge": "string",
      "images": [
        {
          "id": "string",
          "url": "string"
        }
      ]
    }
  ]
}
```