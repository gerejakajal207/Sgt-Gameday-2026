### Code Review: Kajal Gereja

Kajal, you have a very strong eye for UI organization. Using a dedicated `utilities.css` file for layout management is a professional-level move that makes your code highly scalable. Your Student Dashboard is robust and handles state management well. However, your Currency Converter has a significant architectural flaw that creates a poor user experience, and your Java module is currently a hollow skeleton that doesn't meet the backend requirements.

---

#### 1. Currency Converter (Web Module)

**Status: Functional, but UX is highly restrictive.**

* **The Validation Barrier:** You bound your conversion logic to a `validateInput()` function that checks `if (inputOne.value <= 0)`.
* **The Issue:** Because you used `inputOne.addEventListener("input", ...)`, if a user tries to type "50", the moment they type "5", the logic fires. If they try to backspace to change the number, the alert "Entered value is not correct" pops up constantly.
* **The Fix:** Move the alert-based validation to a "Convert" button click. For real-time updates, just perform the math silently without interrupting the user with alerts.


* **Redundant Fetching:** Inside `convertRates`, you are fetching the conversion rate every time the input changes. This is computationally expensive. You should fetch the rates once on page load, store them, and perform the math locally.

#### 2. Student Ranking Dashboard (Web Module)

**Status: Excellent / Best in Class.**

* **Data Persistence:** Your implementation of `localStorage` combined with the initial hardcoded array is exactly how production-level dashboards handle default state.
* **Proper DOM Structure:** You correctly used `<thead>` and `<tbody>` tags. This ensures that when you clear the table data with `studentTable.innerHTML = ""`, your headers remain untouched.
* **Clean Event Handling:** Using the `+` operator (`+scoreInput.value`) is a sleek, modern way to cast a string to a number. Great job.
* **Refinement:** The `scale: 0.8` on `button:hover` is a bit aggressive. Typically, hover effects use a slight scale up (e.g., `1.05`) or a color shift. Scaling down can make the button feel like it's shrinking away from the user.

#### 3. Weather Analysis Engine (Java Module)

**Status: Incomplete (File Reader only).**

* **Missing Business Logic:** The prompt required you to clean data (skip "MISSING", "N/A", or negative humidity) and handle "Thirty" via `try-catch`. You didn't implement any of this validation.
* **Missing Analytics:** You were asked to find the Hottest Day and the Average Temperature for a city. Your current code just reads lines into a String array and prints them.
* **Object Orientation:** You created a `Climate` class but never actually used it to create objects. Java is an Object-Oriented language; you should be parsing each CSV row into a `Climate` object.
* **Substring Logic:** You used `Integer.parseInt(sc.next().substring(0,2))`. This is very fragile. If the file starts with "5" instead of "15", your code will crash. Use `sc.nextInt()` or `sc.nextLine()` properly.

---

**Next Steps for Kajal:**
Your dashboard is fantastic—don't change much there besides the hover effect. For the Currency Converter, remove the constant alerts and let the math happen in the background. Your biggest task is the Java module: you need to implement the actual data cleaning and analytics logic using the `Climate` class you already defined.
