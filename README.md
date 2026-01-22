# Carlos Castro - Personal Website

This is my personal website built with Next.js, showcasing my portfolio, hobbies, and interests.

## About

This is a personal website that includes:

- **Home**: Personal information and social links
- **Hobbies**: A showcase of my passions including yoga, dancing, and breathwork practices
- **Sudoku**: An interactive Sudoku game

## Tech Stack

- [Next.js](https://nextjs.org) 16.1.4
- [React](https://react.dev) 19.2.3
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com) 4
- [React Icons](https://react-icons.github.io/react-icons)

## Getting Started

### Prerequisites

- Node.js 22+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone https://github.com/carlosconnected/carloscastro.git
cd carloscastro
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

The page will auto-update as you edit the files.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production application
- `npm run start` - Start the production server (after building)
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
carloscastro/
├── app/                    # Next.js app directory
│   ├── hobbies/           # Hobbies page
│   ├── sudoku/            # Sudoku game page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/             # React components
│   ├── PersonalInfo.tsx   # Personal info card
│   ├── SudokuBoard.tsx    # Sudoku game board
│   └── ...
├── lib/                    # Utility functions
│   └── sudoku.ts          # Sudoku logic
├── public/                 # Static assets
└── app/globals.css        # Global styles
```

## Features

- **Animated starfield background** - Slow-moving stars creating a space-like atmosphere
- **Interactive animations** - Profile image with flag-like wind animation, jumping social icons
- **Responsive design** - Works on desktop and mobile devices
- **Sudoku solver** - Complete Sudoku game with solve functionality

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [React Documentation](https://react.dev) - learn about React
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn about Tailwind CSS

## Deploy

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

Built with ❤️ by Carlos Castro
