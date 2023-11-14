/// <reference types="cypress" />

describe("General", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Page should contain an H1 tag", () => {
    cy.get("h1").should("exist");
  });
});