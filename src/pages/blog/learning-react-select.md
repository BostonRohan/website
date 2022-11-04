---
layout: ../../layouts/Layout.astro
title: "Learning React Select"
author: "Boston Rohan"
date: "November 29, 2021"
description: "Learning React Select for new project."
---

# Short Rant

Being a new web developer is hard. Having to come up with your own
projects, working day and night to learn new technologies, the process
can become stressful. Personally, I am thankful to have positive
influences in the space that I can rely on for advice. Nevertheless,
we are all learning, and many of us are in different stages of that
process. Though I am still in the beginning process of my learning, I
hope to offer some insight that is helpful. Anyways, onto React
Select!

# Project

Though I don’t want to speak on my project too heavily in this
article, as I’m sure I’ll do more in the future, I think it is
important to give a basic gist on what I am trying to accomplish.
There is a data set, and React Select offers options for that data
set, I want the user to be able to cycle through the options, and
maybe even input their own. So how do we do that?

# Start by installing react-select

`npm i react-select`

# or

`yarn add react-select`

# Then import React, React-Select, and maybe some useState for later

```jsx
import { React, useState } from "react";
import Select from "react-select";
```

# Options

So for react-select, the user is going to need options to select from.
So what options do you need for your project? For my project, the user will
be able to sort data from ascending to descending. So let's establish
these options. Options will be a variable in your project which will
hold an array, with an object inside containing a value and a label.

```js
export const options = [
  { value: "high-low", label: "Sort Ascending" },
  { value: "low-high", label: "Sort Descending" },
];
```

In my example, the user gets the labels of “Sort Ascending” and "Sort
Descending”, but the value that we interact with in the code will be
“high-low” and “low-high”.

To make our code more organized, let's puts this in a separate file and
export it. Now we can import it into our project file.

```jsx
import { React, useState } from "react";
import Select from "react-select";
import { options } from "./options";
```

# Quick Disclaimer

There are lots of possibilities in regards to options which will be
explored a bit later. For more information please check out the
react-select <ins>[documentation](https://react-select.com/home)</ins>.

# Select Component

Now we need to use the Select component in our code. Make a React
Component, and return the Select component inside passing in the
options as a property. Now our code should look something like this.

```jsx
import { React, useState } from "react";
import Select from "react-select";
import { options } from "./options";

function Project() {
  return (
    <>
      <Select options={options} />
    </>
  );
}
export default Project;
```

We’ve done it! We now have our first select component with our options
for a user to click. Just for fun, let's pass our component some more
data. For my project I used these props.

```jsx
import { React, useState } from "react";
import Select from "react-select";
import { options } from "./options";

function Project() {
  return (
    <>
      <Select
        options={options}
        defaultValue={selectedSort}
        onChange={setSelectedSort}
        isClearable={true}
      />
    </>
  );
}
export default Project;
```

Our `defaultValue` will be some state that we have yet to
initialize and when the value changes, it will set our state to that
new value. Now we can track the users input! The user can also clear
the input with `isClearable` .

Let's initialize our state! Our project should now look similar to
this.

```jsx
import { React, useState } from "react";
import Select from "react-select";
import { options } from "./options";

function Project() {
  const [selectedSort, setSelectedSort] = useState(null);
  return (
    <>
      <Select
        options={options}
        defaultValue={selectedSort}
        onChange={setSelectedSort}
        isClearable={true}
      />
    </>
  );
}
export default Project;
```

# Heating Up

Now I am going to add another select bar. But for the best user
experience, should that bar always be on the page? Let’s make it to
where the bar will only pop up if the user has clicked on a certain
option. Here is what the project will now look like.

```jsx
import { React, useState } from "react";
import Select from "react-select";
import { options, newOptions } from "./options";
import "./styles.css";

function Project() {
  const [selectedSort, setSelectedSort] = useState(null);
  return (
    <>
      <Select
        options={options}
        defaultValue={selectedSort}
        onChange={setSelectedSort}
        isClearable={true}
      />
      <Select
        className={selectedSort ? "sort-active" : "search-inactive"}
        options={newOptions}
        isClearable={true}
      />
    </>
  );
}
export default Project;
```

Let's break this down. So we import some new options from our options
file which we will use on our new select component. Next, we also
import some styling which you could customize if you wanted. Then we
render our new select component with it’s specified options. In
regards to the `className`, this will check if the
`selectedSort` input has changed. If a user has not
selected an input, then it will be `null` otherwise, the
value will be the input. Now we can use our css file to change the
display of the search bar based on the `className`.

```css
.search-inactive {
  display: none;
}
```

# Conclusion

I want to reiterate that I am very much still learning, so if there is
anything that I myself can improve on please let me know. Also, there
is so much more that react-select has to offer! I highly encourage you
to check out react-select’s amazing <ins>[documentation](https://react-select.com/home)</ins>.

I am so excited to go on this learning journey with you guys. It is
so important to document the process and I will continue to write on
what I’ve learned, am working on, and what inspires me. I hope to
encourage you guys to do the same. Until next time!

<style>
    p { margin: 0.5rem auto; }
    h1 { font-size: 1.25rem; line-height: 1.75rem; font-weight: 500; }
    pre { background-color:rgb(30 41 59) !important; border-radius: 0.25rem; margin: 1rem auto; }
    .dark h1 { color: rgb(250 250 250); }
    .dark pre { background-color: rgba(39, 39, 42, 0.1) !important; }
    </style>