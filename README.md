# Digital-Media-Art-Randomizer
 
![CoverImage](assets/ExampleImage.png) 

For this project, you'll be coding a digital media art randomizer.  When you click on the randomize button, a random digital media artwork displays on the web page and its brief information.  For my examples, I chose panda glitch art, panda ASCII art, a 3D model of a bronze bear, a blue forest, a creative coding sketch of an eye, and DreamdowsVR.  You can use whatever images or gifs as long as it's related to digital art. 

## Objectives

Use **JavaScript** to display text and manipulate elements on webpages.  Use the DOM to have JavaScript communicate with HTML/CSS to change the image and text with a click of a button.    
  1. Create a gallery of digital media artworks
  2. Provide a title, description, and source for each digital media artwork
  3. Implement code for randomizer

## Prerequisites

To complete this project, students should have the following:
  + Everything you learned before this project
  + Advanced understanding of JavaScript.
    + array of objects
  + Basic understanding of Document Object Model (DOM)
    + document.getElementById()
    + innerHTML
    + img.src
    + style.display 

## Your Challenge

### Part 1: Setup

Make sure to have the following files:
  + index.html
  + style.css
  
Create the following files:
  + script.js
  + folder called "assets"
    + 6 images (or gifs) related to digital art   

You can use the images I provided, use your own, or use existing ones on the Internet.

If you choose not to use the ones provided, then you can use digital fan art, image edits, 3D models, game sprites, Minecraft builds, or anything relating to digital art.  The possibilities are endless.

If you choose to use your own digital media artwork, then briefly state how you made it instead of providing the source link.

### Part 2A: Creating Variables in JavaScript File (script.js) 

  1. link script.js to index.html at the end of the ```<body>``` tag
  2. create two variables that store document.getElementById()
      + first variable is called ```artwork``` and stores an id called ```dma```
      + second variable is called ```desc``` and stores an id called ```info```
      + don't forget the quotation marks around the id name 
  3. create an int variable ```randomInt``` that stores ```0```
  4. create an array called ```artworks``` that stores 6 string values
      + each string should start with ```assets/``` and end with ```file name``` and ```file extension```
      + e.g. ```"assets/panda-glitch-art.webp"``` 
     
### Part 2B: Creating an Array of Objects

  1. create an array of objects called ```artworkDescription```
  2. store 6 objects in the array
      + each object should contain ```title```, ```description```, and ```source```
        + title should be the name of the digital artwork
        + provide a brief description of the digital artwork
        + provide software tools used if you made the digital artwork
        + provide the URL link to the digital artwork if you didn't make it   
  3. add the following code snippet:
  ```js
  // used to change the image
  var layer = document.getElementById("imageLayer");

  // used to decrease the displayed y_position value
  var descendVeritcally = document.getElementById("descend");
  // used to increase the displayed y_position value
  var ascendVeritcally = document.getElementById("ascend");

  // used to display the y_postion on the webpage
  var verticalPosition = document.getElementById("getVerticalPosition");

  // used to get the name of the layer depending on the y_position
  var location_name = document.getElementById("layerName");
  ```
  
  (Mentors, have students copy and paste the above code snippet to their script.js file)
  
  3. create a variable called y_position that stores an int value of 5
  4. add the following code snippets
  ```js
  // have the left arrow "button" manipulate the webpage when clicked on
  descendVertically.addEventListener("click", function() {
    // continue coding steps 5 through 8 in here
  });
  
  // have the right arrow "button" manipulate the webpage when clicked on
  ascendVertically.addEventListener("click", function() {
    // continue coding steps 5 through 8 in here
  });
  ```
  
 (Mentors, have students copy and paste the above code snippet to their script.js file)
  
  5. decrement the y_position by 1 inside the unnamed function of descendVertically
  6. increment the y_position by 1 inside the unnamed function of ascendVertically
  7. Update the y_position on the webpage by using ```.innerHTML``` to verticalPosition.  
  8. Create an if/else statement.  The if/else statement should inculde: 
      + if y_position is greater than or equal to 20
        + layer.src would be Sky.jpg
        + location_name.innerHTML would be "Layer: Above the Clouds"
      + else if y_position is greater than or equal to 10
        + layer.src would be mountains.webp
        + location_name.innerHTML would be "Layer: Mountains"
      + else if y_position is greater than or equal to 5
        + layer.src would be plains.jpg
        + location_name.innerHTML would be "Layer: Plains"
      + else if y_position is greater than or equal to 2
        + layer.src would be Cave.webp
        + location_name.innerHTML would be "Layer: Caves"
      + else if y_position is greater than or equal to 0
        + layer.src would be Lava_Cave.webp
        + location_name.innerHTML would be "Layer: Lava Caves"
      + else
        + layer.src would be The_Void.webp
        + location_name.innerHTML would be "Layer: Void"
        
