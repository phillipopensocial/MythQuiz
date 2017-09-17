# MythQuiz
Make an interactive experience with an Amazon-Alexa quiz and draw clients to local businesses

# STEP 1: Setup the Quiz skeleton

Follow the instruction to setup the Alexa Skill and AWS Lambda.  Also download the code into a directory (Calling it 'SRC' from here forward)

https://github.com/alexa/skill-sample-nodejs-trivia

# STEP 2: NEXMO for SMS

Add NEXMO support in the 'SRC' by running the following command:

**npm install nexmo**

# STEP 3:  Modify quiz questions

By default, the In-line Code editor in Lambda does not support modify to the file 'question.js'.  You have to instead modify the files in the 'SRC' and then zip/upload all files into Lambda. 

# STEP 4: Adjust number of questions

Modify the 'index.js', for instance the variable 'GAME_LENGTH' for the number of questions to ask, then zip/upload all files into Lambda.


# STEP 5: Final

Test using your AMAZON-ALEXA device and enjoy!
