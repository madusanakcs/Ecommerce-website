
# E-Commerce Application

This is an e-commerce application built with [Next.js](https://nextjs.org/), [Sanity](https://www.sanity.io/), [React](https://reactjs.org/), and [Stripe](https://stripe.com/). The project provides a scalable and customizable platform for online shopping.

## Getting Started

To get started with the project, follow these steps:

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) (for managing packages)
- [Sanity CLI](https://www.sanity.io/docs/getting-started-with-sanity-cli) (for managing Sanity content)
- [Stripe CLI](https://stripe.com/docs/stripe-cli) (for testing Stripe integrations)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/e-commerce-app.git
   cd e-commerce-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**

   Create a `.env.local` file in the root directory and add the following environment variables:

   ```plaintext
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-sanity-project-id
   NEXT_PUBLIC_SANITY_DATASET=your-sanity-dataset
   STRIPE_SECRET_KEY=your-stripe-secret-key
   STRIPE_PUBLIC_KEY=your-stripe-public-key
   ```

   Replace `your-sanity-project-id`, `your-sanity-dataset`, `your-stripe-secret-key`, and `your-stripe-public-key` with your actual credentials.

4. **Set up Sanity:**

   Navigate to the Sanity studio directory and install its dependencies:

   ```bash
   cd studio
   npm install
   ```

   Run the Sanity studio:

   ```bash
   npm run start
   ```

5. **Run the development server:**

   Return to the main project directory and start the Next.js development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the application in action.

### Folder Structure

- `pages/` - Contains the React pages of the application.
- `components/` - Reusable React components.
- `lib/` - Utility functions and API calls.
- `studio/` - Sanity studio configuration and schemas.
- `public/` - Static assets like images and fonts.

### Features

- **Product Listing:** Browse and filter products.
- **Product Details:** View detailed information about products.
- **Cart:** Add products to the shopping cart and view cart details.
- **Checkout:** Complete purchases using Stripe for payment processing.
- **Sanity CMS:** Manage content, including products and blog posts, via the Sanity studio.

### Image Gallery

Here are some images showcasing the application:

1. ![Image 1](public/images/i(1).jpg)
2. ![Image 2](public/images/i(2).jpg)
3. ![Image 3](public/images/i(3).jpg)
4. ![Image 4](public/images/i(4).jpg)
5. ![Image 5](public/images/i(5).jpg)

Make sure to replace `public/images/image1.jpg`, `public/images/image2.jpg`, `public/images/image3.jpg`, and `public/images/image4.jpg` with the paths to your actual images.

### Learn More

To learn more about the technologies used, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Sanity Documentation](https://www.sanity.io/docs) - Learn about Sanity content management.
- [React Documentation](https://reactjs.org/docs/getting-started.html) - Learn about React features and API.
- [Stripe Documentation](https://stripe.com/docs) - Learn about Stripe payment processing.

### Deployment

To deploy the application, follow the [Next.js deployment documentation](https://nextjs.org/docs/deployment) and configure your environment variables accordingly. You can deploy the app on [Vercel](https://vercel.com/) for a seamless deployment experience.

### Contributing

Contributions are welcome! Please open an issue or submit a pull request to the [GitHub repository](https://github.com/your-username/e-commerce-app) if you have suggestions or improvements.
```

Let me know if you need any further adjustments!
