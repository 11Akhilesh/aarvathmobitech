# Aarvath Mobitech Website

A modern React-based website for Aarvath Mobitech, showcasing solar-powered vehicles and company information.

## Features

- Responsive design that works on mobile and desktop
- Modern UI with Chakra UI components
- Smooth animations and transitions
- Contact form integration with EmailJS
- Dynamic navigation with React Router
- Logo slider showcasing partnerships

## Prerequisites

Before running this project, make sure you have:

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd aarvathmobitech
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your EmailJS credentials:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Development

To start the development server:

```bash
npm run dev
```

This will start the application on `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Project Structure

```
aarvathmobitech/
├── public/          # Static assets
├── src/
│   ├── components/  # Reusable components
│   ├── pages/       # Page components
│   ├── App.jsx      # Main application component
│   └── main.jsx     # Application entry point
├── index.html
└── package.json
```

## Technologies Used

- React 18
- Vite
- Chakra UI
- React Router
- EmailJS
- Framer Motion
- React Icons

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any queries regarding this project, please reach out through the contact form on the website.
