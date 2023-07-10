/// <reference types="cypress" />

import expensesPage from "../../page-object/expenses-page"

describe("User upload expense file and delete", () => {
    it("User upload .jpeg format expense file ", () => {

        cy.visit("https://tht.corpayone.com/")
        expensesPage.clickChooseExpensesFile()

    })

    it("User delete unpaid expense file ", () => {

        expensesPage.clickExpenseDeleteButton()

    })
})
