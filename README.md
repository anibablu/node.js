# node.js
Node Js Preparation an Information Document for Beginners
Introduction
1. Node.js is an open source server environment.<br/>
2.	Node.js allows you to run JavaScript on the server.
3.	Node.js is an open source server environment
4.	Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)
5.	Node.js uses JavaScript on the server
6.	Node.js is Free

Why Node.js
1.	Node.js uses asynchronous programming!
2.	A common task for a web server can be to open a file on the server and return the content to the client.
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
1.	Node.js can generate dynamic page content
2.	Node.js can create, open, read, write, delete, and close files on the server
3.	Node.js can collect form data
4.	Node.js can add, delete, modify data in your database
 What is a Node.js File?
5.	Node.js files contain tasks that will be executed on certain events
6.	A typical event is someone trying to access a port on the server
7.	Node.js files must be initiated on the server before having any effect
8.	Node.js files have extension ".js"

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


REPL stands for Read Eval Print Loop and it represents a computer environment like a Windows console or Unix/Linux shell where a command is entered, and the system responds with an output in an interactive mode. Node.js or Node comes bundled with a REPL environment. It performs the following tasks −
1.	Read − Reads user's input, parses the input into JavaScript data-structure, and stores in memory.
2.	Eval − Takes and evaluates the data structure.
3.	Print − Prints the result.
4.	Loop − Loops the above command until the user presses ctrl-c twice.
The REPL feature of Node is very useful in experimenting with Node.js codes and to debug JavaScript codes.



