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

### User Prefers Dark Mode

```css
@media (prefers-color-scheme: color) {
  :root {
  --dark-bg-color: var(--black);
  --text-color-on-dark: var(--slate-50);
  }
}
```

## Search Form

1. 用 `e.target.elements` 获取 input 中的值
   ```jsx
   const searchValue = e.target.elements.search.value; // search 是在 input 中设置的 name; e.target.value 的另一种方式
   ```

## Unsplash API

Unsplash 是一个提供大量免费使用的高质量图片库的网站。Unsplash API 是一项服务，允许开发者在自己的应用程序中访问和使用 Unsplash 的照片集和相关数据。该 API 允许开发者以各种方式搜索、下载和使用照片，例如创建照片库或将照片集成到社交媒体应用程序中。

[Unsplash Website](https://unsplash.com/)

### Sign Up for Unsplash Account

要使用 Unsplash API 为应用程序获取图片，需要在 Unsplash 注册一个账户。获得一个 API Key，用于验证请求。

[Unsplash Developers/API](https://unsplash.com/developers)

### Find the API Key and Correct URL for Searching Images

1. register an app
2. authorization (hint : public authentication)
3. search functionality (hint : search photos)

注册帐户后，需要找到 API 密钥和正确的 URL，以便在使用 Unsplash API 搜索图片时使用。这些信息可以在 Unsplash 提供的 API 文档中找到。