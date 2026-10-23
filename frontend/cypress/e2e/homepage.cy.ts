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

  it("shows the 2026 flyer and downloads instead of the old flyers", () => {
    cy.get('a[href="/downloads/poster-sint-2026.pdf"] img').should("exist");
    cy.get('a[href="/downloads/brief-aan-omwonenden-2026.pdf"]').should(
      "exist",
    );
    cy.get('a[href="/downloads/draaiboek-sinterklaas-2026.pdf"]').should(
      "contain",
      "Draaiboek 2026",
    );
    cy.get('a[href*="-2025.pdf"]').should("not.exist");
    cy.get("h2").should("not.contain", "Huizer Museum");

    [
      "/downloads/poster-sint-2026.pdf",
      "/downloads/brief-aan-omwonenden-2026.pdf",
      "/downloads/draaiboek-sinterklaas-2026.pdf",
    ].forEach((url) => {
      cy.request({ method: "HEAD", url }).its("status").should("eq", 200);
    });
  });
});
