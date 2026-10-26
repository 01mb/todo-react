# 📋 Task Board — Interactive Kanban Board

A lightweight, modern Kanban-style task management web application built with **React**, **Vite**, and **Tailwind CSS**. It provides an intuitive drag-and-drop interface for organizing tasks across custom workflow stages.

---

## ✨ Features

- **Drag-and-Drop Task Organization**: Seamlessly move tasks between columns (*To Do*, *In Progress*, *Review*, *Done*) using the HTML5 Drag & Drop API.
- **Quick Task Creation**: Add new tasks inline with autofocus and instant status assignment.
- **Task Deletion**: Easily remove completed or unwanted tasks.
- **Responsive Layout**: Designed to adapt gracefully from mobile screens to wide desktop viewports.
- **Clean, Modern Aesthetic**: Built with clean typography, balanced spacing, and subtle micro-interactions powered by Tailwind CSS and Lucide React icons.

---

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine (v18 or higher recommended).

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/task-board.git
   cd task-board
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Install required icon set (if not already present)**:
   ```bash
   npm install lucide-react
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Open in browser**:
   Visit `http://localhost:5173` in your browser.

---

## 📁 Project Structure

```text
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
```

---

## 🔮 Future Improvements

- [ ] **Data Persistence**: Store tasks in `localStorage` or sync with a Firebase/Supabase backend.
- [ ] **Custom Columns**: Allow users to add, rename, or delete columns.
- [ ] **Task Details**: Add priority badges, due dates, tags, and editable descriptions.
- [ ] **Column Reordering**: Drag columns to rearrange board layout.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).