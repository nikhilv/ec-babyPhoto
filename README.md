ec-babyPhoto
============

Source code for a baby photo contest we ran at Electric Cloud. Employees submitted their baby and recent photos. All employees were asked to match baby photo to recent photo. Prize was given to best guesser.

How it looks:
![First page](https://raw.github.com/nikhilv/ec-babyPhoto/master/ghImages/firstPage.jpg "First page")

After some baby photos have been dropped a recent photo: 
![Drag and drop](https://raw.github.com/nikhilv/ec-babyPhoto/master/ghImages/dragAndDrop.jpg "Drag n drop")

Viewing the results:

![Results](https://raw.github.com/nikhilv/ec-babyPhoto/master/ghImages/results.jpg "Results")

How to use:                                                                                    
1. Install Vagrant and Virtualbox.
2. git clone this repository
3. vagrant up
4. Navigate to localhost:8008
 
Things you will need to change:
1. Place your own images in the img/baby and img/recent directories.
2. Hash the baby photo image names so contestants cannot figure out baby photo name by inspecting html.
3. Change the /results URL if you want to hide submissions.

Future enhancements:
- Use Foundation or Twitter Bootstrap to make web app look better.
 
Known issues:
- IE rendering issues