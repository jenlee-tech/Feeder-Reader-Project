/* We place all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready. Some inital code
 * was provided by Udacity.
 */

$(function() {
   /* This first test Suite tests to make sure that the allFeeds variable
    * has been defined and that it is not empty. 
    */    
    describe('RSS Feeds', function() {
        //this test that allFeeds is defined and not empty
        it('are defined', function() {
          expect(allFeeds).toBeDefined();
          expect(allFeeds.length).not.toBe(0);
        });

        /* this test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('have URLs', function(){
            allFeeds.forEach(element => {
                expect(element.url).toBeDefined();
                expect(element.url.length).not.toBe(0);
            });  
        });

        /* this test loops through each feed in the allFeeds
         * object and ensures it has a name defined and it is not empty
         */
        it('have names', function(){
            allFeeds.forEach(element => {
                expect(element.name).toBeDefined();
                expect(element.name.length).not.toBe(0);
            });
        });
    });

    
    describe('The menu', function(){
        //this test that the menu is hidden by default
        it('hides by default', function(){
            const body = document.querySelector('body');
            expect(body.classList.contains('menu-hidden')).toBe(true);
            
        });
          
        //this test hides and shows when clicking
        it('hides and appears upon click', function(){
            //DOM elements selected, body and menu icon link
            const body = document.querySelector('body');
            const menu = document.querySelector('.menu-icon-link');

            //when a menu is click, we test if the menu is shown
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);
            //when the menu is click again, the menu will hide
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });
    });

 
    /* this test suite tests that the loadFeed function loads and that it has
     * it has more than one entry beforeEach function is required because 
     * loadFeed is asynchronous
     */
   
    describe('Initial Entries', function(){
        beforeEach(function(done){
            loadFeed(0, done); //runs the loadFeed function at index of 0
        });
        
        /* After the loadFeed, we test if there is more than one feed entry in the .feed container. 
         * First we select all the children elements of .feed container, then we test there is more than 
         * one.
         */
         
        it('completes work', function(){
            const entry = document.querySelector('.feed').getElementsByClassName("entry-link").length;
            expect(entry > 0).toBe(true);

        });
    });

    /* this test suite tests that loadFeed function is generating different feeds each time 
     * it loads - this test will loads two feeds and compare them
     */

    //beforeEach function is required because loadFeed is asynchronous

    describe('New Feed Selection', function(){
        const feed = document.querySelector('.feed'); //selects the element
        let firstFeed, //variables declared to hold results of the feed
            secondFeed;
        
      
        
        beforeEach(done => {
            loadFeed(0, function() { //this is for the firstFeed with an index of 0
                firstFeed = feed.innerHTML;
                console.log(firstFeed);
            });
            loadFeed(1, function(){ //this is for the secondFeed with an index of 1
                secondFeed = feed.innerHTML;
                console.log(secondFeed);
                done();
            });
        });

        //this test both feeds to ensure they are different after every run instance of loadFeed
        it('content changes', function(){
            expect(firstFeed !== secondFeed).toBe(true);
        });
    });
});
