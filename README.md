# Marvel APP

This project was made using the **React framework**.
It's a web page that you can use to access various informations from the **Marvel API**.
It has 4 different pages which you can navegate between using the navegation bar on the top of the page. They are:

- Authentication
- Characters
- Comics
- Creators


## Authentication
It's the homepage of the aplication. In here, the user is asked to insert his private key and public key, which are both necessary to access the marvel API.

After inserting his keys and hitting the submit button, the user's keys will be stored in the cookies of the page.

## Characters
In this page, the user can search for any superhero name, and the page will display a grid with all the results.
It's important to note that the aplication uses the private and public keys that are stored in the cookies to make the API request, so the user must inform valid keys in the authentication page in order for this page to show the intended results.

## Comics (not yet implemented)
In this page, the user can search for any comics name, and the page will display a grid with all the results.
Similarly to the Characters page, it will only return the results from the API if the user keys are properly set.

## Creators (not yet implemented)
In this page, the user can search for any creators name, and the page will display a grid with all the results.
It will also only show the results if the user keys are properly set in the page cookies.

# Running the aplication
You can run this aplication locally in your computer by following these steps:

## Download ZIP
In this project [repository](https://github.com/Gabriel-Morghett/marvel-app), click on the "Code" button and download the zip file to your computer, then extract the zip file.

##Open folder in a terminal
Open a terminal and navegate to the folder you just extracted using the "cd" comand.
If you have Visual Studio Code instaled in your computer, you can right-click the folder, click on "Open with Code" and use the terminal from there.
If you have no idea what I'm talking about, [this tutorial](https://www.wikihow.com/Change-Directories-in-Command-Prompt) might help.

## NPM
For this step you have to have npm installed in your computer, learn how to do that [here](https://phoenixnap.com/kb/install-node-js-npm-on-windows).
With the terminal in the root folder, first run "npm install" and then "npm start" to get the aplication going.
It should automatically open a [localhost:3000](localhost:3000) page on your web browser, but if this doesn't happen, you can open it yourself.

***If you got to this part, congratulations, you have the aplication running locally on your computer, but this isn't enought to use the aplication successfully as you will need to get your public and private keys, so continue to the next step.***

## Getting your user keys
First, go to the [marvel developer's website](https://developer.marvel.com/) and create an account.

From your account, go to the Get a key page and you should be looking at both your public and private keys.

## Using your user keys
On your running aplication, go to the authentiction page and fill your public and private key as requested, and then click submit.

# Have fun
Now your user keys are saved and you should be able to play with the other pages, searching for your favorite heroes, comics and creators.
