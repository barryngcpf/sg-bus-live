# 🚌 Singapore Bus Live Arrival App

Real-time bus arrival information for Singapore bus stops using LTA DataMall API.

## 📋 Prerequisites

**LTA API Key**: Register at [LTA DataMall](https://datamall.lta.gov.sg/content/datamall/en/request-for-api.html) to get your free API key

## 🌐 Deployment Options

### Option 1: Deploy to Netlify (Recommended - Free & Easy)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/sg-bus-live.git
   git push -u origin main
   ```

2. **Deploy on Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub account
   - Select your repository
   - Click "Deploy site"
   - Done! Your app will be live at `https://your-site-name.netlify.app`

3. **Use the app:**
   - Visit your Netlify URL
   - Enter your LTA API key
   - Start using!

### Option 2: Deploy to Vercel

1. **Push to GitHub** (same as above)

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Deploy
   - Your app will be live at `https://your-app.vercel.app`

### Option 3: Run Locally

#### Using Node.js

1. **Install Node.js**
   - Download from [nodejs.org](https://nodejs.org)

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   npm start
   ```

4. **Open in browser**
   - Navigate to `http://localhost:3000`

#### Using Python

1. **Install Python**
   - Download from [python.org](https://python.org)

2. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Start the server**
   ```bash
   python server.py
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5000`

## 📱 Features

- 📋 **Browse all bus stops** - Load and search through 5,000+ bus stops
- 🔍 **Filter by name/code** - Instant search to find your bus stop
- ⏱️ **Live arrivals** - Real-time countdown for next 3 buses
- 🚦 **Load indicators** - See if bus has seats or is full
- ♿ **Accessibility info** - Shows wheelchair-accessible buses
- 🔄 **Auto-refresh** - Updates every 30 seconds

## 📂 Project Structure

```
sg-bus-live/
├── index.html              # Main web app
├── netlify/
│   └── functions/
│       ├── bus-stops.js    # Serverless function for bus stops
│       └── bus-arrivals.js # Serverless function for arrivals
├── netlify.toml            # Netlify configuration
├── server.js               # Node.js backend (for local dev)
├── server.py               # Python backend (for local dev)
├── package.json            # Node.js dependencies
└── requirements.txt        # Python dependencies
```

## 🛠️ How It Works

### Production (Netlify/Vercel)
1. Frontend makes requests to serverless functions
2. Serverless functions proxy requests to LTA API
3. Data returned to frontend for display

### Local Development
1. Frontend makes requests to local backend server
2. Backend server proxies requests to LTA API
3. Data returned to frontend for display

## ❓ Troubleshooting

**"Failed to fetch" error:**
- **If deployed:** Make sure serverless functions are deployed correctly
- **If local:** Make sure backend server is running
- Verify your LTA API key is correct

**Netlify deployment issues:**
- Check build logs in Netlify dashboard
- Ensure `netlify.toml` is in the root directory
- Verify functions are in `netlify/functions/` folder

## 🚀 Quick Deploy Button

Click this button to deploy to Netlify instantly:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/YOUR_USERNAME/sg-bus-live)

## 📝 License

Free to use for personal projects. LTA data is subject to [LTA DataMall Terms](https://datamall.lta.gov.sg/content/datamall/en/terms-of-service.html).
