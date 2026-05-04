# 🚀 IndEase Consumer App - Quick Start (5 Minutes)

## Prerequisites
✅ Node.js 18+  
✅ Android Studio  
✅ Android Emulator or Device  
✅ Backend running on port 5000

## Installation (3 commands)

```bash
# 1. Navigate to project
cd IndEase-Mobile-Apk/IndEaseConsumer

# 2. Install dependencies
npm install

# 3. Run the app
npm run android
```

That's it! The app will build and launch automatically.

## First Login

When the app opens:

1. Click **"Demo Login"** button

OR manually enter:
- Email: `demo@consumer.com`
- Password: `demo123`

## Quick Tour (2 minutes)

### 1. Home Screen
- See your dashboard
- View active requests
- Click "Create New Request"

### 2. Add a Machine
- Go to **Machines** tab
- Click **+** icon
- Add: "John Deere Tractor", Type: "Tractor", Year: "2020"
- Save

### 3. Create Service Request
- Go to **Home** tab
- Click **"Create New Request"**
- Select your machine
- Describe issue: "Engine making strange noise when starting"
- Select urgency: **Normal**
- Choose date and time
- Submit

### 4. View Request
- Go to **Requests** tab
- See your request with status "Searching for Experts"
- Status will update in real-time when experts respond

### 5. Check Profile
- Go to **Profile** tab
- See your stats
- Explore settings

## Common Commands

```bash
# Start Metro bundler
npm start

# Run on Android
npm run android

# Clear cache and restart
npm start -- --reset-cache

# View Android logs
npx react-native log-android

# Clean build
cd android && ./gradlew clean && cd ..
```

## Troubleshooting (30 seconds)

### App won't build?
```bash
cd android && ./gradlew clean && cd ..
npm run android
```

### Can't connect to backend?
Edit `src/constants/api.js`:
- For emulator: `http://10.0.2.2:5000`
- For device: `http://YOUR_LOCAL_IP:5000`

### Metro won't start?
```bash
npm start -- --reset-cache
```

## What's Next?

✅ **Explore Features**
- Create multiple machines
- Submit service requests
- Test real-time updates
- Try the chat feature

✅ **Read Documentation**
- `README.md` - Full documentation
- `SETUP.md` - Detailed setup guide
- `PROJECT_SUMMARY.md` - Complete feature list

✅ **Test Workflow**
1. Create request
2. Wait for quotes (simulated)
3. Approve quote
4. Make payment (test mode)
5. Track expert
6. Confirm completion
7. Rate expert

## Need Help?

- 📖 Check `README.md` for detailed docs
- 🔧 Check `SETUP.md` for setup issues
- ✅ Use `INSTALLATION_CHECKLIST.md` to verify setup
- 📊 See `PROJECT_SUMMARY.md` for features

## Key Features to Test

1. ✅ **Authentication** - Login/Register/Logout
2. ✅ **Machines** - Add/Edit/Delete
3. ✅ **Requests** - Create/View/Track
4. ✅ **Real-time** - Status updates via Socket.IO
5. ✅ **Chat** - Message experts
6. ✅ **Payments** - Razorpay integration
7. ✅ **Notifications** - Real-time alerts
8. ✅ **Profile** - View stats and settings

## Demo Credentials

**Consumer Account:**
- Email: `demo@consumer.com`
- Password: `demo123`

## Backend Connection

**Default URLs:**
- API: `http://10.0.2.2:5000/api` (Android emulator)
- Socket: `http://10.0.2.2:5000`

**For Physical Device:**
Replace `10.0.2.2` with your computer's IP address (e.g., `192.168.1.100`)

## Build for Testing

```bash
# Debug APK
cd android && ./gradlew assembleDebug

# Release APK
cd android && ./gradlew assembleRelease
```

APK location: `android/app/build/outputs/apk/`

---

## 🎉 You're Ready!

The app is fully functional and ready to use. Explore all features and test the complete consumer workflow from request creation to expert rating.

**Total Setup Time: ~5 minutes**

Happy testing! 🚀
