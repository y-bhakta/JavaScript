# Recipe Book

## Overview

Recipe Book is a web application that allows users to browse, search, add, edit, and delete recipes. It features a modern UI built with Bootstrap and custom CSS, and leverages local storage and external APIs to manage and display recipes.

## Features

- **Home:** Displays an introduction and a selection of recipes fetched from an external API.
- **Add Recipe:** Users can submit their own recipes via a form. Recipes are saved in the browser's local storage.
- **View:** Shows all recipes added by the user, with options to edit or delete them.
- **Search:** Allows users to search recipes by name or cuisine type.
- **Edit/Delete:** Recipes added by the user can be updated or removed.

## Usage

1. **Open `index.html` in your browser.**
2. **Navigate using the header buttons:**
   - **Home:** View introduction and sample recipes.
   - **Add Recipe:** Fill out the form to add a new recipe.
   - **View:** See your added recipes, edit or delete them.
   - **Search:** Find recipes by name or cuisine.

## How It Works

### Data Sources

- **Sample Recipes:** Fetched from [dummyjson.com/recipes](https://dummyjson.com/recipes) and displayed on the Home and Search pages.
- **User Recipes:** Stored in browser local storage (`List2` key).

### Main Functions

- **Navigation Functions:**  
  - [`add()`](assets/js/app.js): Shows the Add Recipe form.  
  - [`home()`](assets/js/app.js): Shows the Home section.  
  - [`search()`](assets/js/app.js): Shows the Search section.  
  - [`view()`](assets/js/app.js): Shows the View section.

- **Recipe Fetching & Display:**  
  - Fetches recipes from the API and displays them in the Home and Search sections.
  - [`addrecipe(foods)`](assets/js/app.js): Renders recipes in the Search section.

- **Search:**  
  - Filters recipes by name or cuisine as the user types in the search box.

- **Add/Edit/Delete User Recipes:**  
  - Recipes added via the form are stored in local storage.
  - [`adding()`](assets/js/app.js): Renders user recipes in the View section.
  - [`change(idx)`](assets/js/app.js): Loads recipe data into the edit modal.
  - [`upchange(idx)`](assets/js/app.js): Updates the recipe in local storage.
  - [`handleDelete(index)`](assets/js/app.js): Removes a recipe from local storage.

## Technologies Used

- HTML, CSS (Bootstrap & custom styles)
- JavaScript (Vanilla)
- Local Storage
- [DummyJSON Recipes API](https://dummyjson.com/recipes)

## Getting Started

1. Clone or download the project files.
2. Open `index.html` in your browser.
3. Start adding, viewing, and searching recipes!

## License

This project is for educational purposes.

## Live View

https://final-js-practical.vercel.app/
