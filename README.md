# Mobile-Flashcards Project

Mobile Flashcards App is mobile application that allows users to study collections of flashcards. The app will allow users to create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks.

# Quickstart

### Install

Clone Mobile-Flashcards project:
```
https://github.com/CuneytYilmaz/mobile-flashcards
```

Install project dependencies via npm:
```
npm install
```

Start the development server:
```
npm start
```

 # Pages
 
1. **Home Page** : The primary view, seen when the app loads, is a list of created decks which includes the name of each deck and the number of cards. Pressing on a deck in the list generate an animation, and the app route to an individual deck view.

<p align="center">
<img src="https://github.com/CuneytYilmaz/mobile-flashcards/blob/master/assets/HomePage.png" height="450"/>
</p>

2. **New Deck Page** : The view includes a form for creating a new deck - which have an input for the title and a 'Create Deck' button. Pressing the button correctly creates the deck and routes the user to the Deck Page for the new deck.

<p align="center">
<img src="https://github.com/CuneytYilmaz/mobile-flashcards/blob/master/assets/AddDeckPage.png" height="450"/>
</p>

3. **Deck Page** : The individual deck view includes the informations below. Pressing the 'Start Quiz' or 'Add Card' button properly routes to the correct views for those activities.

<p align="center">
<img src="https://github.com/CuneytYilmaz/mobile-flashcards/blob/master/assets/DeckPage.png" height="450"/>
</p>

4. **Add Card Page** : The Add Card view includes a form with fields for a question and answer, and a submit button. Submitting the form correctly adds the question to the deck.

<p align="center">
<img src="https://github.com/CuneytYilmaz/mobile-flashcards/blob/master/assets/AddCardPage.png" height="450"/>
</p>

5. **Quiz Page** : The Quiz view starts with a question from the selected deck. The question is displayed, along with a button to show the answer. Pressing the 'Show Answer' button displays the answer. Buttons are included to allow the student to mark their guess as 'Correct' or 'Incorrect'. The view displays the number of questions remaining. When the last question is answered, it routes to the Result View to display the score.

<p align="center">
<img src="https://github.com/CuneytYilmaz/mobile-flashcards/blob/master/assets/QuizPage-1.png" height="450"/>
<img src="https://github.com/CuneytYilmaz/mobile-flashcards/blob/master/assets/QuizPage-2.png" height="450"/>
</p>

6. **Result Page** : In this view the score is displayed with Pie Chart. It also displayed as a percentage of correct and incorrect answers. When the score is displayed, buttons are displayed to either start the quiz over or go back to the Individual Deck view. Both the 'Restart Quiz' and 'Back to Deck' buttons route correctly to their respective views.

<p align="center">
<img src="https://github.com/CuneytYilmaz/mobile-flashcards/blob/master/assets/ResultPage.png" height="450"/>
</p>

 # Contributing

Mobile-Flashcards-App was originally written and maintaned by Cuneyt Yilmaz. Many improvements and bugfixes were contributed by the [open source community](https://github.com/cuneytyilmaz/mobile-flashcards/graphs/contributors).

 # License

MIT. Please see the [license file](LICENSE) for more information.
