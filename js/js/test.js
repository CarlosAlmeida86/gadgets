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

// Function to add to the budget
function addToBudget() {
    // Get the amount to add from the form
    let amountToAdd = document.getElementById("budgetAmount").value;
    // Add the amount to the budget
    budget += amountToAdd;
    // Store the updated budget in local storage
    localStorage.setItem("budget", budget);
    // Display the budget
    displayBudget();
}

// Function to remove from the budget
function removeFromBudget() {
    // Get the amount to remove from the form
    let amountToRemove = document.getElementById("budgetAmount").value;
    // Remove the amount from the budget
    budget -= amountToRemove;
    // Store the updated budget in local storage
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
