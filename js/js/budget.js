<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <title>Budget</title>
<!-- Favicon-->
<link rel="icon" type="image/x-icon" href="" />
<!-- Bootstrap icons-->
<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />
<!-- Core theme CSS (includes Bootstrap)-->
<link href="css/styles.css" rel="stylesheet" />
<!-- JQuery -->
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/load_manager_pages.js"></script>
</head>
<body>
<!-- Responsive navbar-->
<div id="navbar"></div>
<!-- Page Content-->
<h1>Budget Tracker</h1>
<!-- Budget form -->
<form id="budget-form">
    <label for="budgetAmount">Enter Budget:</label><br>
    <input type="number" id="budgetAmount" placeholder="Enter budget amount"><br>
        <button type="button" class="m-3" onclick="createBudget()">Create Budget</button>
        <button type="button" class="m-3" onclick="updateBudget()">Update Budget</button>
</form>
<br>
    <h2>Enter Expense</h2>
    <form id="expense-form">
        <label for="expenseCategory">Category:</label><br>
        <select id="expenseCategory" name="expenseCategory">
            <option value="" disabled selected>Select a category</option>
            <!-- Options for expense categories will be populated here -->
        </select><br>
        <label for="expenseAmount">Amount:</label><br>
        <input type="number" id="expenseAmount" placeholder="Enter amount"><br>
            <label for="expenseDate">Date:</label><br>
            <input type="date" id="expenseDate"><br>
                <button type="button" id="submit-btn" class="m-3" onclick="enterExpense()">Enter Expense</button>
    </form>
    <br>
        <form>
            <label for="newCategoryInput">Enter New Expense Category:</label><br>
            <input type="text" id="newCategoryInput" name="newCategoryInput">
                <button type="button" class="m-3" onclick="addCategory()">Add Category</button>
        </form>
        <br>
            <form>
                <label for="deleteCategorySelect">Select Category to Delete:</label><br>
                <select id="deleteCategorySelect" name="deleteCategorySelect">
                    <option value="" disabled selected>Enter Category</option>
                    <!-- Options for expense categories will be populated here -->
                </select>
                <button type="button" class="m-3" onclick="deleteCategory()">Delete Category</button>
            </form>

            <!-- Expense list -->
            <div id="budgetDisplay"></div>
            <div id="expenses-display"></div>
            <div id="expense-list">
                <!-- Expenses will be displayed here -->
            </div>
            <!-- Each expense will be added as a list item -->
            <br>

                <script>
                    // JavaScript for the budget tracker

                    // Initialize variables for budget and expenses
                    let budget = 0;
                    let expenses = [];

                    // Check if there is already a budget and expenses stored in local storage
                    if (localStorage.getItem("budget")) {
                    budget = localStorage.getItem("budget");
                }
                    if (localStorage.getItem("expenses")) {
                    expenses = JSON.parse(localStorage.getItem("expenses"));
                }

                    // Function to create a budget
                    function createBudget() {
                    // Get the budget amount from the form
                    budget = document.getElementById("budgetAmount").value;
                    // Store the budget in local storage
                    localStorage.setItem("budget", budget);
                    // Display the budget
                    displayBudget();
                }

                    // Function to update the budget
                    function updateBudget() {
                    // Get the updated budget amount from the form
                    budget = document.getElementById("budgetAmount").value;
                    // Store the updated budget in local storage
                    localStorage.setItem("budget", budget);
                    // Display the budget
                    displayBudget();
                }

                    // Function to enter an expense
                    function enterExpense() {
                    // Get the expense category, amount, and date from the form
                    let expenseCategory = document.getElementById("expenseCategory").value;
                    let expenseAmount = document.getElementById("expenseAmount").value;
                    let expenseDate = document.getElementById("expenseDate").value;
                    // Create an object for the expense with the category, amount, and date
                    let expense = {
                    category: expenseCategory,
                    amount: expenseAmount,
                    date: expenseDate
                };
                    // Add the expense to the expenses array
                    expenses.push(expense);
                    // Store the updated expenses array in local storage
                    localStorage.setItem("expenses", JSON.stringify(expenses));
                    // Display the budget and expenses
                    displayBudget();
                }

                    function deleteExpense(expenseId) {
                    // Find the index of the expense in the expenses array
                    let index = expenses.findIndex(expense => expense.id === expenseId);
                    // Remove the expense from the expenses array
                    expenses.splice(index, 1);
                    // Store the updated expenses array in local storage
                    localStorage.setItem("expenses", JSON.stringify(expenses));
                    // Display the budget and expenses
                    displayBudget();
                }

                    // Function to add a new expense category
                    function addCategory() {
                    // Get the new category from the form
                    let newCategory = document.getElementById("newCategoryInput").value;
                    // Add the new category to the expense categories array
                    expenseCategories.push(newCategory);
                    // Store the updated expense categories array in local storage
                    localStorage.setItem("expenseCategories", JSON.stringify(expenseCategories));
                    // Populate the expense category options
                    populateExpenseCategories();
                }

                    // Function to delete an expense category
                    function deleteCategory() {
                    // Get the category to delete from the form
                    let categoryToDelete = document.getElementById("deleteCategorySelect").value;
                    // Find the index of the category in the expense categories array
                    let categoryIndex = expenseCategories.indexOf(categoryToDelete);
                    // Remove the category from the expense categories array
                    expenseCategories.splice(categoryIndex, 1);
                    // Store the updated expense categories array in local storage
                    localStorage.setItem("expenseCategories", JSON.stringify(expenseCategories));
                    // Populate the expense category options
                    populateExpenseCategories();
                }

                    // Function to display the budget and expenses
                    function displayBudget() {
                    // Initialize variables for the total expenses and remaining budget
                    let totalExpenses = 0;
                    let remainingBudget = budget;
                    // Calculate the total expenses and remaining budget
                    for (let i = 0; i < expenses.length; i++) {
                    totalExpenses += expenses[i].amount;
                    remainingBudget -= expenses[i].amount;
                }

                    // Get the budget display div
                    let budgetDisplayDiv = document.getElementById("budgetDisplay");
                    // Clear the budget display div
                    budgetDisplayDiv.innerHTML = "";
                    // Create a heading for the budget display div
                    let budgetHeading = document.createElement("h2");
                    budgetHeading.innerHTML = "Budget and Expenses";
                    budgetDisplayDiv.appendChild(budgetHeading);
                    // Create a paragraph for the budget amount
                    let budgetAmountPara = document.createElement("p");
                    budgetAmountPara.innerHTML = "Budget: $" + budget;
                    budgetDisplayDiv.appendChild(budgetAmountPara);
                    // Create a paragraph for the total expenses
                    let totalExpensesPara = document.createElement("p");
                    totalExpensesPara.innerHTML = "Total Expenses: $" + totalExpenses;
                    budgetDisplayDiv.appendChild(totalExpensesPara);
                    // Create a paragraph for the remaining budget
                    let remainingBudgetPara = document.createElement("p");
                    remainingBudgetPara.innerHTML = "Remaining Budget: $" + remainingBudget;
                    budgetDisplayDiv.appendChild(remainingBudgetPara);
                    // Create a table for the expenses
                    let expensesTable = document.createElement("table");
                    budgetDisplayDiv.appendChild(expensesTable);
                    // Create a row for the table headings
                    let headingsRow = document.createElement("tr");
                    expensesTable.appendChild(headingsRow);
                    // Create table headings for the category, amount, and date
                    let categoryHeading = document.createElement("th");
                    categoryHeading.innerHTML = "Category";
                    headingsRow.appendChild(categoryHeading);
                    let amountHeading = document.createElement("th");
                    amountHeading.innerHTML = "Amount";
                    headingsRow.appendChild(amountHeading);
                    let dateHeading = document.createElement("th");
                    dateHeading.innerHTML = "Date";
                    headingsRow.appendChild(dateHeading);
                    // Add rows to the table for each expense
                    for (let i = 0; i < expenses.length; i++) {
                    let expenseRow = document.createElement("tr");
                    expensesTable.appendChild(expenseRow);
                    let categoryCell = document.createElement("td");
                    categoryCell.innerHTML = expenses[i].category;
                    expenseRow.appendChild(categoryCell);
                    let amountCell = document.createElement("td");
                    amountCell.innerHTML = "$" + expenses[i].amount;
                    expenseRow.appendChild(amountCell);
                    let dateCell = document.createElement("td");
                    dateCell.innerHTML = expenses[i].date;
                    expenseRow.appendChild(dateCell);
                }
                }
                    // Function to populate the expense category options
                    function populateExpenseCategories() {
                    // Get the expense category select element
                    let expenseCategorySelect = document.getElementById("expenseCategory");
                    // Get the delete category select element
                    let deleteCategorySelect = document.getElementById("deleteCategorySelect");
                    // Clear the options in both select elements
                    expenseCategorySelect.innerHTML = "";
                    deleteCategorySelect.innerHTML = "";
                    // Add an option to both select elements for each expense category
                    for (let i = 0; i < expenseCategories.length; i++) {
                    let expenseCategoryOption = document.createElement("option");
                    expenseCategoryOption.value = expenseCategories[i];
                    expenseCategoryOption.innerHTML = expenseCategories[i];
                    expenseCategorySelect.appendChild(expenseCategoryOption);
                    let deleteCategoryOption = document.createElement("option");
                    deleteCategoryOption.value = expenseCategories[i];
                    deleteCategoryOption.innerHTML = expenseCategories[i];
                    deleteCategorySelect.appendChild(deleteCategoryOption);
                }
                }

                    // Function to display the budget and expenses
                    function displayBudget() {
                    // Initialize variables for the total expenses and remaining budget
                    let totalExpenses = 0;
                    let remainingBudget = budget;
                    // Calculate the total expenses and remaining budget
                    for (let i = 0; i < expenses.length; i++) {
                    totalExpenses += expenses[i].amount;
                    remainingBudget -= expenses[i].amount;
                }

                    // Get the budget display div
                    let budgetDisplayDiv = document.getElementById("budgetDisplay");
                    // Clear the budget display div
                    budgetDisplayDiv.innerHTML = "";
                    // Add the budget and expenses information to the budget display div
                    budgetDisplayDiv.innerHTML += `<h2>Budget: $${budget}</h2>`;
                    budgetDisplayDiv.innerHTML += `<h2>Total Expenses: $${totalExpenses}</h2>`;
                    budgetDisplayDiv.innerHTML += `<h2>Remaining Budget: $${remainingBudget}</h2>`;

                    // Get the expense list div
                    let expenseListDiv = document.getElementById("expense-list");
                    // Clear the expense list div
                    expenseListDiv.innerHTML = "";
// Add the expense description to the top of the list
                    expenseListDiv.innerHTML = `
  <div class="expense-description">
    <span class="expense-category">Category</span>
    <span class="expense-amount">Amount</span>
    <span class="expense-date">Date</span>
  </div>
`;

// Iterate through the expenses array and add the values to the list
                    for (let i = 0; i < expenses.length; i++) {
                    expenseListDiv.innerHTML += `
    <div class="expense" data-expense-id="${expenses[i].id}">
      <span class="expense-category">${expenses[i].category}</span>
      <span class="expense-amount">$${expenses[i].amount}</span>
      <span class="expense-date">${expenses[i].date}</span>
    </div>
  `;
                }

// Add to delete expense form to the expense list div
                    expenseListDiv.innerHTML += `
  <form id="delete-expense-form">
    <label for="expense-to-delete">Select Expense to Delete:</label><br>
    <select id="expense-to-delete" name="expense-to-delete">
      <option value="" disabled selected>Select an expense</option>
      <!-- Options for expenses will be populated here -->
    </select>
    <button type="button" class="m-3" onclick="deleteSelectedExpense()">Delete Expense</button>
  </form>
`;

// Populate the options for the expenses select dropdown
                    populateExpenses();
                }

                    // Function to populate the options for the expenses select dropdown
                    function populateExpenses() {
                    // Get the expenses select dropdown
                    let expensesSelect = document.getElementById("expense-to-delete");
                    // Clear the options
                    expensesSelect.innerHTML = "";
                    // Add the default option
                    expensesSelect.innerHTML += `<option value="" disabled selected>Select an expense</option>`;
                    // Iterate through the expenses array and add an option for each expense
                    for (let i = 0; i < expenses.length; i++) {
                    expensesSelect.innerHTML += `<option value="${expenses[i].id}">${expenses[i].category} - $${expenses[i].amount} - ${expenses[i].date}</option>`;
                }
                }

                    // Function to delete the selected expense
                    function deleteSelectedExpense() {
                    // Get the selected expense id
                    let expenseId = document.getElementById("expense-to-delete").value;
                    // Delete the expense
                    deleteExpense(expenseId);
                }

                    document.getElementById("newCategoryInput").addEventListener("input", function() {
                    document.querySelector("#deleteCategorySelect option[value='']").value = this.value;
                });


                    // Initialize the expense categories array
                    let expenseCategories = [];

                    // Check if there is already an expense categories array stored in local storage
                    if (localStorage.getItem("expenseCategories")) {
                    expenseCategories = JSON.parse(localStorage.getItem("expenseCategories"));
                }

                    // Populate the expense category options
                    populateExpenseCategories();

                    // Display the budget and expenses
                    displayBudget();

                </script>
</body>
<!-- Footer-->
<div id="footer"></div>
<!-- Bootstrap core JS-->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
<!-- Core theme JS-->
<script src="js/scripts.js"></script>
</html>