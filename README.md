📋 Task Board — Interactive Kanban Board

A lightweight, modern Kanban-style task management web application built with React, Vite, and Tailwind CSS. It provides an intuitive drag-and-drop interface for organizing tasks across custom workflow stages.

✨ Features

Drag-and-Drop Task Organization: Seamlessly move tasks between columns (To Do, In Progress, Review, Done) using the HTML5 Drag & Drop API.

Quick Task Creation: Add new tasks inline with autofocus and instant status assignment.

Task Deletion: Easily remove completed or unwanted tasks.

Responsive Layout: Designed to adapt gracefully from mobile screens to wide desktop viewports.

Clean, Modern Aesthetic: Built with clean typography, balanced spacing, and subtle micro-interactions powered by Tailwind CSS and Lucide React icons.

🛠️ Tech Stack

Framework: React

Build Tool: Vite

Styling: Tailwind CSS

Icons: Lucide React

🚀 Getting Started

Prerequisites

Ensure you have Node.js installed on your machine (v18 or higher recommended).

Installation

Clone the repository:

git clone https://github.com/your-username/task-board.git
cd task-board


Install dependencies:

npm install


Install required icon set (if not already present):

npm install lucide-react


Start the development server:

npm run dev


Open in browser:
Visit http://localhost:5173 in your browser.

📁 Project Structure

todo-app/
├── public/              # Static assets
├── src/
│   ├── assets/          # Icons, images
│   ├── App.css          # Global styling rules
│   ├── App.jsx          # Main Kanban board component & drag-drop logic
│   ├── index.css        # Tailwind CSS imports
│   └── main.jsx         # Application entry point
├── index.html           # HTML template
├── package.json         # Project metadata and dependencies
├── tailwind.config.js   # Tailwind configuration
└── vite.config.js       # Vite build configuration


🔮 Future Improvements

[ ] Data Persistence: Store tasks in localStorage or sync with a Firebase/Supabase backend.

[ ] Custom Columns: Allow users to add, rename, or delete columns.

[ ] Task Details: Add priority badges, due dates, tags, and editable descriptions.

[ ] Column Reordering: Drag columns to rearrange board layout.

📄 License

This project is licensed under the MIT License.