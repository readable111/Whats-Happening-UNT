COMMANDS TO COMPILE:
    "npm run dev" -- will run both the server and the frontend at the same time, if you want to build the whole application in your browser use this command. frontend runs on localhost:3000, backend runs on localhost:3001
    "npm run server" -- will run ONLY the server side. use this if you want to test out an API.

GENERAL INFO:
    This is a standard react app. almost all of the files that we will add/edit will be located in the src folder. 
    The page that gets rendered is stored in the App.js file. if you want to make an edit to the page, edit the App.js file.

    For my sanity and yours, I installe tailwindcss on this react app. It will make your life writing css much easier. I am still learning as well, but if you want to add
    css propererties to a tag, just give the tag a className specifier, and then put the tailwind attributes in the className. 
        e.g.: <div className = "tailwindcss attributes go here">yadayada</div>
    
    in the pages folder is where we store the different pages that we can use the Navbar to navigate to, for more on that, see the comments in the App.js file and the NavBar.jsx file.
    essentially if you need to create a new page, create a new .js file in the pages folder, import into the App.js file, and then add a case to the switch statement in the App.js file.

    The Components folder is where we can create new components that might be used frequently throughout the site. I have not done a lot there, just the header of the site and the NavBar

SERVER: 
    The server file is where we can write and use APIs, i have done the one for the data scraping using puppeteer, and if you want to know more, just read the comments in index.js file. 
    This is where the API for google will eventually go, but I need to read the documentation on that and then get an API key from Google. 

DATA STORAGE:
    Since our website revolves around listing data on the website, we need to store the data. In order to get the data we first open up an http request in the server, and then respond with
    the scraped data. we can call this API using the fetch() method, see the comments on App.js for more to understand how we can call the API. the data that we get back from the API is 
    an array of objects of the following class

    eventobject
    {
            Title: "title of event",
            Date: "date-of-event",
            Description: "description of event"
    }

    the array of eventobject is held in a variable in the App.js file called eventData. we can use the .map() method on eventData to access each one of its elements. you can use it like this

    eventData.map( variable =>{             //variable is of type eventobject , basically a for loop kinda not really
        do something, can access members like
        variable["Title"]           // will return the Title of current event;
    })

    