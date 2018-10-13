# node.js
Node Js Preparation an Information Document for Beginners
Introduction
•	Node.js is an open source server environment.
•	Node.js allows you to run JavaScript on the server.
•	Node.js is an open source server environment
•	Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)
•	Node.js uses JavaScript on the server
•	Node.js is Free

Why Node.js
•	Node.js uses asynchronous programming!
•	A common task for a web server can be to open a file on the server and return the content to the client.
Difference between other server languages 
Here is how PHP or ASP handles a file request:
1.	Sends the task to the computer's file system.
2.	Waits while the file system opens and reads the file.
3.	Returns the content to the client.
4.	Ready to handle the next request.
Here is how Node.js handles a file request:
1.	Sends the task to the computer's file system.
2.	Ready to handle the next request.
3.	When the file system has opened and read the file, the server returns the content to the client.
Node.js eliminates the waiting, and simply continues with the next request.
Node.js runs single-threaded, non-blocking, asynchronously programming, which is very memory efficient.
What Can Node.js Do?
•	Node.js can generate dynamic page content
•	Node.js can create, open, read, write, delete, and close files on the server
•	Node.js can collect form data
•	Node.js can add, delete, modify data in your database
 What is a Node.js File?
•	Node.js files contain tasks that will be executed on certain events
•	A typical event is someone trying to access a port on the server
•	Node.js files must be initiated on the server before having any effect
•	Node.js files have extension ".js"

Getting Started
The official Node.js website has installation instructions for Node.js: https://nodejs.org
Create a Node.js file named "myfirst.js"

              var http = require('http');
              http.createServer(function (req, res) {
                  res.writeHead(200, {'Content-Type': 'text/html'});
                  res.end('Hello World!');
              }).listen(8080);
              require,writeHead,end,listen are methods in Node
              
Command Line Interface
Node.js files must be initiated in the "Command Line Interface" program of your computer.
  C:\Users\Your Name>node myfirst.js
Now, your computer works as a server!
If anyone tries to access your computer on port 8080, they will get a "Hello World!" message in return!
Start your internet browser, and type in the address: http://localhost:8080


