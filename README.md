# Google Login MERN Project
  ## Prerequisites:
1. Node.js and npm installed: Download from https://nodejs.org  
2. A Google account for Google OAuth setup  
3. A MongoDB Atlas account: Create at https://www.mongodb.com/cloud/atlas  

 # Project Setup:

###1. Set Up Google OAuth
  
1. Go to Google Cloud Console( https://console.cloud.google.com ) 
2. Create a new project.  
3. Navigate to "APIs & Services" > "OAuth Consent Screen".  
   - Select "External" and fill in the required details.  
4. Go to "APIs & Services" > "Credentials".  
   - Click on "Create Credentials" and select "OAuth Client ID".  
   - Choose "Web Application" as the application type.  
5. Add the following under "Authorized JavaScript Origins":  
   - `http://localhost:5173`  
6. Add the following under "Authorized Redirect URIs":  
   - `http://localhost:8080/auth/google/callback`  
7. Save the configuration.  
8. Copy the **Client ID** and **Client Secret**.



### 2. Set Up MongoDB Atlas Database

1. Go to https://www.mongodb.com/cloud/atlas and sign in.  
2. Create a new cluster.  
3. In "Database Access", create a database user with a username and password.  
4. In "Network Access", add IP as `0.0.0.0/0` (to allow access from anywhere during development).  
5. Copy the MongoDB connection string. It looks like this:  
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```  
6. Replace `<username>` and `<password>` with your MongoDB credentials.


   

  ENV FILE MUST BE AS FOLLOWS:
   PORT=8080
   MONGODB_URL=<your-mongodb-connection-string>
   GOOGLE_CLIENT_ID=<your-google-client-id>
   GOOGLE_CLIENT_SECRET=<your-google-client-secret>
   JWT_SECRET=your_jwt_secret
   JWT_TIMEOUT=1d




  FrontEnd:
   npm create vite@latest frontend -- --template react
   npm i @react-oauth/google axios react-router-dom
   num run dev 

  BackEnd:
   npm i axios express cors dotenv googleapis jsonwebtoken mongoose
   node index.js ( or server.js)
   


