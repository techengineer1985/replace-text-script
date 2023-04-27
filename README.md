

# Replace text script

 A script to be added to the `<head>` of a web page created/*built* by React to replace text of some of its components.
*This is a solution to this [task](https://pipedata.notion.site/Test-assignments-abb95b78cfdf4853bedd0c69a6c9b089)*

## Assumptions
The solution presented here is tailored for the content of this [project](https://github.com/cruip/open-react-template/releases/tag/2.0.3) and assumes the following about the [task](https://pipedata.notion.site/Test-assignments-abb95b78cfdf4853bedd0c69a6c9b089) above:

- The script is to be embedded directly into the root `index.html` file of a 'React' project.
- Modifications to the source code of the react components are **NOT** possible. An example of such modification would be to add `id` attribute with a unique key to each of the target tags to make it both simpler and quicker to locate/find/select the text - since none of the targeted component tags has either an `id` or a unique `class`. Thus only `tag name`s  were used to help locate the targets.
- None of the targeted texts is repeated.

""*Should any of these assumptions not be met, modifications could be required to the solution suggested here*""

## To Do

#### insert the script into the `index.html`

just add the script in the head directly (faster)
```html
<head>
  ...
  <script type="text/javascript">
    ...
    (function() {
      try {
        document.addEventListener("DOMContentLoaded", replaceContent);
      } catch (e) {
        console.log(`"jet.js":(error) running the script: `, e.message);
      }
    })();
    ...
  </script>
  ...
</head>
```

**Alternatively**

using a modular approach by putting the code in a file - in this case named `jet.js`.

in the `<head>`: preloading the script to get it ready early on and give it priority over other resources
```html
<head>
  ...
  <link rel="preload" href="jet.js" as="script" />
  ...
</head>
```

in the `body`: to have the script executed
```html
<body>
  ...
  <script src="jet.js" ></script>
  ...
</body>
```


## How it works
Here is a general overview (***more details are in the code comments***).
1. Wait for the DOM content to load; by attaching the root function to `'DOMContentLoaded'` event listener.
2. Wait for the React components to be inserted into the DOM Tree; by using a `setTimeout` with a callback with the text replacing function
3. Execute the function before the react components are painted on the window; by setting the interval on the `setTimeout` to `0ms`.
4. Select the target elements using DOM `querySelector`.
5. Replace the `innerText` on each of the element with the new text.
