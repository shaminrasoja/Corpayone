const BTN_ChooseFile = "label[class=\"form-label\"]";
const BTN_ViewExpense = "button[class=\"btn btn-primary\"]";
const BTN_DeleteExpense = "button[class=\"btn btn-danger\"]";

class ExpensesPage{

    static clickChooseExpensesFile() {
        cy.get(BTN_ChooseFile).selectFile('cypress/fixtures/receipt.jpeg')
        cy.wait(15000);
    }

    static clickExpenseDeleteButton() {
        cy.get(BTN_DeleteExpense).click();
    }


}
export default ExpensesPage;