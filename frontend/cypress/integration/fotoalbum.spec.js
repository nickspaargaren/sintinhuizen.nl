/// <reference types="cypress" />

describe("Fotoalbum", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Can open and navigate the images in the Fotoalbum", () => {

    cy.wait(1000);
    cy.get("[data-cy=fotoalbum]").first().find('.item').first().click();

    cy.wait(1000);
    cy.get(".pswp__button--arrow--next").click();

    cy.wait(1000);
    cy.get(".pswp__button--arrow--next").click();

    cy.wait(1000);
    cy.get("[aria-label=Close]").click();
  });
});
