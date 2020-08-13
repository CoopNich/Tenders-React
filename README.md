
# Tenders
  Tenders is a cocktail recipe app that allows users to search the web for new and exciting cocktails, while also allowing them to create and edit their own cocktails. 

## Table of Contents
  * [Features List](#features-list)
  * [Technologies Used](#technologies-used)
  * [Installing and Launching Tenders](#instructions-for-installing-tenders)
  * [Planning Documentation](#planning-documentation)
    * [Entity Relationship Diagram](#entity-relationship-diagram)

## Features List

### Search Cocktails
  Users can use the search bar in the navigation component to search for new cocktails by name or liquor type.

![Add a Task](/src/media/search_cocktail.PNG)

### Saved Cocktails
  Whether the user has created their own cocktails, or saved them from the web, they will have a collection of cocktails in their "My Cocktails" section

![Add a Step](/src/media/mycocktails.PNG)
### Viewing, Editing, or Deleting Cocktails
  From their list of cocktails, a user can delete cocktails. They can also click on any cocktail to view the recipe and instructions. If they decide to edit the instructions, name, or ingredients, they may do so by simply clicking on that section of the detail. 

![Connect a Step](/src/media/cocktaildetails.PNG)
![Connect a Step](/src/media/editcocktail.PNG)
## Technologies Used
  ### Front End
    React.js
    JavaScript
    HTML
    CSS
    Cloudinary
  
  ### Back End
    Python
    Django 

## Instructions for Installing Tenders
  Before installing Tenders, visit the [Tenders API](https://github.com/coopnich/tenders-django) repository, and follow the README to install and run Tender's Django REST API

  ----------------

  Clone this repo on your personal machine using the following command in your terminal
  ```sh
    git clone git@github.com:coopnich/tenders-react.git
  ```

  Install the NPM dependencies for this project using the following commands
  ```sh
    cd tenders
    npm install
    npm install react-router-dom
  ```
 
  After installing dependencies, type
  ```sh
    npm start
  ```

  Now that the server is up and running, you can open an internet browser and access the application
  ```sh
    http://localhost:3000/
  ```

## Planning Documentation

### Entity Relationship Diagram
![Tenders ERD](/ERD.PNG)

  

  This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).