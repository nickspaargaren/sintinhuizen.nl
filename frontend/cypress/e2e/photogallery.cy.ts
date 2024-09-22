/// <reference types="cypress" />

describe("PhotoGallery", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Can open and navigate the images in the photo gallery", () => {
    cy.wait(1000);
    cy.get("[data-cy=photogallery]").first().find(".item").first().click();

    cy.wait(1000);
    cy.get(".pswp__button--arrow--next").click();

    cy.wait(1000);
    cy.get(".pswp__button--arrow--next").click();

    cy.wait(1000);
    cy.get("[aria-label=Close]").click();
  });
});
