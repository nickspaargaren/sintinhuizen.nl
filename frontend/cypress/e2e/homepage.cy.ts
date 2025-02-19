/// <reference types="cypress" />
import "cypress-html-validate/commands";

describe("Homepage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should contain an H1 tag", () => {
    cy.get("h1").should("exist");
  });

  it("should have valid html", () => {
    cy.htmlvalidate();
  });
});
