# CBT Web App by Dr. Brijmohan

This is a modern, responsive Computer-Based Test (CBT) web application designed for mobile and desktop browsers. The app allows users to take multiple-choice quizzes with a timed interface, view scores, and analyze results.

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

2. The app extracts the subject name and JSON file identifier from the URL.
3. The questions are fetched from:
   ```
   https://litter.catbox.moe/<jsonID>.json
   ```

4. Users enter their name and start the quiz.
5. Each question is presented one at a time with multiple options.
6. At the end, a detailed result page is shown with:
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

## Credits

Created by **Dr. Brijmohan**

## License

This project is open-source and free to use under the [MIT License](LICENSE).
