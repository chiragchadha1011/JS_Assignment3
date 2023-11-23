// Get the student information and dynamically add it to the page
const studentInfoElement = document.getElementById("student-info");
const studentId = "200515506"; // Replace with your actual student ID
const studentName = "Chirag Chadha"; // Replace with your actual name
studentInfoElement.textContent = `Student ID: ${studentId}, Name: ${studentName}`;

// Function to capture form values and create a Pizza object
function submitOrder() {
    // Get form elements
    const pizzaSize = document.getElementById("pizzaSize").value;
    const crust = document.querySelector('input[name="crust"]:checked').value;
    const toppings = document.getElementById("toppings").value.split(",");
    const extraToppings = Array.from(document.querySelectorAll('input[name="extraToppings"]:checked'), checkbox => checkbox.value);
    const customerName = document.getElementById("customerName").value;
    const address = document.getElementById("address").value;

    // Create a Pizza object
    const pizzaOrder = new Pizza(pizzaSize, crust, toppings, extraToppings, customerName, address);

    // Display the order summary
    displayOrder(pizzaOrder);
}

// Pizza class constructor
class Pizza {
    constructor(size, crust, toppings, extraToppings, customerName, address) {
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
        this.extraToppings = extraToppings;
        this.customerName = customerName;
        this.address = address;
    }
}

// Function to display the order summary on the HTML page
function displayOrder(pizza) {
    const orderDescriptionElement = document.getElementById("orderDescription");
    const orderTotalElement = document.getElementById("orderTotal");

    // Build the order description
    const orderDescription = `Size: ${pizza.size}, Crust: ${pizza.crust}, Toppings: ${pizza.toppings.join(", ")}, Extra Toppings: ${pizza.extraToppings.join(", ")}, Customer Name: ${pizza.customerName}, Delivery Address: ${pizza.address}`;

    // Display the order description on the page
    orderDescriptionElement.textContent = orderDescription;

    // You can calculate the order total based on the pizza details and display it as well
    // For simplicity, let's assume a flat rate for the pizza
    const orderTotal = "Order Total: $15.00"; 
    orderTotalElement.textContent = orderTotal;
}
