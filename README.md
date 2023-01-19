# WorkDay-Scheduler

## A daily plannar to schedule and save your tasks by each hour of the workday

You can fill in your daily schedule and save your tasks. The calendar will automatically update the color of each time block depending on if that time is in the past, present, or future. 

- This webpage will allow me to stay organized and up to date on my daily work tasks.
- I built this to have a visual representation of my day and all the work I need to accomplish
- This will help me identify what time of day it is and the task I need to complete at that time.
- I learned how to dynamically add styling to portions of the html based on the time of day, using the day.js api and its various properties.


## Usage

[WorkDay Plannar Webpage](https://amess33.github.io/WorkDay-Scheduler/)

When you open the page you will see your daily plannar with today's date and 9 time slots beggining at 9am and running through the end of your work day at 5pm. Each time block will be color cooridinated with the current time of day. If a time block is past, the time block will be gray. If you are in the current hour of the day the timeblock will show red. All future time blocks will be green.

![Daily Planner blank page](./assets/images/Screenshot%202023-01-18%20at%204.54.53%20PM.png)

You can then click in each time block and enter a task and hit save. Each time you enter into the time block and hit the save icon your task will be stored in local storage so that if you refresh the page your task will not leave the planner.

![Daily Planner w/ tasks](./assets/images/Screenshot%202023-01-18%20at%204.56.39%20PM.png)
