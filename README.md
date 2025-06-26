# Health Coach System

A comprehensive health coaching platform with web, mobile, and backend components.

## Project Structure

```
health-coach-system/
├── back-end/           # Backend API server
│   ├── src/
│   │   ├── controllers/
│   │   ├── services/
│   │   └── types/
│   └── package.json
├── front-end/          # Frontend applications
│   ├── packages/
│   │   ├── mobile-app/ # React Native mobile app
│   │   ├── shared-ui/  # Shared UI components
│   │   └── web-app/    # React web application
│   └── package.json
└── README.md
```

## Features

- **Backend API**: Node.js/TypeScript backend with Express
- **Web Application**: React-based web interface
- **Mobile Application**: React Native mobile app
- **Shared UI Components**: Reusable components across platforms
- **Check-in System**: Health and wellness tracking

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- For mobile development: Expo CLI

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd health-coach-system
```

2. Install backend dependencies:
```bash
cd back-end
npm install
```

3. Install frontend dependencies:
```bash
cd ../front-end
npm install
```

4. Install package dependencies:
```bash
cd packages/mobile-app && npm install
cd ../shared-ui && npm install
cd ../web-app && npm install
```

### Running the Applications

#### Backend
```bash
cd back-end
npm run dev
```

#### Web App
```bash
cd front-end/packages/web-app
npm start
```

#### Mobile App
```bash
cd front-end/packages/mobile-app
npx expo start
```

## Development

This project uses a monorepo structure with shared components and types. The `shared-ui` package contains reusable components that are used across both the web and mobile applications.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License. 