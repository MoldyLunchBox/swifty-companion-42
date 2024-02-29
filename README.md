# Project Name

A mobile app built with React Native and Expo that utilizes the 42 API to search for user logins and display detailed information including profile picture, skills, completed projects, and more.

<div style="text-align:center">
  <img src="https://i.ibb.co/DtmhFsD/ezgif-6-b1e30b9427.gif" alt="Demo GIF" />
</div>

## Steps:

1. [x] **Setup Project:**
   - [x] Initialize a new React Native project using Expo.
   - [x] Set up a Git repository for version control.

2. [x] **Implement Views:**
   - [x] Design and create at least two views: one for searching 42 logins and another for displaying user information.
   - [x] Utilize React Navigation to navigate between views.

3. [x] **Integrate 42 API:**
   - [x] Create 42 api
   - [x] Create a `.env` file to store sensitive information like API keys.
   - [x] Configure Axios or Fetch to make HTTP requests to the 42 API.
   - [x] Implement OAuth2 authentication for secure access to user data.

4. [x] **Display User Information:**
   - [x] Fetch user data based on the entered login from the 42 API.
   - [x] Display profile picture, login, email, mobile, level, location, wallet, evaluations, skills with level and percentage, and completed projects.

5. [x] **Implement Navigation:**
   - [x] Allow users to navigate back to the search view from the user information view.

6. [x] **Bonus Features:**
   - [x] Consider implementing bonus features such as recreating tokens at expiration, improving design aesthetics, incorporating custom cells, or adding additional functionality to enhance the user experience.

7. [x] **Testing and Debugging:**
   - [x] Test the app thoroughly to ensure functionality and responsiveness across various devices.
   - [x] Debug any issues encountered during testing.

8. [ ] **Documentation and Presentation:**
   - [ ] Document the project, including installation instructions and any known issues.
   - [ ] Prepare a presentation highlighting the features, technologies used, and any challenges faced during development.

9. [x] **Version Control and Deployment:**
    - [x] Commit changes regularly to the Git repository.
    - [x] Ensure sensitive information is not exposed in the codebase.
    - [x] Deploy the app to a test environment for evaluation and feedback.

## How to Run the App:

To run the app locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install dependencies.
4. Update the `.env.example` file with your 42 API keys and rename it `.env`.
5. Run `expo start` or `npx expo start` to start the Expo development server.
6. Download Use the Expo client app on your mobile device to scan the QR code and open the app.

## Creating an Expo App:

If you want to create a similar app using Expo, you can follow these steps:

1. Install Expo CLI globally: `npm install -g expo-cli` (remove -g if you dont have the rights).
2. Create a new Expo project: `expo init your-project-name` or `npx expo init your-project-name`.
3. Follow the prompts to choose a template and set up your project.
4. Navigate to your project directory and start building your app.

## Simulator Used:

For Windows 10 users, LDPlayer was used as the mobile simulator due to its lightweight nature and efficiency.

