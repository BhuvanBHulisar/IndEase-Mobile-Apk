# IndEase Consumer App - Installation Checklist

## Pre-Installation Requirements

### System Requirements
- [ ] Node.js 18+ installed
- [ ] npm or yarn installed
- [ ] Android Studio installed
- [ ] Android SDK installed (API 33+)
- [ ] JDK 17 installed
- [ ] React Native CLI installed globally
- [ ] Android emulator configured OR physical device connected

### Backend Requirements
- [ ] IndEase backend server running
- [ ] Backend accessible at http://localhost:5000
- [ ] Database connected and seeded
- [ ] Socket.IO enabled on backend

## Installation Steps

### Step 1: Navigate to Project
```bash
cd IndEase-Mobile-Apk/IndEaseConsumer
```
- [ ] Confirmed in correct directory

### Step 2: Install Dependencies
```bash
npm install
```
- [ ] All dependencies installed without errors
- [ ] No peer dependency warnings

### Step 3: Link Native Modules
```bash
npx react-native link react-native-vector-icons
npx react-native link @react-native-async-storage/async-storage
```
- [ ] Vector icons linked
- [ ] AsyncStorage linked

### Step 4: Verify Android Configuration
- [ ] Check `android/app/src/main/AndroidManifest.xml` exists
- [ ] Permissions are set (Internet, Camera, Storage)
- [ ] `usesCleartextTraffic="true"` is set

### Step 5: Configure Backend URLs
Edit `src/constants/api.js`:
- [ ] BASE_URL is correct (http://10.0.2.2:5000/api for emulator)
- [ ] SOCKET_URL is correct (http://10.0.2.2:5000 for emulator)
- [ ] For physical device: Updated to local IP address

### Step 6: Start Metro Bundler
```bash
npm start
```
- [ ] Metro bundler started successfully
- [ ] No errors in terminal
- [ ] Keep this terminal open

### Step 7: Run on Android
In a new terminal:
```bash
npm run android
```
- [ ] Build completed successfully
- [ ] App installed on device/emulator
- [ ] App launched without crashes

## Post-Installation Verification

### App Launch
- [ ] App opens to login screen
- [ ] No red error screens
- [ ] UI renders correctly

### Demo Login Test
- [ ] Click "Demo Login" button
- [ ] OR enter: demo@consumer.com / demo123
- [ ] Login successful
- [ ] Navigates to Home screen

### Home Screen Test
- [ ] User name displays correctly
- [ ] Stats cards show (Active Requests, Machines)
- [ ] "Create New Request" button visible
- [ ] Notification bell icon visible

### Navigation Test
- [ ] Bottom tabs visible (5 tabs)
- [ ] Can navigate to Machines tab
- [ ] Can navigate to Requests tab
- [ ] Can navigate to Chats tab
- [ ] Can navigate to Profile tab
- [ ] Can navigate back to Home tab

### Machine Management Test
- [ ] Navigate to Machines tab
- [ ] Click "Add Machine" button
- [ ] Form appears
- [ ] Can enter machine details
- [ ] Can save machine
- [ ] Machine appears in list

### Request Creation Test
- [ ] Navigate to Home
- [ ] Click "Create New Request"
- [ ] Can select machine
- [ ] Can enter issue description
- [ ] Can select urgency
- [ ] Can select date
- [ ] Can select time slot
- [ ] Can submit request

### Real-time Connection Test
Check Metro terminal logs:
- [ ] "Socket connected" message appears
- [ ] No socket connection errors
- [ ] Socket stays connected

### Profile Test
- [ ] Navigate to Profile tab
- [ ] User details display correctly
- [ ] Stats show correct numbers
- [ ] Menu items are clickable

### Logout Test
- [ ] Click Logout in Profile
- [ ] Confirmation dialog appears
- [ ] Confirm logout
- [ ] Returns to Login screen

## Troubleshooting Checklist

### If App Won't Build
- [ ] Run `cd android && ./gradlew clean && cd ..`
- [ ] Run `npm start -- --reset-cache`
- [ ] Try `npm run android` again

### If Metro Won't Start
- [ ] Kill any existing Metro processes
- [ ] Run `npm start -- --reset-cache`
- [ ] Check port 8081 is not in use

### If Socket Won't Connect
- [ ] Verify backend is running
- [ ] Check backend Socket.IO is enabled
- [ ] Verify URL in `src/constants/api.js`
- [ ] Check firewall settings

### If Images Won't Load
- [ ] Run `npx react-native link react-native-image-picker`
- [ ] Rebuild app: `npm run android`

### If Login Fails
- [ ] Verify backend is running
- [ ] Check backend URL is correct
- [ ] Check demo user exists in database
- [ ] Check network connectivity

## Performance Verification

### App Performance
- [ ] App launches in < 3 seconds
- [ ] Navigation is smooth (no lag)
- [ ] Lists scroll smoothly
- [ ] No memory leaks (check Android Studio profiler)

### Network Performance
- [ ] API calls complete in < 2 seconds
- [ ] Socket connection is stable
- [ ] Real-time updates work instantly

## Final Checks

### Code Quality
- [ ] No console errors in Metro
- [ ] No red error screens
- [ ] No yellow warning boxes (or minimal)
- [ ] All screens render correctly

### User Experience
- [ ] All buttons are clickable
- [ ] All forms are submittable
- [ ] All navigation works
- [ ] Loading states show correctly
- [ ] Error messages are clear
- [ ] Toast notifications work

### Documentation
- [ ] README.md reviewed
- [ ] SETUP.md reviewed
- [ ] PROJECT_SUMMARY.md reviewed
- [ ] All documentation is clear

## Sign-Off

### Developer Checklist
- [ ] All features implemented
- [ ] All screens tested
- [ ] No critical bugs
- [ ] Code is clean and commented
- [ ] Documentation is complete

### QA Checklist
- [ ] App installs successfully
- [ ] All features work as expected
- [ ] No crashes or freezes
- [ ] UI is responsive
- [ ] Performance is acceptable

### Deployment Checklist
- [ ] Debug APK builds successfully
- [ ] Release APK builds successfully
- [ ] App works on multiple devices
- [ ] Backend integration verified
- [ ] Ready for production

## Installation Status

**Date**: _______________
**Installed By**: _______________
**Status**: [ ] Success [ ] Issues Found
**Notes**: 
_______________________________________________
_______________________________________________
_______________________________________________

## Issues Found (if any)

| Issue | Severity | Status | Notes |
|-------|----------|--------|-------|
|       |          |        |       |
|       |          |        |       |
|       |          |        |       |

---

**Installation Complete**: [ ] YES [ ] NO

**Ready for Testing**: [ ] YES [ ] NO

**Ready for Production**: [ ] YES [ ] NO

---

*Last Updated: 2024*
