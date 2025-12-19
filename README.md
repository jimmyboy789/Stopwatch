# Stopwatch

A sleek and responsive web-based stopwatch application with millisecond precision. Perfect for timing activities, workouts, or any task that requires accurate time measurement.

## Features

- **Precise Timing**: High-precision timing with millisecond accuracy
- **Clean Interface**: Large, easy-to-read display with intuitive controls
- **Visual Feedback**: Button states change to show available actions, with glow effects when running
- **Responsive Design**: Works on desktop and mobile devices
- **No Dependencies**: Pure HTML, CSS, and JavaScript - works offline
- **Modern Styling**: Gradient buttons with hover effects and shadows

## Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No internet connection required (works completely offline)

## Installation

1. Clone or download this repository to your local machine
2. Navigate to the `Stopwatch` folder

## How to Run

1. Open the `index.html` file in your web browser
   - You can double-click the file directly, or
   - Use a local server (recommended for better compatibility):
     - Python: `python -m http.server 8000`
     - Node.js: `npx http-server`
     - PHP: `php -S localhost:8000`

2. The stopwatch application will load immediately

## Usage

1. **Start**: Click the green "Start" button to begin timing
2. **Stop**: Click the red "Stop" button to pause the timer
3. **Reset**: Click the yellow "Reset" button to reset the timer to 00:00:00.000

The display shows time in Hours:Minutes:Seconds.Milliseconds format.

## Controls

- **Start Button**: Green button - begins/resumes timing
- **Stop Button**: Red button - pauses timing
- **Reset Button**: Yellow button - resets timer to zero

Buttons are automatically enabled/disabled based on the current state:
- Initially: Only Start is active
- While running: Only Stop and Reset are active
- When stopped: Start and Reset are active

## Customization

### Changing the Appearance
- Modify colors and gradients in `style.css`
- Adjust the background image by replacing `stop.jpg`
- Change font sizes and spacing in the CSS

### Modifying Timing Precision
- The display updates at ~60fps using `requestAnimationFrame` for optimal performance
- Change the time format in the `formatTime()` function if needed
- For different update rates, modify the `updateDisplay()` function

### Adding Features
- Lap timing: Add functionality to record split times
- Save times: Store times in localStorage for persistence
- Keyboard shortcuts: Add key event listeners for spacebar, etc.

## Project Structure

```
Stopwatch/
├── index.html      # Main HTML page with stopwatch interface
├── script.js       # JavaScript timing logic and event handlers
├── style.css       # Styling, animations, and responsive design
└── README.md       # This documentation file
```

## Browser Support

- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

## Technical Details

- **Timing Method**: Uses `Date.now()` for high-precision timing
- **Update Frequency**: Uses `requestAnimationFrame` for smooth 60fps display updates
- **Time Format**: HH:MM:SS.mmm (Hours:Minutes:Seconds.Milliseconds)
- **State Management**: Button states managed through CSS classes

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the MIT License.