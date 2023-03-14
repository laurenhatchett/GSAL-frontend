# GO Save A Life 

Go Save A Life is a non-profit founded by Kristian Reynolds of Colorado . Kristian started the non-profit to help connect people who need a kidney transplant with those willing to donate one. Kristian knowns first hand about this experience because he donated his kidney to someone and saved their life. This application is a tool for Kristian to use in his mission. As a CRUD application - He will be about to create, update and delete profiles for individuals who are on the transplant waiting list. In addition, the application can be used by the public to view profiles and find information about the non-profits mission.

The application is deployed through Heroku and can be accessed here: https://gsal-app.herokuapp.com/

Forthcoming Features:
Multiple screen size styling|
Administrative log in/out as well as administrative only access to the CRUD features

Initial Wireframe:

![Screen Shot 2022-11-29 at 2 43 51 PM](https://user-images.githubusercontent.com/104706798/204654462-ea939208-1670-4925-acae-eb7a2f71c5bd.png)

Current Wireframe:

HOME PAGE

![Screen Shot 2022-11-29 at 2 45 10 PM](https://user-images.githubusercontent.com/104706798/204654679-92ab5de9-0edf-4b4d-862c-15110d0d38fc.png)

SMALLER SCREEN NAV 

![Screen Shot 2022-11-29 at 2 45 29 PM](https://user-images.githubusercontent.com/104706798/204654738-fcacd21e-958f-4c87-885b-ba3c7c3dd072.png)

VIEW ALL PUBLIC PROFILES

![Screen Shot 2022-11-29 at 2 46 39 PM](https://user-images.githubusercontent.com/104706798/204654937-0e2f4611-5825-4a31-a148-b670f45f9458.png)

VIEW SINGLE PROFILE

![Screen Shot 2022-11-29 at 2 46 51 PM](https://user-images.githubusercontent.com/104706798/204654988-4f3e540b-e14f-43f0-b24b-6a98eefd46b2.png)

CREATE PROFILE FORM

![Screen Shot 2022-11-29 at 2 55 37 PM](https://user-images.githubusercontent.com/104706798/204656866-9a51053d-d0ca-425f-8395-4b798322f278.png)


EDIT PROFILE FORM

![Screen Shot 2022-11-29 at 2 47 52 PM](https://user-images.githubusercontent.com/104706798/204655154-587d33e2-17c7-4d2c-b7a9-79a0957986a8.png)

ABOUT US 1 & 2

![Screen Shot 2022-11-29 at 2 48 11 PM](https://user-images.githubusercontent.com/104706798/204655194-3f571a6c-553f-46d5-ab58-a394795f1965.png)

![Screen Shot 2022-11-29 at 2 49 04 PM](https://user-images.githubusercontent.com/104706798/204655359-9bbec20a-a5f6-4182-94fd-30c3b0fd7317.png)


User Stories:

As a user I want to view the homepage and be able to easily navigate to the other pages of the application|

As a user I want to create a profile so that the public has access to the information|

As a user I want to view the all administrative profiles so that I can see the information and navigate to the other CRUD related tools.

As a user I want to edit the profile so that changes can be made when necessary.|

As a user I want to be able to delete a profile so that the application stays up to date.|

As I user I want to be able to view all the public profiles so that I can browse them and naviagate to individual profiles|

As a user I want to be able to view a single profile to have access to all the profile data. |

As a user I want to view the about us page to have access to more information about the non-profit organization.

Technologies Used:

Node.js |
Mongoose |
Mongodb Atlas |
Express |
React|
React Router 


> Models -including field names and their datatypes<br />

field | type | required
-- | -- | -- | 
imgURL | String | false | 
name | String | true | 
information | String | true | 
<br />


> A list of routes <br />

Http Method | action | Path | Description
-- | -- | -- | --
GET | index | /| To fetch all profiles
GET | new | /create| show form to enter new information
POST | create | / | To create a profile
GET | show | /:id | To view a specific profile
GET | edit | /:id/edit| To get form already filled in for user to change
PUT | update | :id | To edit a specific profile
DELETE | destroy | /:id | To delete a specific profile


Approach:

Create an application that would be a tool for the non-profit as well as a place to direct people to find out more about the organization.

Unsolved Problems:
redirecting after edit form is submitted - going to use Navigate

Installation Steps:

In the terminal do the following steps-

$ git clone {the url to the GitHub repo}


cd into the new folder and type-
$ npm install |
$ npm install cors |
npm install react- router-dom@6|
npm install react-icons|
$ npm start

The backend Github repo can be found here : https://github.com/AmandaFrisk/GSAL-backend

