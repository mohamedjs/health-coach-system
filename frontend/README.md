# Health Coach System - Frontend

A modern cross-platform health coaching application built with React Native and Next.js.

## 🔦 About

The Health Coach System is a comprehensive wellness application that allows users to track their daily health metrics, mood, energy levels, and notes. Built as a monorepo supporting both web and mobile platforms using modern React technologies.

## ✨ Features

- 📱 **Cross-platform**: Works on iOS, Android, and Web
- 🎯 **Health Tracking**: Monitor mood, energy levels, and daily notes
- 🎨 **Modern UI**: Built with Tamagui for consistent design across platforms
- ⚡ **Fast Development**: Hot reloading and optimized build processes
- 🔒 **Type Safe**: Full TypeScript support

## 🛠 Technology Stack

### Core Framework
- **React 19.1** - Latest React with concurrent features
- **React Native 0.80** - Latest React Native for mobile apps
- **Next.js 15** - Latest Next.js for web applications
- **TypeScript 5.8** - Full type safety

### UI & Styling
- **[Tamagui](https://tamagui.dev)** 🪄 - Universal design system
- **[Solito](https://solito.dev)** - Cross-platform navigation
- **Expo Router** - File-based routing for Expo
- **React Navigation** - Navigation for React Native

### Development Tools
- **Yarn 4.5** - Package manager with workspaces
- **Expo SDK 53** - Development platform
- **Metro** - JavaScript bundler
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks

## 📦 Included packages

- [Tamagui](https://tamagui.dev) 🪄
- [solito](https://solito.dev) for cross-platform navigation
- Expo SDK
- Next.js
- Expo Router

## 🗂 Folder layout

The main apps are:

- `expo` (native)
- `next` (web)

- `packages` shared packages across apps
  - `ui` includes your custom UI kit that will be optimized by Tamagui
  - `app` you'll be importing most files from `app/`
    - `features` (don't use a `screens` folder. organize by feature.)
    - `provider` (all the providers that wrap the app, and some no-ops for Web.)

You can add other folders inside of `packages/` if you know what you're doing and have a good reason to.

> [!TIP]
> Switching from `app` to `pages` router:
>
> - remove `app` folder from `apps/next`
> - move `index.tsx` from `pages-example` to `pages` folder
> - rename `pages-example-user` to `user` and be sure to update `linkTarget` in `screen.tsx` to `user` as well
> - delete `SwitchRouterButton.tsx` component and remove it from `screen.tsx` and `packages/ui/src/index.tsx`
> - search for `pagesMode` keyword and remove it

## 📋 Prerequisites

- **Node.js 22+** (LTS recommended)
- **npm 10.8+** or **Yarn 4.5+**
- **Git**
- **iOS Simulator** (macOS only) or **Android Studio** (for mobile development)

## 🚀 Quick Start

### 1. Clone the repository
```bash
git clone <repo-url>
cd health-coach-system/frontend
```

### 2. Install dependencies
```bash
yarn install
```

### 3. Start development servers

#### Web Development (Next.js)
```bash
yarn web
```
Opens at `http://localhost:3000`

#### Mobile Development (Expo)
```bash
yarn native
```
Scan QR code with Expo Go app or run on simulator

#### iOS (macOS only)
```bash
yarn ios
```

#### Android
```bash
yarn android
```

## 🔧 Development Scripts

- `yarn web` - Start Next.js development server
- `yarn web:extract` - Run with Tamagui optimizer (slower but testing production)
- `yarn web:prod` - Build for production
- `yarn native` - Start Expo development server
- `yarn ios` - Run on iOS simulator
- `yarn android` - Run on Android emulator
- `yarn build` - Build all packages
- `yarn test` - Run tests
- `yarn lint` - Run ESLint
- `yarn check-tamagui` - Check Tamagui configuration

## UI Kit

Note we're following the [design systems guide](https://tamagui.dev/docs/guides/design-systems) and creating our own package for components.

See `packages/ui` named `@my/ui` for how this works.

## 🆕 Add new dependencies

### Pure JS dependencies

If you're installing a JavaScript-only dependency that will be used across platforms, install it in `packages/app`:

```sh
cd packages/app
yarn add date-fns
cd ../..
yarn
```

### Native dependencies

If you're installing a library with any native code, you must install it in `expo`:

```sh
cd apps/expo
yarn add react-native-reanimated
cd ..
yarn
```

## Update new dependencies

### Pure JS dependencies

```sh
yarn upgrade-interactive
```

You can also install the native library inside of `packages/app` if you want to get autoimport for that package inside of the `app` folder. However, you need to be careful and install the _exact_ same version in both packages. If the versions mismatch at all, you'll potentially get terrible bugs. This is a classic monorepo issue. I use `lerna-update-wizard` to help with this (you don't need to use Lerna to use that lib).

You may potentially want to have the native module transpiled for the next app. If you get error messages with `Cannot use import statement outside a module`, you may need to use `transpilePackages` in your `next.config.js` and add the module to the array there.

## 🏗 Project Structure

```
health-coach-system/frontend/
├── apps/
│   ├── expo/                 # React Native mobile app
│   │   ├── app/              # Expo Router pages
│   │   ├── assets/           # Images, fonts, etc.
│   │   └── package.json
│   └── next/                 # Next.js web app
│       ├── app/              # App Router pages
│       ├── public/           # Static assets
│       └── package.json
├── packages/
│   ├── app/                  # Shared app logic
│   │   ├── features/         # Feature-based organization
│   │   │   └── home/        # Home screen with check-in form
│   │   └── provider/        # Context providers
│   ├── config/              # Tamagui configuration
│   └── ui/                  # Shared UI components
│       ├── src/
│       │   ├── shared/      # Cross-platform components
│       │   ├── mobile/      # Mobile-specific components
│       │   └── web/         # Web-specific components
│       └── package.json
└── package.json             # Root package.json
```

## 🏥 Health Coach Features

### Check-in Form
- **Mood Selector**: Track daily mood with emoji-based selection
- **Energy Level Slider**: Monitor energy levels from 1-10
- **Notes Input**: Add personal notes and reflections
- **Form Validation**: Ensure data quality with TypeScript validation
- **Responsive Design**: Optimized for both mobile and web platforms

### Data Handling
- **API Integration**: Submit check-in data to backend API
- **Error Handling**: Graceful error handling with user feedback
- **Loading States**: Visual feedback during API calls
- **Local State Management**: Efficient form state management

## 🔧 Troubleshooting

### Common Issues

#### React Version Conflicts
If you encounter React version conflicts:
```bash
rm -rf node_modules apps/*/node_modules packages/*/node_modules
yarn cache clean
yarn install
```

#### Metro bundler issues
Clear Metro cache:
```bash
cd apps/expo
npx expo start -c
```

#### Tamagui extraction errors
Check Tamagui configuration:
```bash
yarn check-tamagui
```

#### Port conflicts
If port 3000 is in use, Next.js will automatically use the next available port (3001, 3002, etc.)

### Development Tips

1. **Hot Reloading**: Both web and mobile support hot reloading for fast development
2. **Component Development**: Use the shared UI package for consistent components
3. **Platform-specific Code**: Use Platform.OS checks for platform-specific implementations
4. **Debugging**: Use React DevTools for web and Flipper for mobile debugging

## 🚀 Deployment

### Web (Vercel)
- Root: `apps/next`
- Install command: `yarn set version stable && yarn install`
- Build command: `yarn build`
- Output dir: `.next`

### Mobile (Expo)
- Build for iOS: `cd apps/expo && eas build --platform ios`
- Build for Android: `cd apps/expo && eas build --platform android`
- Submit to stores: `eas submit`

## 📄 License

MIT License - see LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For issues and questions:
- Create an issue in the GitHub repository
- Check existing documentation
- Review Tamagui and Expo documentation for framework-specific issues
