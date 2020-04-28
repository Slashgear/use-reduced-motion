<h1 align="center">Welcome to use-reduced-motion 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/use-reduced-motion" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/use-reduced-motion.svg">
  </a>
  <a href="https://github.com/Slashgear/use-reduce-motion#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/Slashgear/use-reduce-motion/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/Slashgear/use-reduce-motion/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/Slashgear/use-reduce-motion" />
  </a>
  <a href="https://twitter.com/Slashgear\_" target="_blank">
    <img alt="Twitter: Slashgear_" src="https://img.shields.io/twitter/follow/Slashgear_.svg?style=social" />
  </a>
</p>

> React hook to detect user reduced motion feature

## Install

```sh
npm install use-reduced-motion
yarn add use-reduced-motion
```

## Usage

Use directly in your component.
Pass the boolean value to your JS animated component to stop it.

```jsx
import React from "react";
import { useReducedMotion } from "use-reduced-motion";
import { AnimatedDiv } from "../somewhere";

export const MyExampleComponent = () => {
  const stopMotion = useReducedMotion();
  return <AnimatedDiv pause={stopMotion} />;
};
```

## Author

👤 **Antoine CARON <antoine395.caron@gmail.com>**

- Website: http://slashgear.github.io/
- Twitter: [@Slashgear\_](https://twitter.com/Slashgear_)
- Github: [@Slashgear](https://github.com/Slashgear)

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [Antoine CARON <antoine395.caron@gmail.com>](https://github.com/Slashgear).<br />
This project is [MIT](https://github.com/Slashgear/use-reduce-motion/blob/master/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
