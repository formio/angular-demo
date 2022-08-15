describe('My First Test', () => {
  it('Visits the initial project page and verify components', () => {
    cy.visit('/')
    cy.get('.navbar-brand').should("be.visible")
    cy.get('#navbarDropdown').should("be.visible")
    cy.get('[href="https://form.io"] > img').should("be.visible")
    cy.get('h2').should("be.visible")
    cy.get('.jumbotron > p').should("be.visible")
   
  })

  it('verify form submission ', () => {

    cy.get("input[name='data[firstName]']").should("be.visible").type("Some Name")
    cy.get("[placeholder='Enter your last name']").type("Some Name")
    cy.get("[name='data[email]']").type("Some@Name.com")
    cy.get("[inputmode='decimal']").type("1234564545")
    cy.get("[type='radio'][value='excellent']").eq(0).click()
    cy.get("[type='radio'][value='excellent']").eq(1).click()
    cy.get("[type='radio'][value='excellent']").eq(2).click()
    cy.get('.signature-pad-canvas').click()
    cy.get("button[name='data[submit]']").click()
    cy.get(".alert.alert-success").should("be.visible")
    cy.get("span[ref='buttonMessage']").should("be.visible")
    cy.get(".btn-primary.submit-success").should("be.visible")
  })



})
