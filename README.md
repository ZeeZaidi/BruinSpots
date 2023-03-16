How to run the app locally:

1. Create a new, empty repository. Clone this repository using the command:
   git clone https://github.com/ZeeZaidi/BruinSpots.git

2. If you do not already have it, install Node.js. You can download your system's version by following the
   instructions at:
   https://nodejs.org/en/download/

3. Once Node.js is installed, navigate to the directory where you cloned the repository. There should be a  
   subdirectory titled 'bruinspots'. Navigate into this directory using the command:
   cd bruinspots

4. Install the necessary dependencies by running:
   npm install

   Also, to ensure our star-rating component displays, run:
   npm install @mui/material @emotion/react @emotion/styled

5. Now that the necessary dependencies are installed, run:
   npm start

   This should open a browser window running our application locally.

Our Features:

1. When opening our app you will begin on the home page, which displays a name, image, and basic description  
    for each of 5 study locations. In addition an average rating for each location is displayed.
   This average rating is compiled by conducting a meaningful search through server data for the specific
   file associated with each location. This search gathers all the user reviews for said location, sums them,
   then divides by the total amount of user reviews to produce the average.

   Hence, this average rating is an example of a meaningful search through the server. It is re-calculated and displayed each time a new review is left by a user, and is thus displayed dynamically.

2. To leave a review, a user must be logged in, which they can do by pressing the "SIGN IN" button in the  
    upper right corner. A new user can register by entering their full name, email, and a password which are then
   uploaded and stored in the back end file system. When a user attempts to log in, their email and password combination must match what is stored on the server.

   The ability to create an account and log in (authenticate users) is a distinct feature of our application. It uploads, saves, and accesses data on the server that is given by a client.

3. Once they are logged in, a user may return to the homepage by pressing the 'Home' tab or the 'BRUINSPOTS' logo.
   Then, they can click on any location listed to access that study spot's designated web page. The user may leave a review (out of 5 stars) and write a comment, both of which are uploaded and stored on the back end. When a user writes a review, the page refreshes to dynamically display their review along with all others that have been left. This is done using a meaningful search through the specifc location's file on the server.

   The ability to leave a review is a distinct feature of our app. The front-end allows a user to enter a query conveniently. It then uploads data to the back end, meaningufully searches through all of the data for the given location's file, ane dynamically displays the result back to the user.

4. If a user finishes leaving reviews on all of the locations, and notices there is another study location not
   listed on our site, they can click the request tab to ask for said location to be added. On this request page, the front-end allows a user to enter their query coneveniently, before uploading and storing it on the back end.
   This data is stored in a dedicated file for us developers to read.

   The ability to leave a review is a distnct feature of our app. The user can input data in a clear manner, and this data is uploaded and saved on our server.

5. When the user is done leaving reviews and submitting requests, they can log out of their profile using the
   "LOGOUT" button
