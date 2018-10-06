/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */

 //**The First Test Suite */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
          expect(allFeeds).toBeDefined();
          expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('ensure URLs', function(){
            allFeeds.forEach(element => {
                expect(element.url).toBeDefined();
                expect(element.url.length).not.toBe(0);
            });  
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('ensure name', function(){
            allFeeds.forEach(element => {
                expect(element.name).toBeDefined();
                expect(element.name.length).not.toBe(0);
            });
        });
    });

    
    describe('The menu', function(){
        //**this test that the menu is hidden by default*/
        it('hides', function(){
            const body = document.querySelector('body');
            expect(body.classList.contains('menu-hidden')).toBe(true);
            
        });
          
        //**this test hides and shows when clicking*/
        it('hides and then shows upon click', function(){
            //**DOM elements selected, body and menu icon link */
            const body = document.querySelector('body');
            const menu = document.querySelector('.menu-icon-link');

            //**when a menu is click, we test if the menu is shown*/
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);
            //**when the menu is click again, the menu will hide*/
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });
    });


        
 
    //**this test suite tests that the loadFeed function loads and that it has*/
    //**it has more than one entry*/

    //**beforeEach function is required because loadFeed is asynchronous*/
   
    describe('Initial Entries', function(){
        
        beforeEach(function(done){
            loadFeed(0, done); //**runs the loadFeed function at index of 0*/
        });
        
        //**test there is more than one feed entry in the .feed container after the 
        //**loadFeed function runs*/
        it('completes work', function(){
            const feed = document.querySelector('.feed');
            expect(feed.children.length > 0).toBe(true);

        });
    });

    //**this test suite tests that loadFeed function is generating different feeds
    //**each time it loads - this test will loads two feeds and compare them*/

    describe('New Feed Selection', function(){
        const feed = document.querySelector('.feed'); //**selecting element*/
        let firstFeed, //**variables declared to hold results of the feed*/
            secondFeed;
        
        //**beforeEach function is required because loadFeed is asynchronous*/
        //**this is for the firstFeed with an index of 0*/
        beforeEach(done => {
            loadFeed(0, function() {
                firstFeed = feed.innerHTML;
                done();
            });
         
        //**this is for the secondFeed with an index of 1*/
            loadFeed(1, function(){
                secondFeed = feed.innerHTML;
                done();
            });
        });

        //**this test both feeds */
        it('content changes', function(){
            expect(firstFeed !== secondFeed).toBe(true);
        });
    });
});
