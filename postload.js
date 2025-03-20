const MarioObj = document.getElementById("Mario");
const DonkeyKongObj = document.getElementById("Donkey Kong");
const LinkObj = document.getElementById("Link");
const SamusObj = document.getElementById("Samus");
const YoshiObj = document.getElementById("Yoshi");
const KirbyObj = document.getElementById("Kirby");
const FoxObj = document.getElementById("Fox");
const PikachuObj = document.getElementById("Pikachu");
const LuigiObj = document.getElementById("Luigi");
const NessObj = document.getElementById("Ness");
const CaptainFalconObj = document.getElementById("Captain Falcon");
const JigglypuffObj = document.getElementById("Jigglypuff");

// Display objects
const zNameObj = document.getElementById("zName");
const zImageObj = document.getElementById("zImage");
const zDateRangeObj = document.getElementById("zDateRange");
const zDescriptionObj = document.getElementById("zDescription");

// Put buttons in array
const charButtonsArray = Array.from(document.querySelectorAll(".charButton"));

// Close mode
const displayAreaObj = document.getElementById("DisplayArea");
const helpAreaObj = document.getElementById("HelpArea");
const closeButtonObj = document.getElementById("closeButton");
const closeHelpButtonObj = document.getElementById("helpCloseButton");
const helpButtonObj = document.getElementById('helpButton');
const closeErrorButtonObj = document.getElementById('errorCloseButton');
const errorAreaObj = document.getElementById("ErrorArea");

// Get all buttons to call one central function
MarioObj.addEventListener('click', function () {
    displayZodInfo('Mario');
});
DonkeyKongObj.addEventListener('click', function () {
    displayZodInfo('Donkey Kong');
});
LinkObj.addEventListener('click', function () {
    displayZodInfo('Link');
});
SamusObj.addEventListener('click', function () {
    displayZodInfo('Samus');
});
YoshiObj.addEventListener('click', function () {
    displayZodInfo('Yoshi');
});
KirbyObj.addEventListener('click', function () {
    displayZodInfo('Kirby');
});
FoxObj.addEventListener('click', function () {
    displayZodInfo('Fox');
});
PikachuObj.addEventListener('click', function () {
    displayZodInfo('Pikachu');
});
LuigiObj.addEventListener('click', function () {
    displayZodInfo('Luigi');
});
NessObj.addEventListener('click', function () {
    displayZodInfo('Ness');
});
CaptainFalconObj.addEventListener('click', function () {
    displayZodInfo('Captain Falcon');
});
JigglypuffObj.addEventListener('click', function () {
    displayZodInfo('Jigglypuff');
});
helpButtonObj.addEventListener('click', function () {
    displayZodInfo('helpButton')
});

// Play audio with delay function
const allAudios = document.querySelectorAll('audio');
function playAudio(whichSound, delay = 0) {
  allAudios.forEach(thisAudio => {
    thisAudio.pause();
    thisAudio.currentTime = 0;
  });

  setTimeout(() => {
    document.getElementById(whichSound).play();
  }, delay);
}

