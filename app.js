let description = document.getElementById('des');
let projectimg = document.getElementById('pimg');
let button1 = document.getElementById('one');
let button2 = document.getElementById('two');
let button3 = document.getElementById('three');
let button4 = document.getElementById('four');
let projectID = 1;
var dropdown = document.getElementById('mob');
var lucky = document.getElementById('lucky');
var spin = document.getElementById('spin');
var b = document.getElementById('b');



        projectimg.style.backgroundImage = 'url(images/proj5.png)';
        description.innerHTML += ` <a href = 'https://nbarnacle.github.io/Project5/'> Photo Gallery</a> <p> A project that utilizes the baguetteBox.js lightbox plugin. 
        Users see a simple website with various pictures of beautiful scenery. When the user clicks on an image, a 
        window opens with a caption, giving some info on the scenery. Users can scroll through the images in the caption windows, thanks
        to BaguetteBox. The website also includes a simple search function. </p>
        <div class = 'nav' id = 'nav'>
                            <button type="button" id = 'one' class = 'one'>1</button> 
                            <button type="button" id = 'two' class = 'two'>2</button> 
                            <button type="button" id = 'three' class = 'three'>3</button> 
                            <button type="button" id = 'four' class = 'four'>4</button> 
        
                        </div>`;
        

                       
                        document.getElementById('one').onclick = function(){fswitch(1)};
                        document.getElementById('two').onclick = function(){fswitch(2)};
                        document.getElementById('three').onclick = function(){fswitch(3)};
                        document.getElementById('four').onclick = function(){fswitch(4)};
                       
                        function fswitch(ID){
                            switch(ID){
                                case 1:
                                description.innerHTML = "";
                                projectimg.style.backgroundImage = 'url(images/proj5.png)';
                                description.innerHTML += ` <a href = 'https://nbarnacle.github.io/Project5/'> Photo Gallery</a> <p> A project that utilizes the baguetteBox.js lightbox plugin. 
                                Users see a simple website with various pictures of beautiful scenery. When the user clicks on an image, a 
                                window opens with a caption, giving some info on the scenery. Users can scroll through the images in the caption windows, thanks
                                to BaguetteBox. The website also includes a simple search function. </p>
                                <div class = 'nav' id = 'nav'>
                                                    <button type="button" id = 'one' class = 'one'>1</button> 
                                                    <button type="button" id = 'two' class = 'two'>2</button> 
                                                    <button type="button" id = 'three' class = 'three'>3</button> 
                                                    <button type="button" id = 'four' class = 'four'>4</button> 
                                
                                                </div>`
                                                document.getElementById('one').onclick = function(){fswitch(1)};
                                                document.getElementById('two').onclick = function(){fswitch(2)};
                                                document.getElementById('three').onclick = function(){fswitch(3)};
                                                document.getElementById('four').onclick = function(){fswitch(4)};
                                break;
                                
                                case 2:
                                    description.innerHTML = "";
                                    projectimg.style.backgroundImage = 'url(images/proj6.png)';
                                    description.innerHTML += `<a href = 'https://nbarnacle.github.io/Project6/'> Wheel Of Success! </a> <p> A Javascript game very similar to the TV show Wheel Of Fortune.
                                    A random phrase is chosen out of a pool of phrases, and a small card is made for each letter. The user is prompted to guess 
                                    which letters are within the phrase, with an on-screen keyboard. If the user guesses correctly, each card that matches the letter
                                    is flipped, and more of the phrase is revealed. Guess incorrectly, and one of your five hearts is taken away. Lose all hearts, and
                                    it's game over! Either way, the selected letter will not be selectable again.
                                    </p>
                                    <div class = 'nav' id = 'nav'>
                                                    <button type="button" id = 'one'>1</button> 
                                                    <button type="button" id = 'two'>2</button> 
                                                    <button type="button" id = 'three'>3</button> 
                                                    <button type="button" id = 'four'>4</button> 
                                
                                                </div>`
                                                document.getElementById('one').onclick = function(){fswitch(1)};
                                                document.getElementById('two').onclick = function(){fswitch(2)};
                                                document.getElementById('three').onclick = function(){fswitch(3)};
                                                document.getElementById('four').onclick = function(){fswitch(4)};
                                                break;
                                case 3:
                                                    description.innerHTML = "";
                                                    projectimg.style.backgroundImage = 'url(images/proj8.png)';
                                                    description.innerHTML += `<a href = 'https://nbarnacle.github.io/project8/'> Employee Directory</a> <p> A website that utilizes the randomuser.me API. The website uses JS to create 
                                                    12 cards that display random people taken from the API. These cards include a name, photo, address, and email address.When the user clicks on a person's card, an expanded element pops up with more info about
                                                    the person, as well as a small 'x' to close out of it." The directory is randomized each time the page is refreshed.
                                                    </p>
                                                    <div class = 'nav' id = 'nav'>
                                                                    <button type="button" id = 'one'>1</button> 
                                                                    <button type="button" id = 'two'>2</button> 
                                                                    <button type="button" id = 'three'>3</button> 
                                                                    <button type="button" id = 'four'>4</button> 
                                                
                                                                </div>`
                                                                document.getElementById('one').onclick = function(){fswitch(1)};
                                                                document.getElementById('two').onclick = function(){fswitch(2)};
                                                                document.getElementById('three').onclick = function(){fswitch(3)};
                                                                document.getElementById('four').onclick = function(){fswitch(4)};
                                                                break;

                                                 case 4:
                                                                    description.innerHTML = "";
                                                                    projectimg.style.backgroundImage = 'url(images/proj7.png)';
                                                                    description.innerHTML += `<a href = 'https://nbarnacle.github.io/Project7update/'> YourApp Layout</a> <p> A page that displays info and recent updates from a ficticious website named 'YourApp'. 
                                                                    3 different JS charts are used to track things such as traffic, devices used to access YourApp, and what days the site is busy. The page also
                                                                    includes a section to deliver updates, such as someone sending a message, liking a status, or various other things. A messaging feature is present,
                                                                    that uses JS to detect blank fields. 
                                                                    </p>
                                                                    <div class = 'nav' id = 'nav'>
                                                                                    <button type="button" id = 'one'>1</button> 
                                                                                    <button type="button" id = 'two'>2</button> 
                                                                                    <button type="button" id = 'three'>3</button> 
                                                                                    <button type="button" id = 'four'>4</button> 
                                                                
                                                                                </div>`
                                                                                document.getElementById('one').onclick = function(){fswitch(1)};
                                                                                document.getElementById('two').onclick = function(){fswitch(2)};
                                                                                document.getElementById('three').onclick = function(){fswitch(3)};
                                                                                document.getElementById('four').onclick = function(){fswitch(4)};
                                                                            break; }

                           console.log(ID);
                       }

                      spin.onmouseover = function(){
                          lucky.play();
                          b.innerHTML = '';
                          b.innerHTML = 'Hello!'
                          console.log('spin');
                      }
                      spin.onmouseleave = function(){
                          b.innerHTML = 'Barnacle'
                      }
                    
                      dropdown.onclick = function(){
                          dropdown.style.height = '35%';
                          
                          dropdown.innerHTML = `
                          <h4 id = 'about'>About Me</h4>
                          <p>I am a 19 year old currently finishing Team Treehouses' Front-End Web Design course. Put more text here, or are you really that uninteresting?</p>
            <h4>Phone Number</h4>
            <p>XXX-XXX-XXXX</p>
            <h4>Email Address</h4>
            <p>nbarn433@gmail.com</p>
            
            `;
                    var up = document.getElementsByClassName('.up');

                    up.onclick = function(){
                        dropdown.style.height = '5%';
                        dropdown.innerHTML = '';
                    }

                      }