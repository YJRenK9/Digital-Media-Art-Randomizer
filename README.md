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

You can use the images I provided, use your own, or use existing ones on the Internet.  No need to change ```index.html``` if you use the provided images.

If you choose not to use the ones provided, then you can use digital fan art, image edits, 3D models, game sprites, Minecraft builds, or anything relating to digital art.  The possibilities are endless.  Oh and make sure to change the image source in ```index.html```, otherwise, you'll see the panda glitch art upon start (unless you don't mind).

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

  Your array of objects should look something like this...

  ![AoO_Example](assets/ArrayofObjects.png) 
  
  **Make sure the titles, descriptions, and sources are appropriate to the digital artworks you've chosen.** 
  
  ### Part 3A: Template Literals (Multi-line Strings and String Interpolation)

  Before we implement the object properties into innerHTML, let me introduce you to template literals.  Template literals will come in handy because you get to display multiple lines of text in a paragraph element.  Also, it's more convenient than string concatenation as it usually requires less space.

  To make a multi-line string, type in the **`** key located between the ```esc``` key and the ```tab``` key.  You can type in whatever you want, but to make it multi-lined, you must press ```enter``` when you want to type more stuff on the next line.

  Here's an example of a multi-line string:
  ```js
  var multiLine = `Information and Computer Sciences
                   Creative Computational Media
                   School of Cinematic Arts`;

  console.log(multiLine);
  // Information and Computer Sciences
  // Creative Computational Media
  // School of Cinematic Arts
  ```
  This is equivalent to using three print statements to print multiple strings but uses fewer lines of code. 

  To perform string interpolation, you would put the variable inside of curly brackets right after the dollar sign.  It must be inside of the backticks, otherwise it won't work.  Here's how to code string interpolation:
  ```js
  var interpolateIO = `1 means ${true} or ON, 0 means ${false} or OFF`;
  var interpolateCattle = `There are ${4} kinds of farm animals in Minecraft.`;

  let virtues = ["Power", "Courage", "Wisdom"];

  var interpolateTri = `The three virtues:
                         - ${virtues[0]}
                         - ${virtues[1]}
                         - ${virtues[2]}`;

  console.log(interpolateIO);
  // 1 means true or ON, 0 means false or OFF

  console.log(interpolateCattle);
  // There are 4 kinds of farm animals in Minecraft.

  console.log(interpolateTri);
  // The three virtues:
  //  - Power
  //  - Courage
  //  - Wisdom
  ```
  Here's the link if you'd like to learn more about template literals:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

  Now that you know how to do multiline strings and string interpolation, let's apply that to innerHTML.  The paragraph tag with an id called "info" currently displays "Hello World".  Let's change "Hello World" to the title, description, and source of the digital artwork.  We would need to use a DOM variable we created earlier called ```desc```.  The innerHTML property should let us modify what's in the paragraph element.

  1. type in ```desc.innerHTML``` and assign it with a template literal

  This is the part where we type in HTML tags to improve the layout of the paragraph.  We want to make the information more readable by increasing the line spacing with ```<br>``` and bolding the property names with ```<b>```.  We also want to use string interpolation to get the properties of each object in the array.  

  2. type in 3 lines in the template string
      + The first line should have ```Title:``` in between the ```<b>``` tag followed by ```${artworkDescription[any number from 0 to 5].title}<br><br>```
      + The second line should have ```Description:``` in between the ```<b>``` tag followed by ```${artworkDescription[any number from 0 to 5].description}<br><br>```
      + The third line should have ```Source:``` in between the ```<b>``` tag followed by ```${artworkDescription[any number from 0 to 5].source}<br><br>```
    
     **Make sure the index you used for your array of objects is the SAME, otherwise, you'll display information from different digital artworks.**

### Part 3B: Create Randomizer Function

You're almost done with this project.  Things look visually complete, but the functionality to randomize digital media artworks is missing.  I already put the function name for the button's onclick event in the HTML file.  So all that's left is to create a function for it.

   1. create a function called ```changeArtwork```
   2. inside of the function, implement the following code snippet
   ```js
   // need floor function to "convert" float to int
   // multiplied by artworks.length to make the range go from 0 to artworks.length - 1
   randomInt = Math.floor(Math.random() * artworks.length);
   ```
   3. wip

## Stretch Goals

### Add more to overworld_layers.html

Add more else ifs to your if/else statement and use images such as DeepDark.webp, Deepslate_Cave.webp, Forest.webp, Jungle.webp, and Space.png 

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
   
