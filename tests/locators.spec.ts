/* before playwring can click or do anthing it needs a lotcator.
this is an specielc element amounfg undresds element present on the page.

Playwright needs the specifi element
playwrite needs to find the element uniquely
Everything you see on a webpage, is an element, and the locator is the addres that helps playwrite to find the element.


DOM - DOcument Object MOdel ( When you right lick on something and show the ELEMENT|S)
is like the blueprint of the page.
Everythig on screen is represented in the DOM. 

when yoy type a web apge, it makes a reuqest
e.g. amazon.com 


Browser --------> Request
Response <--------- server

In the Server response you get the below...

1. Html -   skeliton on the website. (structure)
2. CSS  -   Appearence of page, colours, alignment, fonts, spacing
3. JavaScript   - Adding the behavior to the page. i.e. What happens when you click a button or enter an ID/Password, and lick login.. without JS nothing will happen.

THe browser receives the response it.
1. Reads the HTML and it builds the DOM (internal representation of the web page), applies CSS and JavaScript so it then displays a working page.

We then internact with the webpage, I dont care about DOM or anything, I just want a web page, but PLAYWRIGHT interacts with the DOM 1st.

Playwriing will look for the button in DOM, it will find it by using locators.


WHAT IS A GOOD LOCATOR:

    A good locator helps playwright find te correct element quickly and REALIABLY
    poor locators may work today but fail tomorrow!!!

*/


