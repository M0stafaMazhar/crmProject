# CRM Real Estate Project

Welcome to the CRM Real Estate project! This internally used application is designed to streamline property management tasks within our organization, offering a robust set of features and access controls tailored to different user roles. Leveraging Angular, this web-based platform provides a secure, organized, and user-friendly experience for both customers and internal stakeholders.

## User Roles

### User Role

- Designed for customers who have purchased a unit.
- Capabilities include browsing available units, tracking payments, viewing payment history, and generating payment receipts.

### Admin Role

- Assigned to employees within the company.
- Enables administrators to add, remove, and edit units and buildings.
- Authorized to create users with the "user" role.

### Superadmin Role

- Provides full access to the application.
- All privileges of the admin role.
- Additional capabilities, such as managing other admins and roles.

## Forms

### Login Form

- Allows users to securely log into the system.

### User Creation Form

- Admins use this form to create users, assigning them the "user" role.

### Role Creation Form

- Superadmins can create and manage roles, defining specific permissions for each.

## Pages

### User Page

- Tailored for users, providing a personalized view of purchased units and payment details.

### Admin Dashboard

- An intuitive dashboard for administrators, offering insights and tools for efficient management.

### Project Page

- Displays crucial project information, including location, description, available buildings, and their details.

## Hierarchy

- The project implements a structured hierarchy with buildings, floors, and units.
- Each building contains multiple floors, each with a set of units.
- Detailed descriptions and images accompany each building, floor, and unit.

## Security Measures

- Interceptors: Token and user role are dynamically attached to requests using interceptors.
- Guards: Implemented to restrict access to pages based on user roles and ensure users are logged in.

## Additional Features

- Interfaces: Used to provide clear typing for forms and define the structure of buildings, floors, and units.
- HTTP Service: Enables seamless communication with the server for sending and receiving requests.

Thank you for exploring the CRM Real Estate project. We hope this platform enhances property management efficiency within our organization. For any inquiries or feedback, please don't hesitate to reach out.

Happy coding!
