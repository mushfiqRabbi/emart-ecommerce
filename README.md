# eMart E-Commerce Website

<!-- ![eMart Logo](/path/to/logo.png) -->

Welcome to the GitHub repository for eMart, an E-Commerce Website project built with Next.js and React.js. This platform utilizes MongoDB as the database, Prisma as the ORM, Stripe for the payment gateway, Algolia Instant Search for product searching, and Bootstrap as the CSS library. The website is hosted on Vercel.

## Features

- **User Authentication**: eMart provides a secure user authentication system. Users can sign up, log in, and manage their profiles.
- **Product Searching**: Algolia Instant Search is integrated to provide fast and accurate search results for products.
- **Product Filtering**: Users can filter products by category, brand, and price range for easy navigation.
- **Cart and Checkout**: Users can add products to the cart, review their items, and proceed to the checkout process.
- **Payment Gateway**: Stripe is used as the payment gateway to ensure secure and reliable payment processing.

## Technologies Used

- **Next.js**: A React framework for building server-side rendered and statically generated applications.
- **React.js**: A popular JavaScript library for building user interfaces.
- **MongoDB**: A NoSQL database for efficient storage and retrieval of data.
- **Prisma**: A modern database toolkit and ORM for Node.js that simplifies database interactions.
- **Stripe**: A payment processing platform that ensures secure and seamless transactions.
- **Algolia Instant Search**: A powerful search solution for delivering instant and relevant search results.
- **Bootstrap**: A widely used CSS library for creating responsive and visually appealing web pages.

## Screenshots/GIFs

Here are some screenshots and GIFs of the eMart E-Commerce Website:

![Demo](/screenshots//ezgif-4-eaf3777a33.gif)

_Navigating through the website._

<!-- ![Home Page](/screenshots/screencapture-mshop-seven-vercel-app-2023-06-19-06_07_02.png)
_Home Page._

![Login/Register](/screenshots/login-register.png)
_Login and Register page_

![Product Searching](/screenshots/screencapture-mshop-seven-vercel-app-2023-06-19-06_13_56.png)
_Searching Product_

![Product Filtering](/screenshots/screencapture-mshop-seven-vercel-app-products-2023-06-19-06_10_59.png)
_Product Filtering Page._

![Product Details](/screenshots/screencapture-mshop-seven-vercel-app-products-13-2023-06-19-06_17_46.png)
_Product Details Page._

![Cart](/screenshots/cart.png)
_Cart Page._

![Checkout](/screenshots/checkout.png)
_Stripe Checkout Page._ -->

## Live Demo

Check out the live demo of eMart at: [eMart Live Demo](https://mshop-seven.vercel.app/signin-signup)

## Getting Started

To get started with eMart, follow the steps below:

1. Clone the repository: `git clone https://github.com/your-username/emart.git`
2. Install dependencies: `npm install`
3. Set up the environment variables:

   - Create a `.env` file in the root directory.
   - Add the required environment variables for MongoDB, Prisma, Stripe, and Algolia like below.
     - DATABASE_URL="YOUR mongoDB URL"
     - NEXTAUTH_SECRET="YOUR NEXTAUTH SECRET"
     - STRIPE_SECRET_KEY="YOUR STRIPE_SECRET_KEY"
     - NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="YOUR STRIPE_PUBLISHABLE_KEY
     - BASE_URL=http://localhost:3000

4. Run the development server: `npm run dev`
5. Open your browser and navigate to `http://localhost:3000` to access the website.

## License

eMart is licensed under the [MIT License](LICENSE)
