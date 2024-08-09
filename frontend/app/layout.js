// app/layout.js

import './globals.css';  // Import global styles

export const metadata = {
  title: 'My Chat App',
  description: 'A chat application using Next.js App Router',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/dashboard">Dashboard</a></li>
              <li><a href="/login">Login</a></li>
            </ul>
          </nav>
        </header>
        <main>
          {children}  {/* This will render the specific page content */}
        </main>
        <footer>
          <p>&copy; 2024 My Chat App. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
