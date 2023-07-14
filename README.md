<br />
<p align="center">
  <div align="center">
    <img height="150" src="./documentation/logo-recipe.png" alt="recipe-mama" border="0"/>
  </div>
  <h3 align="center">Recipe's Mama (Recipe App)</h3>
  <p align="center">
    <a href="https://github.com/abubakar-adeni/hirejob_fe"><strong>Explore the docs »</strong></a>
    <br />
    <a href="https://react-food-fawn.vercel.app/">View Demo</a>
  </p>
</p>

## Table of Contents

- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Screenshots](#screenshots)
- [Related Project](#related-project)

# About The Project

Peworld is a hiring website to make it easier to connect workers with recruiters. Workers can create an account and display portfolios, work experiences, and skills on this website. Recruiters can create an account for searching and hiring workers based on company needs. Workers will be notified if they are hired by recruiter.

## Built With

These are the libraries and service used for building this backend API

- ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
- ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
- ![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
- ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
- [Sweetalert2](https://sweetalert2.github.io)

# Getting Started

## Prerequisites

You'll need these programs installed before proceeding to installation

- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/download)

This project requires [peworld-be](https://github.com/ikkair/peworld-be) to function properly, follow the steps provided in the readme to install and run the backend API

## Installation

Follow this steps to run the server locally

1. Clone this repository

```sh
git clone https://github.com/abubakar-adeni/hirejob_fe.git
```

2. Change directory to hirejob-frontend

```sh
cd hirejob_fe
```

3. Install all of the required modules

```sh
npm install
```

4. Create and configure `.env.local` file in the root directory, example env are provided in [.env.local.example](./.env.local.example)

```env
NEXT_PUBLIC_HOST=[ Backend URL ]
```

5. Run this command to run the server in development environment

```sh
npm run start
```

- Run this command to build this website into production ready

```sh
npm run build
```

# Screenshots

<img width="840" src="./documentation/all-devices.png" border="0" alt="Landing Page" />
<br>

<table>
 <tr>
    <td><img width="350px" src="./documentation/login.png" border="0" alt="Login" /></td>
    <td> <img width="350px" src="./documentation/register.png" border="0"  alt="Register" /></td>
  </tr>
  <tr>
    <td>Login</td>
    <td>Register</td>
  </tr>
  <tr>
    <td><img width="350px" src="./documentation/saved-food.png" border="0" alt="Profile" /> </td>
    <td><img width="350px" src="./documentation/addrecipe.png" border="0" alt="Hire" /> </td>
  </tr>
   <tr>
    <td>Edit Profile</td>
    <td>Add Recipe</td>
  </tr>
</table>

# Related Project

:rocket: [`Frontend Peworld`](https://github.com/abubakar-adeni/hirejob_fe)

:rocket: [`Backend Peworld`](https://github.com/kubil-ismail/hire_job_be)

:rocket: [`Demo Peworld`](https://hirejob-fe-tqqw.vercel.app/)
