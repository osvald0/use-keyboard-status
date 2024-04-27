# use-keyboard-status

This React hook helps us detect the keyboard status on mobile devices. It's particularly useful when we need to provide different behavior or display specific UI elements based on whether the keyboard is open or closed. For instance, it can be used to show a text format toolbar when an input field is selected.

## Alternatives

While researching solutions for similar problems, I came across two alternatives:

- [VirtualKeyboard API](https://developer.mozilla.org/en-US/docs/Web/API/VirtualKeyboard_API)

This API is still experimental and lacks robust browser support.

- [use-detect-keyboard-open package](https://www.npmjs.com/package/use-detect-keyboard-open)

While this package provides a solution, I prefer to handle such functionalities directly without relying on external packages for minor tasks.

## Example

```
import useKeyboardStatus from "./use-keyboard-status";

export default function App() {
  const { isKeyboardOpen } = useKeyboardStatus();

  return (
    <div>
      {isKeyboardOpen ? <p>Keyboard is open</p> : <p>Keybord is closed</p>}
    </div>
  );
}

```
