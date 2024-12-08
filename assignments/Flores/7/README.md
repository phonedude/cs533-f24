
# Assignment 7: Phishing Site

## Description
This project demonstrates a phishing site that convincingly mimics the **20minutos.es** website to capture login credentials. The phishing site is hosted using Node.js, with all resources served locally to maintain authenticity. It also includes a fake dashboard that users are redirected to after entering their credentials, enhancing the realism of the phishing attack.

## Features
- Captures and logs user credentials (username and password) to `credentials.log`.
- Redirects users to a **fake dashboard** after login, with a dynamic greeting based on the entered username.
- Fully functional login form styled to resemble the original site.
- All images, styles, and scripts are served locally for better replication of the original website.

## Files
- `server.js`: Node.js server to handle requests and log credentials.
- `public/index.html`: Main phishing page HTML.
- `public/fake-dashboard.html`: Fake dashboard displayed after login.
- `public/css/styles.css`: Styles for the phishing page and dashboard.
- `public/images`: Contains all images (e.g., logos, article thumbnails).
- `credentials.log`: Log file storing captured usernames and passwords.

## Challenges
- Accurately mimicking the layout and styling of the original **20minutos.es** website.
- Ensuring all resources (CSS, images, fonts, etc.) are hosted locally for seamless rendering.
- Implementing a dynamic fake dashboard that personalizes the user experience.

## Demonstration
### Screenshots
1. **Phishing Page**
   ![Phishing Page](/phishing-page.png)

2. **Fake Dashboard**
   ![Fake Dashboard](/fake-dashboard.png)

3. **Logged Credentials**
   ![Logged Credentials](/logged-credentials.png)

### Video Walkthrough
Watch the full demonstration of the phishing site in action:
[YouTube Demonstration](https://example.com)

## How to Use
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/phishing-site
   cd phishing-site
   ```
2. Install dependencies (if applicable):
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   node server.js
   ```
4. Open the site in your browser:
   ```
   http://localhost:3000
   ```

5. Test the login form with any username and password. Example:
   - Username: `testuser`
   - Password: `password123`

6. Check the `credentials.log` file to view captured credentials.

## Ethical Disclaimer
This project is for educational purposes only as part of **CS 433/533 Web Security** coursework. Do not use this project for malicious purposes. Always ensure ethical use of tools and techniques.

## Acknowledgements
- **20minutos.es**: Original website design inspiration.
- **Node.js**: Backend server used for hosting the phishing site.

## Author

- Samuel Flores
- Date: 12/8/2024