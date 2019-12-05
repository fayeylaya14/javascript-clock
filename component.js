const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const allHands = document.querySelectorAll('.hand');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDeg = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDeg}deg)`;

    const mins = now.getMinutes();
    const minsDeg = ((mins / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minsDeg}deg)`;

    const hour = now.getHours();
    const hourDeg = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;

    if(secondsDeg === 90){
        allHands.forEach(hand => hand.style.transition = 'none');
    } else {
        allHands.forEach(hand => hand.style.transition = '');

    }
}

setInterval(setDate, 1000);