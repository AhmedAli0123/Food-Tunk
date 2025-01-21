# Hackathon Project - Q-Commerce Website

## DAY 1 - Laying the Foundation

### Goal:
The primary objective of this hackathon project is to build a Q-Commerce (Quick Commerce) website that offers rapid delivery of food and chef services. The website is designed to provide users with a seamless experience by offering curated categories, fast navigation, and an efficient ordering process.

### What We Did:

#### Outlined the Q-Commerce Goal:
- Defined the purpose of the website to deliver value by catering to immediate delivery needs.
- Highlighted the user-centric approach for faster delivery and easy access to a variety of food options.

#### Website Advantages:
- Provides users with a comprehensive food menu and chef services.
- Designed for scalability and quick adaptability to user demands.
- Implements a modern UI/UX to enhance the user experience.

---

## DAY 2 - Planning the Technical Foundation

### Goal:
To establish the technical foundation for the Q-Commerce platform, including the selection of tools, technologies, and architectural setup.

### What We Did:

#### System Architecture:
- Designed a robust architecture combining Sanity CMS as the backend for content management and Next.js for the frontend.
- Chose GROQ queries to fetch data efficiently from Sanity CMS.

#### Technology Stack:
- **Sanity CMS:** For managing and structuring content like food items and chef details.
- **Next.js:** To build the frontend with a focus on speed, SEO, and developer experience.
- **GROQ Queries:** For seamless data retrieval from Sanity.

#### Requirements Identified:
- Defined the necessary schemas for food and chef data.
- Outlined the API integration strategy to import and display data dynamically.

---

## DAY 3 - API Integration Report

### Goal:
To integrate APIs and migrate data into Sanity CMS, ensuring a functional marketplace backend while displaying data on the frontend.

### What We Did:

#### Data Migration:
- Used a custom migration script to fetch data from APIs and import it into Sanity CMS.
- Uploaded food and chef images dynamically to Sanity assets.
- Validated all data to ensure compatibility with Sanity schemas.

#### API Integration:
- **Integrated APIs:**
  - Food API: [https://sanity-nextjs-rouge.vercel.app/api/foods](https://sanity-nextjs-rouge.vercel.app/api/foods)
  - Chef API: [https://sanity-nextjs-rouge.vercel.app/api/chefs](https://sanity-nextjs-rouge.vercel.app/api/chefs)
- Fetched data using Axios and displayed it dynamically on the frontend using GROQ queries.

#### Frontend Integration:
- Successfully displayed imported data on the Next.js frontend using GROQ queries.
- Ensured proper rendering of food items and chef details with images, descriptions, and categories.

---

## DAY 4 - Enhancing Functionality

### Goal:
To implement advanced features that improve user experience and interactivity on the Q-Commerce platform.

### What We Did:

#### Dynamic Routing:
- Implemented dynamic routing for pages such as product details.
- Users can now view individual product pages by clicking on items from the menu or shop page. Each product page is dynamically rendered based on the unique slug.

#### Add to Cart Functionality:
- Added a button to each product for adding it to the cart.
- Items are stored in the cart, and their quantity is adjustable.
- Total price updates dynamically as items are added or quantities are modified.

#### Checkout Page:
- Built a dedicated checkout page to review cart contents and proceed to payment.
- Added basic form validation for user information.

#### Search Bar Functionality:
- Integrated a search bar for finding products.
- Search results update dynamically as users type.

#### Price Filtering:
- Added a filter to sort products by price range.
- Updates the product list in real time based on the selected range.

#### Other Functionalities:
- Ensured all pages and components are fully responsive across devices.
- Enhanced the visual elements to provide a more intuitive user experience.
- Used React Context API for global state management to handle cart and product data efficiently.

---

## Conclusion

Over the past four days, we have laid a solid foundation for the Q-Commerce website, planned the technical architecture, and implemented dynamic API integrations and advanced features. This project showcases:

- A seamless backend integration using Sanity CMS.
- Efficient migration and management of data through custom scripts.
- Dynamic rendering of content on the frontend with GROQ queries.
- Advanced user-focused functionalities like search, filtering, and dynamic cart management.

The project is now well-positioned for further enhancements, including user authentication, order management, and real-time updates to improve user experience.

---

# Day 06: Deployment Preparation and Staging Environment Setup

## Objective
In Day 06, the focus was on preparing the marketplace application for deployment. This involved setting up a staging environment, configuring hosting platforms, ensuring the application is production-ready, and following best practices for handling environments.

## Deployment Strategy Planning

### 1. **Choose a Hosting Platform: Vercel**
   - **Easy Integration** with Next.js.
   - **Automatic Deployment** from GitHub repository.
   - **Scalability** for handling varying traffic.
   - **Serverless Functions** for backend logic.

### 2. **Finalize Application’s Interaction with Backend Services**
   - **Sanity CMS**: Ensured content fetching works correctly.
   - **Third-party APIs**: Verified secure API calls and proper handling of sensitive data.

## Environment Variable Configuration

### 1. **Secure API Keys, Database Credentials, and Sensitive Data**
   - Stored API keys and credentials securely using `.env` files.

### 2. **Configure Environment Variables in Vercel**
   - Set up environment variables in the Vercel platform for secure deployment.

## Staging Environment Setup

### 1. **Deploy the Application to Staging**
   - Pushed latest code to GitHub and linked a staging branch in Vercel.
   - Vercel triggered automatic deployment.

### 2. **Validate Deployment**
   - Verified build success through Vercel logs and checked the staging URL.
   - Tested all pages, features, and backend integrations for correctness.

### 3. **Troubleshoot**
   - Reviewed build logs and ensured environment variables were correctly configured.

## Staging Environment Testing

### 1. **Conduct Functional Testing**
   - Used **Cypress** to test workflows and **Postman** to validate API responses.

### 2. **Perform Performance Testing**
   - Analyzed load times and performance with **Lighthouse** and **GTmetrix**.

### 3. **Verify Responsiveness & Error Handling**
   - Tested the site across different screen sizes and ensured proper error handling.

### 4. **Document Test Results**
   - Recorded all test outcomes, performance benchmarks, and unresolved issues.

## Test Case Reporting

Test cases were documented in a CSV file with the following details:

| **Test Case ID** | **Description**           | **Steps**                                    | **Expected Result**      | **Actual Result**      | **Status** | **Remarks**            |
|------------------|---------------------------|----------------------------------------------|--------------------------|------------------------|------------|------------------------|
| TC001            | Validate product listing   | Open product page > Verify products          | Products displayed        | Products displayed      | Passed     | No issues found        |
| TC002            | Test API error handling    | Disconnect API > Refresh page               | Show fallback message    | Fallback message shown  | Passed     | Handled gracefully     |
| TC003            | Check cart functionality   | Add item to cart > Verify cart              | Cart updates correctly    | Cart updates correctly  | Passed     | Works as expected      |
| TC004            | Test form validation       | Submit form with empty fields               | Display error message    | Error message displayed| Failed     | Missing validation     |
| TC005            | Verify HTTPS connection    | Open site > Check HTTPS status              | HTTPS enabled             | HTTPS enabled          | Passed     | Secure connection      |

## Conclusion

On Day 06, the application was successfully deployed to a staging environment using Vercel. The application underwent functional, performance, and security testing, with all outcomes documented. The staging setup is now ready for validation before moving to the production environment.


# Food-Tunk

