//

/*
 * starting the script with IIFE as a root for cleaner handling.
 *
 * run the function for replaceing the content the moment
 * the DOM content is loaded, by hooking it in an event listener.
 * Otherwise the code will run on an empty content.
 */

(function() {
  try {
    document.addEventListener("DOMContentLoaded", replaceContent);
  } catch (e) {
    console.log(`"jet.js":(error) running the script: `, e.message);
  }
})();

/*
 * At this stage and after the DOM content is loaded, we need to allow
 * react scripts to insert the components into the DOM Tree. Thus use
 * setTimeout() function to push the replaceText() from the call stack
 * to the callback queue. Then set the interval to 0ms to run
 * replaceText() as fast as possible to so it can be executed before
 * the React components are painted.
 */

function replaceContent() {
  try {
    // ***************************************************
    // test to show the react scripts has not yet rendered its components
    // console.log(
    //   `\nEmpty (<div id="root"></div>): \n`,
    //   document.querySelector("body").innerHTML
    // );
    // alert("No React Components in the DOM Tree yet");
    // ***************************************************

    setTimeout(() => replaceText(getEntries()), 0);
  } catch (e) {
    console.log(`"jet.js":(error) replaceContent(): `, e.message);
  }
}

/*
 *
 */

function replaceText(entries) {
  try {
    // ***************************************************
    // test to show the react scripts has now attached components to the DOM Tree
    // console.log(
    //   `\nPopulated (<div id="root"></div>): \n`,
    //   document.querySelector("body").innerHTML
    // );
    // alert(
    //   "Now Components are in the DOM Tree but NOT painted in the browser window yet.\nTime to replace the content!"
    // );
    // ***************************************************

    // Do NOT run both at the same time!
    // replaceDynamically(entries);
    replaceManually(entries);
  } catch (e) {
    console.log(`"jet.js":(error) replaceText(): `, e.message);
  }
}

/*
 * This approach though less code and no repettion introduces a
 * complexity of O(n2) -a loop within another loop- which causes
 * a performance problem as 'n' gets bigger and bigger .
 * However in this case one of the variables 'entries' is not dynamic
 * and is predefined. the assessment again would depend on the
 * situation and the use case.
 */

function replaceDynamically(entries) {
  try {
    entries.forEach(({selector, target, replacement}, j) => {
      const targets = document.querySelectorAll(selector);
      if (targets.length > 0) {
        for (let i = 0; i < targets.length; i++) {
          if (targets[i].innerText === target) {
            targets[i].innerText = replacement;
            break; // to avoid any unnecessary looping
          }
        }
      }
    });
  } catch (e) {
    console.log(`"jet.js":(error) replaceDynamically(): `, e.message);
  }
}

/*
 * replacing each entry one by one. This approach has a
 * complexity of O(4n) which simplifies to O(n). This could be
 * improved dramatically if there is a unique identifier 'id'
 * for each of the targets. That way loops would be avoided.
 *
 */

function replaceManually(entries) {
  try {
    const entry1 = entries[0];
    const entry2 = entries[1];
    const entry3 = entries[2];
    const entry4 = entries[3];

    const entry1Matches = document.querySelectorAll(entry1.selector);
    for (let i = 0; i < entry1Matches.length; i++) {
      if (entry1Matches[i].innerText === entry1.target) {
        entry1Matches[i].innerText = entry1.replacement;
        break; // to avoid any unnecessary looping
      }
    }
    const entry2Matches = document.querySelectorAll(entry2.selector);
    for (let i = 0; i < entry2Matches.length; i++) {
      if (entry2Matches[i].innerText === entry2.target) {
        entry2Matches[i].innerText = entry2.replacement;
        break; // to avoid any unnecessary looping
      }
    }
    const entry3Matches = document.querySelectorAll(entry3.selector);
    for (let i = 0; i < entry3Matches.length; i++) {
      if (entry3Matches[i].innerText === entry3.target) {
        entry3Matches[i].innerText = entry3.replacement;
        break; // to avoid any unnecessary looping
      }
    }
    const entry4Matches = document.querySelectorAll(entry4.selector);
    for (let i = 0; i < entry4Matches.length; i++) {
      if (entry4Matches[i].innerText === entry4.target) {
        entry4Matches[i].innerText = entry4.replacement;
        break; // to avoid any unnecessary looping
      }
    }
  } catch (e) {
    console.log(`"jet.js":(error) replaceManually(): `, e.message);
  }
}

/*
 * Defining all data entries with their related meta data.
 */

function getEntries() {
  return [
    {
      selector: "h1",
      target: "Landing template for startups",
      replacement: "Startup Landing Page Template"
    },
    {
      selector: "p",
      target:
        "Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.",
      replacement:
        "Create Stunning Landing Pages Once and For All - Our Template is Fully Responsive Across All Devices!"
    },
    {
      selector: ".btn",
      target: "Start free trial",
      replacement: "Free Trial - Start Now!"
    },
    {
      selector: "h2",
      target: "The majority our customers do not understand their workflows.",
      replacement:
        "Unlock the Power of Efficient Workflows - Let Us Help You Simplify Your Processes and Maximize Productivity!"
    }
  ];
}
