// Define the company options for each category
const categoryCompanies = {
    "VLSI": ["Cadence", "Qualcomm"],
    "FullStack": ["IBM", "Accenture"],
    "Communications": ["ManPower", "Aerotek"],
    "AIML": ["Amazon", "NVDIA"]
};

// Function to update the company select options based on the selected category
function updateCompanySelect() {
    let category = document.getElementById("category-select").value;
    let companySelect = document.getElementById("company-select");

    // Clear existing options
    companySelect.innerHTML = '';

    // Add default option
    let defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.text = "Select Company";
    companySelect.appendChild(defaultOption);

    // Add new company options based on selected category
    categoryCompanies[category].forEach(function(company) {
        let option = document.createElement("option");
        option.value = company;
        option.text = company;
        companySelect.appendChild(option);
    });

    // Update salary details
    updateSalaryDetails();
}

// Function to calculate and display salary details based on selected filters
function updateSalaryDetails() {
    // Get selected values
    let company = document.getElementById("company-select").value;
    let taxRate = parseInt(document.getElementById("tax-select").value);

    // Define base salaries for each company
    let companySalaries = {
        "Cadence": 5740,
        "Qualcomm": 5491,
        "IBM": 6410,
        "Accenture": 6719,
        "ManPower": 7000,
        "Aerotek": 7500,
        "Amazon": 8000,
        "NVDIA": 8500
    };

    // Get the base salary for the selected company
    let baseSalary = companySalaries[company] || 0;

    // Calculate tax deduction
    let taxDeduction = (taxRate / 100) * baseSalary;

    // Calculate final salary after tax
    let finalSalary = baseSalary - taxDeduction;

    // Update the displayed salary details
    document.getElementById("company-salary").innerText = `Company Salary: $${baseSalary}`;
    document.getElementById("tax-deduction").innerText = `Tax Deduction: $${taxDeduction.toFixed(2)}`;
    document.getElementById("final-salary").innerText = `Final Salary: $${finalSalary.toFixed(2)}`;
}

// Add event listeners for filter changes
document.getElementById("category-select").addEventListener("change", updateCompanySelect);
document.getElementById("company-select").addEventListener("change", updateSalaryDetails);
document.getElementById("tax-select").addEventListener("change", updateSalaryDetails);

// Initial call to populate company select and update salary details
updateCompanySelect();
