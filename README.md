# Whatsapp-Clone
Hey there, this is a MERN stack real-time messaging app. I was learning Pusher and so, I decided to make this app. Note that the app would not be functional right now, as the vercel plan that I am using gives me a 504 timeout error. To fix this I will have to upgrade my plan. So, if you want to run this app, follow the steps below:-

i) Fork the repo and clone it in your pc. <br/>
ii) Then in the backend folder, make a config.js file. In this file, give the URL of your mongoDB database for connection.
iii) Then go to the website of pusher and make an account. After making an account, login to the account.
iv) There would be two options named Channels and Beams. Get started with channels. Scroll down and you would get a section with the name Node.js. Copy the appId and other stuff(everything inside const pusher) and paste it in the config.js file.
v) Now, go to the App.js file inside frontend/src folder. In the file there would be two useEffect hooks. In the second hooks, update the new Pusher with your own key and cluster.
vi) Now, in the frontend folder and backend folder install the packages by doing npm i in the terminal.
vii) Now, the script for backend is nodemon and script for frontend is npm start. 
viii) Enjoy! :)
