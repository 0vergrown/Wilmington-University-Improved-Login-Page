# Improved Wilmington University Login Page Redesign
This project addresses usability issues in the existing Wilmington University login page by ensuring better email validation, improving user experience with smoother transitions, and adding fun elements like animations to make the interface more engaging.
## Key Issues with the Current Login Page
**Weak Email Validation**: The current login page accepts any text as input, even when it’s not a valid email address.

**Domain Constraint**: Wilmington University only allows login with the @my.wilmu.edu domain, but the existing form doesn't enforce this.

**Reload on Transition**: When transitioning between the email and password input fields, the page unnecessarily reloads, leading to a clunky user experience.
## Improvements in This Redesign
**Email Validation**: Only accepts inputs formatted correctly as part of the Wilmington University domain (@my.wilmu.edu). This prevents users from entering invalid or incomplete emails.

**Smooth Transition**: A seamless 3D flip animation transitions from the email input screen to the password input screen, eliminating the need for a page reload.

**Fun Button Interaction**: The "Next" and "Enter" buttons slide across the login box and shake when incorrect information is entered. This adds a playful touch to the otherwise formal login process.

**Testing Mode**: For testing purposes, the email validation accepts "admin", and the password can be set to "correctPassword" to simulate the correct login flow.
## Features
**3D Flip Animation**: A visually engaging transition from the email input form to the password entry form.

**Sliding Button Animations**: If the email or password is incorrect, the buttons will shake and slide as a fun way to signal the error.

**Responsive Design**: The login box is centered and responsive, adapting to various screen sizes and devices.
## How It Works
1. **Email Entry**: Users must enter a valid email address ending in @my.wilmu.edu. If the email is invalid or does not match the required pattern, the "Next" button shakes and slides to the opposite side of the white box. A correct email (currently set to "admin" for testing) flips the login box to reveal the password field.

2. **Password Entry**: The user is prompted to enter their password. If the password is incorrect, the "Enter" button shakes and slides, similar to the email validation feedback.

3. **Button Animations**: The sliding buttons add a playful interaction to the login experience, moving left or right with incorrect input.
## File Structure
index.html – The main structure of the login page.

styles.css – Contains styles for layout, animations, and responsive behavior.

script.js – JavaScript to handle form validation, button animations, and the flip transition.
## How to Run the Project
1. Clone the repository:

git clone https://github.com/your-username/Wilmington-University-Improved-Login-Page.git


2. Open the HTML file: Open index.html in a browser to interact with the redesigned login page.
## Technologies Used
HTML5 – For page structure.

CSS3 – For styling, layout, animations, and responsive design.

JavaScript (Vanilla JS) – For client-side form validation, interactive animations, and transitions.
## Future Improvements

**Full Email Validation**: Currently, only the prefix before @my.wilmu.edu is validated. A future enhancement could add stricter email validation that checks the full address.

**Backend Integration**: Implement server-side validation and user authentication for full login functionality.

**Accessibility Enhancements**: Improve accessibility for users with disabilities, ensuring keyboard navigation and screen reader compatibility.
## License
This project is open-source and available under the MIT License.