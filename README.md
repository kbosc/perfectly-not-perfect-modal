# perfectly-not-perfect-modal
A library of React components created using `create-react-app`.

## Installation

```
npm i perfectly-not-perfect-modal
```

## How to use

This package was built to be used like a React component.

In your project import the package

```
import { Modal, useModal } from "perfectly-not-perfect-modal"
```
Init a "perfectly-not-perfect-modal"

```
const { isShowing, isToggle } = useModal();
```

Then use it

```
<Modal isShowing={isShowing} hide={isToggle} yourText="your text" />
```

## Parameters

- "yourText" = the data must be provided in the form  string