// Display zod info function
function displayZodInfo(whichOne) {
    zNameObj.innerHTML = whichOne;
    switch (whichOne) {
        case 'Mario':
            zImageObj.src = 'Char_Images/Mario.png';
            zDateRangeObj.innerHTML = 'December 22nd - January 19th';
            zDescription.innerHTML = "It’s Super Mario! A hero to all, and someone who can always be counted on to brighten everyone’s faces with a smile. No matter when the time calls for it, he’ll always come through to help those in need, for no other reason than because he can. There’s no one more reliable than good ol’ Mario!";
            removeHideMe(displayAreaObj, 250);
            for (let i = 0; i < charButtonsArray.length; i++) {
                charButtonsArray[i].classList.replace("charButton", "disableMe");
            }
            playAudio('MarioSnd', 250)
            break;
        case 'Donkey Kong':
            zImageObj.src = 'Char_Images/Donkey Kong.png';
            zDateRangeObj.innerHTML = 'January 20th - February 18th';
            zDescription.innerHTML = 'DK, the king of swing! A fun-loving ape who loves to throw down with a party, he can quickly switch to a fit of rage and throw hands with anyone who threatens those he loves. He’s the last thing- primate or person- that you ever want to upset, because despite his loose exterior, there’s no one who will fight harder to protect his family and those he holds dear.';
            removeHideMe(displayAreaObj, 500);
            for (let i = 0; i < charButtonsArray.length; i++) {
                charButtonsArray[i].classList.replace("charButton", "disableMe");
            }
            playAudio('Donkey KongSnd', 250)
            break;
        case 'Link': zImageObj.src = 'Char_Images/Link.png';
            zDateRangeObj.innerHTML = 'Febuary 19th - March 20th';
            zDescription.innerHTML = 'Link, the hero of time! With a cool, serious look almost never leaving his face, Link is well known for his lack of expression- both physically and verbally. But with his calm demeanor comes courage unlike any other, one willing to stand his ground in the face of any adversity and come out unscathed. To those who know of Link’s heroic courage, he is always someone who can be relied on when he’s needed.';
            removeHideMe(displayAreaObj, 250);
            for (let i = 0; i < charButtonsArray.length; i++) {
                charButtonsArray[i].classList.replace("charButton", "disableMe");
            }
            playAudio('LinkSnd', 250)
            break;
        case 'Samus':
            zImageObj.src = 'Char_Images/Samus.png';
            zDateRangeObj.innerHTML = 'March 21st - April 19th';
            zDescription.innerHTML = 'Samus, the galactic bounty hunter! A woman who travels across the stars to take down galactic threats all by herself, Samus can stand up to anything that’s in her way. Her adventures are never easy, and she’s endured plenty of hardship throughout her life, but she never lets her limits define her and somehow always finds a way to survive, even in the roughest of times- Even while exploring dangerous, unexplored planets.';
            removeHideMe(displayAreaObj, 250);
            for (let i = 0; i < charButtonsArray.length; i++) {
                charButtonsArray[i].classList.replace("charButton", "disableMe");
            }
            playAudio('SamusSnd', 250)
            break;
        case 'Yoshi': zImageObj.src = 'Char_Images/Yoshi.png';
            zDateRangeObj.innerHTML = 'April 20th - May 20th';
            zDescription.innerHTML = 'Yoshi, the lovable green dinosaur! A true companion for life, Yoshi is a loyal dinosaur who never turns his back on his friends or fellow dinos. He’s a pure, innocent soul whose loyalty will have him follow someone to the end of the earth- Even if they lead him off a cliff! But to Yoshi, that’s just part of life, but a few bad apples won’t spoil his unending devotion to those he holds dear.';
            removeHideMe(displayAreaObj, 250);
            for (let i = 0; i < charButtonsArray.length; i++) {
                charButtonsArray[i].classList.replace("charButton", "disableMe");
            }
            playAudio('YoshiSnd', 250)
            break;
        case 'Kirby': zImageObj.src = 'Char_Images/Kirby.png';
            zDateRangeObj.innerHTML = 'May 21st - June 21st';
            zDescription.innerHTML = 'Kirby, the pink puffball! Despite the innocent appearance, Kirby is actually the biggest menace, but that’s a side of him you never want to see! Both of his main hobbies include eating or sleeping, and when something gets in the way of his peaceful lifestyle…It’s never pretty, to say the least. Kirby is never someone to be messed with, but he never deserves being messed with either, because all he wants to do is live his life in uninterrupted bliss.';
            removeHideMe(displayAreaObj, 250);
            for (let i = 0; i < charButtonsArray.length; i++) {
                charButtonsArray[i].classList.replace("charButton", "disableMe");
            }
            playAudio('KirbySnd', 250)
            break;
        case 'Fox': zImageObj.src = 'Char_Images/Fox.png';
            zDateRangeObj.innerHTML = 'June 22nd - July 22nd';
            zDescription.innerHTML = 'Fox, the space pilot! Fox leads a group of space marines through constant danger for the sake of defeating evil. Fox knows what has to be done, and he’ll never back down from what he believes in, and that conviction allows the people around him to trust in his judgement and lead them to a better tomorrow. Fox is the epitome of a true leader, a title he’s more than earned his right to.';
            removeHideMe(displayAreaObj, 250);
            for (let i = 0; i < charButtonsArray.length; i++) {
                charButtonsArray[i].classList.replace("charButton", "disableMe");
            }
            playAudio('FoxSnd', 250)
            break;
        case 'Pikachu':
            zImageObj.src = 'Char_Images/Pikachu.png';
            zDateRangeObj.innerHTML = 'July 23rd - August 22nd';
            zDescription.innerHTML = 'Pikachu, the perfect Pokémon partner! An adorable companion, while it takes a while to warm up to its trainer, it’s hard to find a more loyal friend than a Pikachu. Despite how it may sometimes seem, since Pikachu tends to send an electric shock through its friends sometimes, Pikachu is a fierce and devoted friend who will stick with its trainer through thick and thin.';
            removeHideMe(displayAreaObj, 250);
            for (let i = 0; i < charButtonsArray.length; i++) {
                charButtonsArray[i].classList.replace("charButton", "disableMe");
            }
            playAudio('PikachuSnd', 250)
            break;
        case 'Luigi': zImageObj.src = 'Char_Images/Luigi.png';
            zDateRangeObj.innerHTML = 'August 23rd - September 22nd';
            zDescription.innerHTML = 'Luigi, the green missile! While he may appear weak and cowardly, Luigi is someone who never gives up in the face of adversity. Even if it looks like he’d be the first one to run away, Luigi always stands his ground and never gives up, proving his worth in unique ways only he can. His friends and family know that while his first instinct may be to run from danger, he can always be counted on to help those who are in need.';
            removeHideMe(displayAreaObj, 250);
            for (let i = 0; i < charButtonsArray.length; i++) {
                charButtonsArray[i].classList.replace("charButton", "disableMe");
            }
            playAudio('LuigiSnd', 250)
            break;
        case 'Ness': zImageObj.src = 'Char_Images/Ness.png';
            zDateRangeObj.innerHTML = 'September 23rd - October 23rd';
            zDescription.innerHTML = 'Ness, the magical child! Ness has a talent for magic, from creating pillars of fire to sparks of electricity, but despite his great power, he remains an innocent and helpful child. Fueled greatly by his emotions and interests, Ness can turn any of his feelings into a greater power if it means he can protect his friends. He has serious courage for someone who probably still likes to eat crayons.'; displayAreaObj.classList.remove('hideMe');
            removeHideMe(displayAreaObj, 250);
            for (let i = 0; i < charButtonsArray.length; i++) {
                charButtonsArray[i].classList.replace("charButton", "disableMe");
            }
            playAudio('NessSnd', 250)
            break;
        case 'Captain Falcon':
            zImageObj.src = 'Char_Images/Captain Falcon.png';
            zDateRangeObj.innerHTML = 'October 24th - November 21st';
            zDescription.innerHTML = 'Captain Falcon, the king of the racetrack! A bounty hunter and long-time pro racer across different planets, Captain Falcon lives with a true need for speed, always chasing his next rush of adrenaline. C.F. has met many different people across his career, from the best kinds to the absolute worst, but he’s always stayed true to his morals and ethics- Even when there are people who try to break him down, he’ll always cross the fiish line at the end and leave them in the dust.';
            removeHideMe(displayAreaObj, 250);
            for (let i = 0; i < charButtonsArray.length; i++) {
                charButtonsArray[i].classList.replace("charButton", "disableMe");
            }
            playAudio('Captain FalconSnd', 250)
            break;
        case 'Jigglypuff': zImageObj.src = 'Char_Images/Jigglypuff.png';
            zDateRangeObj.innerHTML = 'November 22nd - December 21st';
            zDescription.innerHTML = 'Jigglypuff, the balloon Pokémon! A cute face, Jigglypuff loves to be the center of attention and turns that innocent demeanor into a mean one when she’s ignored. But Jigglypuff’s idea of being “mean” is pulling innocent pranks- If you consider having marker drawn on your face innocent, at least. Still, Jigglypuff is widely loved for her endearing personality, just make sure you always listen to her when she wants to be heard.';
            removeHideMe(displayAreaObj, 250);
            for (let i = 0; i < charButtonsArray.length; i++) {
                charButtonsArray[i].classList.replace("charButton", "disableMe");
            }
            playAudio('JigglypuffSnd', 250)
            break;
        case 'helpButton': 
            removeHideMe(helpAreaObj, 250);
            for (let i = 0; i < charButtonsArray.length; i++) {
                charButtonsArray[i].classList.replace("charButton", "disableMe");
            }
            break;
        default:
            console.log('displayZodInfo has failed');
    }
}

