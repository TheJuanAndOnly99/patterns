
# Callback Hell
This code is part of Sprint 3 Exercise 1 in the IT Academy Curriculum. 

The code performs file processing tasks, in this case it reads files from an "inbox" directory, reverses their content, and saves the reversed content into the "outbox" directory.

# Prerequisites
Before running this code, ensure that you have the following:

- Node.js installed on your system.
- The necessary permissions to read from and write to directories on your file system.

# Setup
Install the required dependencies by running the following command in your project directory:

`npm install`

Make sure you have the "inbox" and "outbox" directories in the src directory. 

# Usage
To run the file processing tasks, execute the following commands in your project directory:

compile typescript code:
`npm tsc` 

Make inbox and outbox directories in the `dist` folder:
`mkdir dist/inbox`
`mkdir dist/outbox`

Make a test file in the inbox folder and write into that file:
`touch test.txt`
`echo "hello world" >> dist/inbox/test.txt`

Run JS code
`node dist/callback_hell.js`

If you check the `dist/outbox` folder you should now have a file with the name test.txt and the content "dlrow olleh"

# Testing

A simple test is implemented with Jest to check that the processFiles function in `callback_hell.ts` reads from a file that contains the reversed "hello world" string.

To run the test execute the following code in your console:

`npx jest`