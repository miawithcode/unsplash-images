# Unsplash Images

## Dark Theme

### Dark Theme Toggle Class

```jsx
const body = document.querySelector('body');
body.classList.toggle('dark-theme', newDarkTheme);

// alternative setup
document.body.classList.toggle('dark-theme', newDarkTheme);
```

`body.classList.toggle('dark-theme', isDarkTheme);` - This line toggles the dark-theme class of the body element. The classList property is a read-only list that contains the classes of an element. The toggle() method adds a class to the element if it does not have it, or removes it if it does. In this case, it adds the dark-theme class if isDarkTheme is true, and removes it if isDarkTheme is false.

### General Dark Background Color

#121212

### Class Based On Dark Theme

`.dark-theme .form {}`

### User Prefer Dark Mode

1. Straight Up CSS
    ```css
    @media (prefers-color-scheme: color) {
      :root {
      --dark-bg-color: var(--black);
      --text-color-on-dark: var(--slate-50);
      }
    }
    ```

2. Use JavaScript