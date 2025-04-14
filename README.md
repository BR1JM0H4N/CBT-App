# CBT Web App by Dr. Brijmohan

This is a modern, responsive Computer-Based Test (CBT) web application designed for mobile and desktop browsers. The app allows users to take multiple-choice quizzes with a timed interface, view scores, and analyze results. [Live Demo](https://br1jm0h4n.github.io/CBT-App#Pathology@wg1kee)

## Features

- **User Authentication**: Simple name entry before starting the quiz.
- **Dynamic Questions**: Questions are loaded dynamically from a JSON file hosted on a remote server.
- **Responsive UI**: Mobile-first design using dark mode aesthetics.
- **Timer**: Automatic countdown based on the number of questions.
- **Skip Option**: Allows the user to skip a question (irreversible).
- **Scorecard**: Summary of results with correct and incorrect answers highlighted.
- **Offline Ready**: Minimal dependencies and works well with cached content.

## How It Works

1. The quiz is accessed via a URL with a hash format: 
   ```
   https://yourdomain.com/index.html#<subject>@<jsonID>
   ```
   Example:
   ```
   https://example.com/cbt.html#Pharmacology@abcd1234
   ```

3. The app extracts the subject name and JSON file identifier from the URL.
4. The questions are fetched from:
   ```
   https://litter.catbox.moe/<jsonID>.json
   ```

5. Users enter their name and start the quiz.
6. Each question is presented one at a time with multiple options.
7. At the end, a detailed result page is shown with:
   - Score
   - Percentage
   - Pass/Fail status
   - Answer comparison table

## JSON File Format

Each question in the `.json` file should follow this structure:

```json
[
  {
    "question": "What is the capital of France?",
    "options": ["Berlin", "Madrid", "Paris", "Rome"],
    "correctAnswer": "Paris"
  }
]
```

## Technologies Used

- HTML5
- CSS3 (with custom styles, Material Icons, and Roboto font)
- JavaScript (vanilla)

## Hosting Suggestions

- **GitHub Pages**
- **Netlify**
- **Vercel**
- **Your own domain/server**
- **Mofify Demo Url**
  ```
    https://br1jm0h4n.github.io/CBT-App#<subject>@<jsonID>
  ```
     For Example:: if you want to host pathology CBT exam whose question file (*json formatted*) url is *https://litter.catbox.moe/w3dxf7.json* then your CBT exam url be *https://br1jm0h4n.github.io/CBT-App#Pathology@w3dxf7* 

## Credits

Created by **Dr. Brijmohan**

## License

This project is open-source and free to use under the [MIT License](LICENSE).

## CAUTION 
PLEASE KEEP IN MIND THAT THIS PROGRAM IS JUST TO CONDUCT PRACTICE EXAMINATION BETWEEN FRIENDS AND FOR MYSELF, PLEASE DO NOT USE THIS FOR CONDUCTING PROFESSIONAL EXAMINATION BECAUSE IT DOES NOT HAVE ANY SECURITY, EVERYTHING IS PROCESSED ON CLIENT MACHINE. OTHER THAN THAT FEEL FREE TO USE IT FOR CONDUCTING COMPETITIVE EXAMINATION BETWEEN YOUR FRIEND GROUP OR USE IT FOR TESTING YOUR OWN KNOWLEDGE 🥰
