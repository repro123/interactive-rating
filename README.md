# Interactive rating component solution

This is my solution to the [Interactive rating component challenge ](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI) on Frontend Mentor.

You can view my solution on Frontend Mentor [here](https://www.frontendmentor.io/solutions/interactive-rating-component-mpziBKSHrf), and this is the [live site](https://repro123.github.io/interactive-rating/)

### Screenshot

![](./preview.jpg)

### Built with 🛠⚒

- Semantic HTML5 markup
- Mobile-first workflow
- [TailwindCSS](https://tailwindcss.com/)
- Vanilla Javascript

### What I learned

- From the design preview, it became clear to me that i had to visually hide the input radio buttons, and style the labels appropriate. This was fairly easy becasue I have worked on something similar before.

- I was able to style the label's active state based on the `checked` property of its corresponding input, using thw tailwind css syntax of `has-checked:'style-here'`

- As for the thank you page, I had two options in mind: either i created a totally different html file for it, or to have it in the same file but toggle the hidden class based on certain conditions with javascript. I eventually opted for the second option as that seemed better to me.

- I noticed that, when a user does not select an input, and submits, after the error message pops up, if the user then picks another input, the error message was still there. It didn't sit right with me, so i had to ensure that the error message was hidden whenever an input was checked. I did it with tis block of code:

```js
for (let ratingValue of ratingInputs) {
  ratingValue.addEventListener("change", function () {
    if (ratingValue.checked) errorMessage.classList.add("sr-only");
  });
}
```

### Continued development

I hope to continue working on form validations so as to become very good with it

## Author

- Frontend Mentor - [@Repro](https://www.frontendmentor.io/profile/repro123)
- Twitter - [@Repro](https://www.twitter.com/Dr_Repro)
