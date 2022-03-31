# modal-component-library
A library of React components created using `create-react-app`.

## Installation

```
npm i modal-component-library
```

## How to use

This package was built to be used like a React component.

In your project import the package

```
import { Modal, useModal } from "modal-component-library"
```
Init a "modal-component-library"

```
const { isShowing, isToggle } = useModal();
```

Then use it

```
<Modal isShowing={isShowing} hide={isToggle} yourText="your text" />
```

## Parameters

- "yourText" = the data must be provided in the form  string
- isShowing init at false