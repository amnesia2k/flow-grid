# FlowGrid

_Streamline your tasks, flow through your goals._

FlowGrid is a modern Kanban board application designed to simplify task management for teams and individuals. With drag-and-drop functionality, real-time updates, and a sleek interface, FlowGrid helps you visualize, organize, and achieve your goals.

---

## Features

- **Drag-and-Drop Tasks:** Move tasks between columns effortlessly with Dnd Kit.
- **User Authentication:** Secure login and registration powered by Appwrite.
- **Task Management:** Add, edit, delete tasks, and assign priority levels and due dates.
- **Real-Time Updates:** Stay in sync with Appwrite’s Realtime API.
- **Responsive Design:** Optimized for both desktop and mobile devices.
- **Data Persistence:** Store all tasks, columns, and user data using Appwrite Database.

---

## Tech Stack

### Frontend

- **ReactJS**: Component-based library for building the user interface.
- **DnD Kit**: Modern drag-and-drop interactions.
- **Tailwind CSS**: Utility-first CSS framework for styling.

### Backend

- **Appwrite**: Backend-as-a-service for authentication, database, storage, and real-time functionality.

### Additional Libraries

- **React Query (TanStack Query)**: For efficient data fetching and caching.
- **Lucide Icons**: For clean and customizable icons.
- **Sonner**: For user notifications.

---

## Installation

### Prerequisites

- Node.js (v16+ recommended)
- pnpm (for package management)
<!-- - Appwrite instance set up (can be local or hosted) -->

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/amnesia2k/flow-grid.git
   cd flowgrid
   ```

2. **Install Dependencies**

   ```bash
   pnpm install
   ```

3. **Set Up Environment Variables** Create a `.env` file in the root directory and add your Appwrite credentials:

   ```env
   VITE_APPWRITE_ENDPOINT=https://your-appwrite-instance.com/v1
   VITE_APPWRITE_PROJECT_ID=your_project_id
   ```

4. **Start the Development Server**

   ```bash
   pnpm dev
   ```

5. **Access the Application** Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Appwrite Configuration

1. **Create a Project**

   - Log in to your Appwrite dashboard and create a new project.

2. **Enable Authentication**

   - Add email/password authentication under the "Authentication" tab.

3. **Set Up Database**

   - Create a new collection named `tasks` with the following fields:
     - `title` (string)
     - `description` (string)
     - `status` (string) [Values: `todo`, `in-progress`, `done`]
     - `priority` (integer)
     - `due_date` (datetime)

4. **Enable Realtime API**

   - Add subscriptions for the `tasks` collection to enable real-time updates.

---

## Project Structure

```
src/
├── components/       // Reusable components (TaskCard, Column, etc.)
├── pages/            // Page components (Login, Dashboard, etc.)
├── hooks/            // Custom React hooks (useTasks, useAuth, etc.)
├── context/          // Context providers (state management)
├── utils/            // Helper functions (Appwrite integration)
├── styles/           // Global styles
├── App.js            // Main application entry point
├── index.js          // React DOM render
```

---

## Future Enhancements

- Add **team collaboration** with shared boards.
- Implement **drag-and-drop column reordering**.
- Integrate **analytics dashboard** for task insights.
- Add **dark mode** toggle for improved accessibility.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