layer.src represents the image source, which is used to change the image.  location_name.innerHTML is used to change the text on the webpage.  Remember to use the proper file paths for your images.  

### Part 3B: 2nd JavaScript File (script.js)

## Stretch Goals

### Add more to overworld_layers.html

Add more else if's to your if/else statement and use images such as DeepDark.webp, Deepslate_Cave.webp, Forest.webp, Jungle.webp, and Space.png 

### Add CSS to your website

| CSS  | Description |
| ------------- | ------------- |
| @import url | imports other stylesheets, including custom fonts, into an existing CSS file |

We'll use `@import url("#");` to import a custom font into this project.  The "#" represents a website link to a custom font.  Like any programming language, `@import url("#");` must be used at the very top of your CSS file.

Side note: URL stands for uniform resource locator

  1. create a CSS file called style.css  
  2. link your CSS file to both of your HTML files by doing the following in the ```<head>``` tag:
  ```html
  <!-- enables the CSS file to format and decorate the webpage -->
  <link rel="stylesheet" href="style.css">
  ```
  3. import the minecrafttia font by typing in the following:
  ```css
  /* minecraft font is ready to be used */
  @import url("https://fontlibrary.org//face/minecraftia");
  ```
This will only make the minecraftia font available to use for your webpage. So, to change the default font to the minecraftia one, you must also change the font-family attribute for certain CSS selectors.    
  4. give the following attributes to the body selector
        + backgroud image is dirt_background.jpg
        + font-family is MinecraftiaRegular
  5. give the following attributes to the h1 selector
        + color is white
        + text align is center
  6. give the following attributes to h2 and h3 selectors
        + color is white
        + **Hint:** you can either create 2 separate selectors or merge them into one selector
  
  CSS template of 2 selectors in 1:
  ```css
  selector1, selector2 {
    attribute: value;
  }
  ```
  7. give the following attributes to the pre selector
      + color is white
      + font family is MinecraftiaRegular
      + font size is larger
    
The reason why we update the font family to the pre tags is because the font from console.log() cannot be changed.  So, we must change the JavaScript text via the pre selector.
  
  8. create a class selector called centerElements, and the the following attributes should have:
      + display is block
      + text align is center
      + margin left is auto
      + margin right is auto
  9. create an 'a' selector and give the following attributes:
      + text align is center
      + color is rgb(0, 255, 0)
      + background color is gray
      + font size is 21px
      + text decoration is none (no underline for links)

Don't forget to add divs in your HTML files

### Make hover animations for links

You learned how to color the text of the link, give it a background color, and change its font size.  You also learned how to position the link.
```css
a {
    color: rgb(0, 255, 0);
    background-color: gray;
    font-size: 21px;
    text-align: center;
    text-decoration: none;
}
```
Now try making the link's text color white and have it change to orange if the mouse cursor is hovering over it.

### Create an input box instead of arrow "buttons"

The advantage of having arrow "buttons" is having more user interaction.  The disadvantage is it can take a lot of time to go through a large range of numbers(unless if your variable can increment/decrement by a large amount).  A way around this disadvantage is by making the y_position range smaller.  But in Minecraft, going deep underground takes more than a few blocks.  So, an input box lets you type in a number and display the result in seconds.  You could create a ```<form>``` tag but that would redirect to a webpage.  Instead of going through that hassle, you can create an input tag and a button tag.  
Although it's easy to implement an input box, you'll deal with more test cases.  Like most programming languages, input returns a string value.  Because of this, you must check if the input contains letters or other non-numeric characters.  If it is, then display an error message.  Otherwise, convert the input value into a number.  In order to compare your input value with numbers, it must be converted to a number.          

### Create another webpage of Minecraft coding references

Apply conditional operators (<, >, <=, >=, ==, !=) to ranking minecraft armor.  Apply the &&(and) and the ||(or) logical operators to when the player is able to go to sleep.  Those conditions are when it's night time or there's a thunderstorm and when there's no hostile mobs nearby.  Apply the !(not; negation) logical operator to when the mob is not hostile, the iron golem and snow golem won't attack that mob.  No if/else statements are invovled, however, try to output text to the webpage via a JavaScript file.  You can also apply int, float, and string variables to the rest of the minecraft images provided in the images zip file.  Not to mention, try to include "\n" to your JS files.   
   
