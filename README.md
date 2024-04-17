# Frontend Mentor - Pricing component with toggle solution

This is a solution to the [Pricing component with toggle challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pricing-component-with-toggle-8vPwRMIC). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size

### Screenshot

<!-- ![desktop](./public/screenshot.png)
![mobile](./public/screenshot_mobile.png) -->

```
html 
<img src='./public/screenshot.png' alt='desktop-screenshot'>
<img src='./public/screenshot_mobile.png' alt='mobile-screenshot'>
```

### Links

- Solution URL: [frontendmentor](https://your-solution-url.com)
- Live Site URL: [visit](https://cipivlad.github.io/pricing_components/)

## My process

### Built with

- Mobile-first workflow
- Semantic HTML5 markup
- SCSS 
- Flexbox
- CSS Grid
- [React](https://react.dev/) - JS library
- Typescript
- Browsers: Google Chrome, Firefox

### Code Snippets


```css


```
#### really enjoyed this workflow: instead of filling up html with lots of content
##### 1.  created "pricing.model.ts" with type alias as a model
```js

export type PricingModel = {
    mode: string,
    monthly: string,
    yearly: string,
    storage: string,
    users: string,
    send: string
}

export const basic: PricingModel = {
    mode: 'Basic',
    monthly: '19.99',
    yearly: '199.99',
    storage: '500 GB Storage',
    users: '2 Users Allowed',
    send: 'Send up to 3 GB'
} 

export const professional: PricingModel = { ...}

export const master:PricingModel = {...}

```
##### 2. made a price card comopnent from where content will be passed as props to parent component
```js

import { PricingModel } from "../models/pricing.model"

type ToggleProps = {
    toggle: boolean
}

const PriceCard = (props: PricingModel & ToggleProps) => {
    return (
        <div className="price_card_container ">
            <h2>{props.mode}</h2>
            <p><span>$</span>{props.toggle ? props.monthly : props.yearly}</p>
            <div className="price_description">
                <div className="line"></div>
                <p>{props.storage}</p>
                <div className="line"></div>
                <p>{props.users}</p>
                <div className="line"></div>
                <p>{props.send}</p>
                <div className="line"></div>
            </div>
            <a href="#">LEARN MORE</a>
        </div>
    )
}
export default PriceCard

```

##### 3. conditionally render PriceCard with spread operator 
```js
import '../scss/PriceList.scss'
import PriceCard from "./PriceCard"
import { basic, master, professional } from "../models/pricing.model"


type Props = {
    toggle: boolean
}

const PriceList = ({ toggle }: Props) => {

    return (
        <div className="price_list_container">
            {/* conditionally render a PriceCard component.
             If the basic variable is truthy, 
             the PriceCard component will be rendered with the basic object spread into its props, 
             along with the toggle prop. */}
            {basic && <PriceCard {...basic} toggle={toggle} />}
            {professional && <PriceCard {...professional} toggle={toggle} />}
            {master && <PriceCard {...master} toggle={toggle} />}
        </div>
    )
}
export default PriceList


```


If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Portfolio](https://cipivlad.github.io/myportfoliosite/)
- Frontend Mentor - [@CipiVlad](https://www.frontendmentor.io/profile/CipiVlad)
- DEV.to [https://dev.to/cipivlad](https://dev.to/cipivlad)

## Tags

#react, #scss, #typescript
