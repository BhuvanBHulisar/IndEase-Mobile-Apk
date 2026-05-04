# IndEase Consumer App - Quick Setup Guide

## Prerequisites Check

Before starting, ensure you have:

- ✅ Node.js 18+ installed (`node --version`)
- ✅ npm or yarn installed (`npm --version`)
- ✅ Android Studio installed with Android SDK
- ✅ JDK 17 installed (`java --version`)
- ✅ React Native CLI installed (`npx react-native --version`)
- ✅ Android emulator or physical device ready

## Step-by-Step Setup

### 1. Install Dependencies

```bash
cd IndEase-Mobile-Apk/IndEaseConsumer
npm install
```

This will install all required packages including:
- React Navigation
- Axios
- Socket.IO Client
- React Native Razorpay
- Responsive utilities
- Image picker
- Date picker
- Vector icons

### 2. Link Native Modules

```bash
# Link vector icons
npx react-native link react-native-vector-icons

# Link AsyncStorage
npx react-native link @react-native-async-storage/async-storage
```

### 3. Configure Android

The Android configuration is already set up in `android/app/src/main/AndroidManifest.xml` with:
- Internet permission
- Camera permission
- Storage permissions
- Cleartext traffic enabled (for local development)

### 4. Start Backend Server

Make sure your IndEase backend is running on port 5000:

```bash
# In your backend directory
npm start
```

The backend should be accessible at `http://localhost:5000`

### 5. Start Metro Bundler

In the IndEaseConsumer directory:

```bash
npm start
```

Keep this terminal open.

### 6. Run on Android Emulator

Open a new terminal and run:

```bash
npm run android
```

Or:

```bash
npx react-native run-android
```

### 7. Test the App

Once the app launches:

1. Click "Demo Login" button
2. Or manually enter:
   - Email: `demo@consumer.com`
   - Password: `demo123`

## Common Issues & Solutions

### Issue: "Unable to connect to development server"

**Solution:**
```bash
# Reset Metro cache
npm start -- --reset-cache
```

### Issue: "Command failed: ./gradlew app:installDebug"

**Solution:**
```bash
cd android
./gradlew clean
cd ..
npm run android
```

### Issue: "SDK location not found"

**Solution:**
Create `android/local.properties`:
```
sdk.dir=/Users/YOUR_USERNAME/Library/Android/sdk
```
(Replace with your actual Android SDK path)

### Issue: "Cannot connect to backend"

**Solution:**
- Ensure backend is running on port 5000
- For emulator: Use `http://10.0.2.2:5000`
- For physical device: Use your computer's local IP (e.g., `http://192.168.1.100:5000`)

Edit `src/constants/api.js` to change the URL.

### Issue: "Socket connection failed"

**Solution:**
- Check that Socket.IO is enabled on backend
- Verify SOCKET_URL in `src/constants/api.js`
- Check firewall settings

### Issue: "Razorpay not working"

**Solution:**
- Ensure you have a valid Razorpay key
- Check backend payment configuration
- Test with Razorpay test mode first

## Verification Checklist

After setup, verify:

- [ ] App launches without errors
- [ ] Login screen appears
- [ ] Demo login works
- [ ] Home screen loads with user name
- [ ] Can navigate between tabs
- [ ] Can create a machine
- [ ] Can create a service request
- [ ] Socket connection established (check Metro logs)

## Development Tips

### Hot Reload
- Press `R` twice in the app to reload
- Or shake the device and select "Reload"

### Debug Menu
- Shake device or press `Cmd+M` (Mac) / `Ctrl+M` (Windows)
- Enable "Fast Refresh" for automatic reloading

### View Logs
```bash
# Android logs
npx react-native log-android

# iOS logs
npx react-native log-ios
```

### Clear Cache
```bash
# Clear Metro cache
npm start -- --reset-cache

# Clear Android build
cd android && ./gradlew clean && cd ..

# Clear npm cache
npm cache clean --force
```

## Building for Testing

### Debug APK
```bash
cd android
./gradlew assembleDebug
```

APK: `android/app/build/outputs/apk/debug/app-debug.apk`

### Release APK
```bash
cd android
./gradlew assembleRelease
```

APK: `android/app/build/outputs/apk/release/app-release.apk`

## Next Steps

1. ✅ Complete setup
2. ✅ Test demo login
3. ✅ Create a test machine
4. ✅ Create a test service request
5. ✅ Test real-time updates
6. ✅ Test chat functionality
7. ✅ Test payment flow (with test credentials)

## Need Help?

- Check the main README.md for detailed documentation
- Review the troubleshooting section
- Check React Native documentation: https://reactnative.dev
- Check backend API documentation

---

**Setup Time: ~10-15 minutes**

Good luck! 🚀
