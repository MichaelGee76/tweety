# Tweety

Tweety is a social media application that allows users to post, edit, delete, and reply to short messages (Tweets). Users can follow others and view a personalized feed of their tweets.

## Core Features of Tweety

### Users can...

-   Create an account (to view content).
-   Log in (without verification).
-   Verify their email in the logged-in account (e.g., with a 6-digit code).

### After verification, users can...

-   Post tweets.
-   Edit and delete tweets (only the owner).
-   Reply to a tweet with a comment.
-   Follow and unfollow other users.
-   View a chronological feed (consisting of their own tweets and those of users they follow).

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/MichaelGee76/tweety
    ```
2. Navigate to the project directory:
    ```bash
    cd tweety
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Starting the Server

To start the server, run the following command:

```bash
npm start
The server will run on port 3011 by default. You can access it in your browser at http://localhost:3011.

API Endpoints
User Management
GET /api/v1/user/me: Get the logged-in user's information.
GET /api/v1/user: Get all user information.
POST /api/v1/user/register: Register a new user.
POST /api/v1/user/login: Log in a user.
PATCH /api/v1/user/me: Update user information.
DELETE /api/v1/user/me: Delete the user account.
POST /api/v1/user/verify-email: Verify the email address with a 6-digit code.
Tweets
POST /api/v1/tweets: Create a new tweet.
PATCH /api/v1/tweets/:id: Edit a tweet.
DELETE /api/v1/tweets/:id: Delete a tweet.
GET /api/v1/tweets: Get the tweets in the feed.
Comments
POST /api/v1/comments: Create a new comment.
PATCH /api/v1/comments/:id: Edit a comment.
DELETE /api/v1/comments/:id: Delete a comment.
Contributing
Contributions to the project are welcome! Please fork the repository and submit a pull request with your changes.

License
This project is licensed under the MIT License. For more details, see the LICENSE file.

Creators
This project was created by Freddy - https://github.com/fredwardp  and Michael - https://github.com/MichaelGee76
```
