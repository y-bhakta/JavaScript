# Admin Panel Dashboard

This project is a responsive **Admin Panel Dashboard** built using HTML, CSS (with Bootstrap), and JavaScript. It provides a modern, interactive interface for managing and visualizing employee data, with features such as dark mode, animated counters, data fetching, and dynamic charts.

---

## Features

### 1. **Responsive Layout**
- Uses Bootstrap's grid system and custom media queries ([css/media.css](css/media.css)) to ensure the dashboard looks great on all devices, from mobile to desktop.
- The sidebar (aside) collapses into a compact menu on smaller screens for better usability.

### 2. **Sidebar Navigation**
- The sidebar contains navigation buttons for Dashboard, Calendar, Teams, Activity, Messages, Reports, and Settings.
- Two sidebar modes: full and compact, toggled via the menu button.
- Sidebar adapts its appearance in dark mode.

### 3. **Dark Mode**
- Toggle switches in both the sidebar and header allow users to switch between light and dark themes.
- Dark mode is implemented by toggling a `dark` class on the `<body>`, which updates colors and styles throughout the UI ([css/style.css](css/style.css)).
- Both the sidebar and main content area adapt to dark mode for a consistent experience.

### 4. **Animated Counters**
- Four animated counters display key metrics: Total Employees, Job Applications, New Employees, and Subscription Rate.
- Counters increment smoothly from 0 to their target values using JavaScript for engaging visual feedback.

### 5. **Charts and Data Visualization**
- **Bar Chart:** Shows Employee Growth over several days using Chart.js.
- **Doughnut Chart:** Visualizes Employee Attendance (Present, On Leave, On Holiday, Absent).
- Charts are responsive and styled to match the dashboard's theme.

### 6. **Employee Table**
- Dynamically fetches employee data from [dummyjson.com/users](https://dummyjson.com/users) using the Fetch API.
- Displays employee details: ID, Image, Name, Username, Role, Gender, and Blood Group.
- Table rows are styled for clarity and adapt to dark mode.

### 7. **Search Bar**
- A search input with animated icon and button is included in the header for future extensibility.

### 8. **UI/UX Highlights**
- **Modern Design:** Clean, flat design with rounded corners and subtle shadows.
- **Interactive Elements:** Buttons and switches have hover and active effects for better feedback.
- **Accessibility:** Uses semantic HTML and ARIA attributes for better accessibility.
- **Performance:** Loads data asynchronously and minimizes DOM updates for smooth performance.

---

## File Structure

```
index.html
readme.md
css/
  bootstrap.min.css
  media.css
  style.css
img/
  logo2.jpg
js/
  app.js
  bootstrap.bundle.min.js
  jquery-3.7.1.min.js
```

- **index.html:** Main HTML file containing the dashboard structure.
- **css/style.css:** Custom styles for layout, dark mode, and components.
- **css/media.css:** Responsive design adjustments for different screen sizes.
- **js/app.js:** Handles dark mode toggling, animated counters, and fetching employee data.
- **img/logo2.jpg:** Logo used in the sidebar and header.
- **js/bootstrap.bundle.min.js, js/jquery-3.7.1.min.js:** Bootstrap and jQuery libraries for UI components and interactivity.

---

## How It Works

### Initialization

- On page load, the dashboard initializes counters and fetches employee data.
- Chart.js is used to render the bar and doughnut charts.

### Dark Mode

- Toggled via checkboxes in the sidebar and header.
- Adds/removes the `dark` class on `<body>`, switching styles for all components.

### Animated Counters

- JavaScript selects all elements with the `.count` class and animates their numbers up to the value in their `data-number` attribute.

### Employee Data Fetching

- Fetches user data from an external API.
- Dynamically creates table rows for each employee and inserts them into the table body.

### Sidebar Toggle

- The sidebar can be collapsed/expanded using the menu button for better usability on smaller screens.

---

## UI/UX Description

- **Sidebar:** Fixed on the left, with icons and labels for navigation. Collapses to icons only on small screens.
- **Header:** Contains the menu button, search bar, and dark mode toggle.
- **Status Cards:** Four cards at the top show key metrics with animated counters.
- **Charts:** Two charts visualize employee performance and attendance.
- **Employee Table:** Lists employees with images and details, styled for readability.
- **Dark Mode:** Provides a visually comfortable experience for low-light environments.

---

## Getting Started

1. **Clone or Download** the repository.
2. **Open `index.html`** in your browser.
3. **Explore** the dashboard, toggle dark mode, and view dynamic data and charts.

---

## Dependencies

- [Bootstrap 5](https://getbootstrap.com/)
- [jQuery 3.7.1](https://jquery.com/)
- [Chart.js](https://www.chartjs.org/)
- [Font Awesome](https://fontawesome.com/)

---

## Credits

- Employee data provided by [dummyjson.com](https://dummyjson.com/users).
- UI inspired by modern admin dashboard designs.

---

## License

This project is for educational and demonstration purposes.

## View Live

https://admin-pannel-js.vercel.app/
