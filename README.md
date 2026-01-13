# Habit Dice

Minimalist, single-page web app that helps you build habits with a playful twist. Click the dice to get a random habit for today, mark it complete, and tailor the habit list to your preferences. All data is stored locally in your browser—no accounts, no backend.

## Overview
- Lightweight HTML/CSS/JS app (no build tools or dependencies)
- Random habit selection via a “dice roll”
- Track completion for the day
- Add and remove custom habits
- Persistent storage using `localStorage`

## Features
- **Dice roll:** Generates a random habit from your list.
- **Mark complete:** Confirms you finished the selected habit (disables the button for the session).
- **Customize habits:** Add new habits and remove existing ones.
- **Persistence:** Habits are saved to `localStorage` and restored on reload.
- **Clean UI:** Simple, centered layout with accessible controls.

## Getting Started
You can run the app directly as static files.

### Option 1: Open the HTML file
1. Open the folder in your file explorer.
2. Double-click `Habit Dice/index.html` to launch in your browser.

### Option 2: Serve locally (recommended)
From the project root or the `Habit Dice` folder, run one of:

```bash
# Python 3 (built-in on many systems)
python -m http.server 5500
# Then open http://localhost:5500/Habit%20Dice/index.html

# Node.js (requires Node installed)
npx serve -l 5500 "Habit Dice"
# Then open http://localhost:5500
```

## Usage
1. Click "🎲 Roll the Dice" to pick today’s habit.
2. Complete the habit and click "✅ Mark as Complete".
3. Add a new habit using the input field and "➕ Add Habit".
4. Remove a habit using the ❌ button next to it.


## Project Structure
- `Habit Dice/index.html` – App markup and component layout
- `Habit Dice/scripts.js` – App logic and `localStorage` interactions
- `Habit Dice/style.css` – Minimal styling and layout rules

## Customization Tips
- **Default habits:** Edit the initial habits array at the top of `scripts.js`.
- **Colors & spacing:** Adjust variables and rules in `style.css`.
- **Copy & labels:** Change headings, button text, and helper text in `index.html`.

## Privacy
All data is stored locally in your browser via `localStorage`. Clearing site data or using a different browser/device will reset your habits.

## Roadmap Ideas
- Streak tracking and history view
- Multiple dice or category-based selection
- Optional reminders/notifications
- PWA support for installable offline use

## Contributing
Pull requests are welcome. Keep changes small, accessible, and dependency-free unless there’s a clear benefit.

## License
No license specified yet.