# Todo App

**Created by:** Juan David Franco

## Overview

A fully functional to-do list web application built with React, Redux, and React Router. This app allows users to manage their daily tasks with full CRUD (Create, Read, Update, Delete) functionality, filter options, and a contact form.

## Features

- ✅ Add new todo items
- ✅ Mark todos as completed with visual strikethrough
- ✅ Delete todos from the list
- ✅ Filter todos by:
  - All todos
  - Completed todos
  - Incomplete todos
- ✅ Contact form for user feedback
- ✅ Fully responsive design for mobile, tablet, and desktop
- ✅ State management with Redux Toolkit
- ✅ Client-side routing with React Router

## How to Use

### Adding a Todo
1. Navigate to the "Todos" page
2. Enter your task in the input field under "Add New Todo"
3. Click the "Add Todo" button
4. Your todo will appear in the list below

### Managing Todos
- **Complete a todo:** Click the checkbox next to the todo item
- **Delete a todo:** Click the red "Delete" button
- **Filter todos:** Use the filter buttons (All/Completed/Incomplete) to view specific todos

### Contact Form
1. Navigate to the "Contact" page
2. Fill in your first name, last name, email, and comments
3. Click "Submit"
4. A success message will appear confirming your submission

## Technologies Used

- **React** - Frontend library for building user interfaces
- **Redux Toolkit** - State management
- **React Router** - Client-side routing
- **React Bootstrap** - UI components and styling
- **Bootstrap** - CSS framework
- **SCSS** - CSS preprocessing for custom styles
- **Vite** - Build tool and development server

## Installation & Setup

1. Clone the repository:
```bash
   git clone https://github.com/YOUR-USERNAME/todo-app.git
```

2. Navigate to the project directory:
```bash
   cd todo-app
```

3. Install dependencies:
```bash
   npm install
```

4. Run the development server:
```bash
   npm run dev
```

## Future Improvements

1. **Persistent Storage:** Implement local storage or connect to a backend database so todos persist after page refresh
2. **Edit Functionality:** Add the ability to edit existing todo text instead of just deleting and re-adding
3. **Due Dates:** Allow users to add due dates to todos and sort by deadline