// Close button
closeButtonObj.addEventListener('click', function () {
    displayAreaObj.classList.add('hideMe');
    for (let i = 0; i < charButtonsArray.length; i++) {
        charButtonsArray[i].classList.replace("disableMe", "charButton");
    }
});

// hideMe function delay

function removeHideMe (element, delay) {
    setTimeout(() => {
        element.classList.remove('hideMe');
      }, delay);
}

// Close help button
closeHelpButtonObj.addEventListener('click', function () {
    helpAreaObj.classList.add('hideMe');
    for (let i = 0; i < charButtonsArray.length; i++) {
        charButtonsArray[i].classList.replace("disableMe", "charButton");
    }
});

// Close error button
closeErrorButtonObj.addEventListener('click', function () {
    errorAreaObj.classList.add('hideMe');
    for (let i = 0; i < charButtonsArray.length; i++) {
        charButtonsArray[i].classList.replace("disableMe", "charButton");
    }
});

// Input date and submit code below
const submitObj = document.getElementById('zSubmit');
console.log(`submitObj is ${submitObj}`);

submitObj.addEventListener('click', function () {
    // Capture user input date
    console.log('Submit button clicked');
    const birthdayObj = document.getElementById('zBirthday').valueAsDate;
    console.log(`zBirthday is ${birthdayObj}`);
    // Make sure date is valid
    if (birthdayObj) {
        const tzOffSet = birthdayObj.getTimezoneOffset() * 60 * 1000;
        const birthDateEST = new Date(birthdayObj.getTime() + tzOffSet);
        console.log(`birthDateEST is ${birthDateEST}`);
        // Extract month
        const month = birthDateEST.getMonth() + 1;
        // Extract day of month
        const day = birthDateEST.getDate();
        console.log(`Month is ${month}, day is ${day}`);

        // Convert date to a zodiac sign
        if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
            astrological_sign = 'Mario'
        } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
            astrological_sign = 'Jigglypuff'
        } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
            astrological_sign = 'Captain Falcon'
        } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
            astrological_sign = 'Ness'
        } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
            astrological_sign = 'Luigi'
        } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
            astrological_sign = 'Pikachu'
        } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
            astrological_sign = 'Fox'
        } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
            astrological_sign = 'Kirby'
        } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
            astrological_sign = 'Yoshi'
        } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
            astrological_sign = 'Samus'
        } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
            astrological_sign = 'Link'
        } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
            astrological_sign = 'Donkey Kong'
        }

        displayZodInfo(astrological_sign);

    } else {
        errorAreaObj.classList.remove('hideMe');
    }
});
