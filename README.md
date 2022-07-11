Week 3 Assignment: Life Tracker
Submitted by: Andrew Valerio

Deployed Application: Lifetracker Deployed Site

Application Features
Core Features
- [X] **The Nav Bar:** Implement customized views for users who are logged in vs not logged in.
  - [X] If the user is logged in, it should display a **Sign Out** button. 
  - [X] If no user is logged in, it should display **Login** and **Register** buttons
  - [X] Display a logo on the far left side, and contain links to the individual detailed activity page. 
- [X] **The Landing Page:** Display a large hero image and a brief blurb on what this application is about
- [X] **Login Page:** A form that allows users to login with email and password.
- [X] **Registration Page:** A form that allows the user to sign up with their email, password, username, first name, and last name.
- [X] When a user first authenticates, they should be redirected to an authenticated view (i.e the detailed activity page). When they sign out, all frontend data should be reset.
- [X] Users have access to an overview Activity page that show one summary statistic about each of the 3 types of activity tracked.
- [X] The API should have a `security` middleware that only allows authenticated users to access resources and only allows users to access resources about themselves. 
- [X] Users should have the ability to track at least **1** types of activities (i.e Nutrition, Exercise, Sleep, etc.). Each activity should be tracked on separate pages.
- [X] Deployed website with Heroku & Surge. 

**Detailed Activity Page:**
- [X] The detailed activity page should display a feed of all previous tracked activities.
- [X] The detailed activity should contain a form to contain relevant information. (i.e if tracking nutrition this form allows the user to capture calories, timestamp, image, category, etc.) 
- [X] The activity tracked should be given a unique id for easy lookup. 
https://github.com/AndrewValerio/tdd-lifetracker-starter/blob/e0ab03af64d1e186cf9e49b4b95d20f6a72a75c8/lifetracker-api/lifetracker_schema.sql#L5
### Stretch Features

Implement any of the following features to improve the application:
- [X] Each model (`nutrition`, `exercise`, and `sleep`) should also implement a `fetchById` method that queries the database for a record by its id and only serves it to users who own that resource. Create a new dynamic route on the frontend that displays detail about a single record. For instance, `nutrition/detail/:id` should show a page with all the information about a single nutrition item.
- [ ] Provide a dropdown that allows users to filter activity based on a certain attribute of any activity item.
- [ ] Calculate aggregate statistics based on time periods - such as daily, weekly, monthly aggregates.
- [ ] Create a page that shows all other users that use the life tracker application and allow users to follow each other.

![WalkthroughGIF](http://g.recordit.co/d1uV6QBYx6.gif)

https://www.loom.com/share/fa2a2829abd54650934b7d49348a4e3c

https://www.loom.com/share/7e52eb4a12164d98bf283a6bbd0dde57


### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?
[Yes, I was able to make significant progress even with a group of less nuumbers and having moments of having no group because of mentor meetings, the features such as login an register were pretty much taken care of in the vaccine lab along with their redirections.]

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
[I would have added the JWT token or finished deploying my website, I would've just focused on adding and fixing the core features essentialy.]
* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?
[I believe my demo went well, I kept my demo short and to the point, I didn't finished all my features but I liked how some of my peers worked on making their labs unique.]


### Open-source libraries used

- Add any links to open-source libraries used in your project.

### Shout out

Give a shout out to somebody from your cohort that especially helped you during your project. This can be a fellow peer, instructor, TA, mentor, etc.
[Folasade and Evans were a great help even though Evans joined on friday but they were both great help over the week.]
