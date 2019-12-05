# CREATING A JAVASCRIPT CLOCK WITH CSS (IN RELATION TO CSS ANIMATIONS LESSON)

1. First, create your `divs` in your `index.html` files

HTML:

````
<div class="clock">
   <div class="clock-face">
        <div class="hand hour-hand"></div>
        <div class="hand min-hand"></div>
        <div class="hand second-hand"></div>
    </div>
</div>
````

CSS:

````
.clock { /*style of the clock or the main circle*/
    width: 30rem;
    height: 30rem;
    border-radius: 50%;
    border: 20px solid white;
    margin: 50px auto;
    position: relative;
    padding: 2rem;
    box-shadow: 0 0 0px 4px rgba(0,0,0,0.1),
                inset 0 0 0 3px #efefef,
                inset 0 0 10px black,
                0 0 10px rgba(0,0,0,0.2);
}

.clock-face { /*inner div to contain the hands of the clock*/
    position: relative;
    width: 100%;
    height: 100%;
    transform: translateY(-3px);
}

.hand {
    width: 50%;
    height: 6px;
    background: #808080;
    position: absolute;
    top: 50%;
    /*serves as the movement of each hand of the clock.*/
    transform-origin: 100%;
    transform: rotate(90deg);
    transition: all 0.05s;
    transition-timing-function: cubic-bezier(0, 2.57, 0.58, 1);
}

.second-hand {
    background: #f76266;
}

/*for the colors and other styling, it's up to you to customize your own style.*/
````

3. Now for the Javascript codes:

   a. Initialize first a function called `setDate()` and also create global variables (we will use them later)
   
   ````
   const secondHand = document.querySelector('.second-hand');
   const minsHand = document.querySelector('.min-hand');
   const hourHand = document.querySelector('.hour-hand');
   const allHands = document.querySelectorAll('.hand');
   function setDate(){
      //.. 
   }
   ````
   
   b. create a new instance of date and store it to the variable `now`
   
   ````
   function setDate(){
       const now = new Date();
   }
   ````
   
   c. Now, we will get the seconds, minutes and hour and initialize it to our global variables.
   
   ````
    /*Getting the seconds by dividing it by 60 and multiplying it by 360(to get the degree) and adding it to 90 so that the result of   this will be the same with the movement of the seconds clock.*/
    const seconds = now.getSeconds();
    const secondsDeg = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDeg}deg)`; /*to initialize the current degree/second in the clock.*/

     /*do the same when getting the minites.*/
    const mins = now.getMinutes();
    const minsDeg = ((mins / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minsDeg}deg)`; /*to initialize the current degree/minute in the clock.*/

    /*for the hour, we need to multiply it by 12.*/
    const hour = now.getHours();
    const hourDeg = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDeg}deg)`; /*to initialize the current degree/hour in the clock.*/
    ````

*If you noticed, when executing this simple javascript code, you can find a glitch after 60 seconds. 
It returns back to 0 because of the transition: all 0.05s. Don't worry, we won't delete this attribute, 
we just have to add an if else function to solve this.*

SOLUTION:

````
if(secondsDeg === 90){
    allHands.forEach(hand => hand.style.transition = 'none');
} else {
    allHands.forEach(hand => hand.style.transition = '');

}
````

