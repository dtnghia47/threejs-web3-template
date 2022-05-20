const baseUrl = Cypress.config().baseUrl;
declare var cy;
describe('Home page', () => {
  /**
   * Visits the home page before any test.
   */
  before(() => {
    cy.visit('/');
  });

  /**
   * Prepare aliases before each test. (they're destroyed at the end of each test)
   */
  beforeEach(() => {
    // cy.prepareDOMAliases();
  });

  it('should display page title', () => {
    // cy.title().should('include', 'Home page');
    cy.get('.title-page')
      .should('have.text', 'Home page');
  });

  it('should display a main header', () => {
    cy.get('header')
      .should('be.visible');
  });

  it('should display 1 navbar with 2 links', () => {
    cy.get('header a')
      .should('be.visible')
      .should('have.length', 2);
  });

  it('should display at least 1 active link in navbar', () => {
    cy.get('header a.active').should('be.visible');
  });

  it('should navigate to /count page on click', () => {
    cy.get('header a:last').click();

    cy.location().should(location => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      expect(location.hash).to.be.empty;
      expect(location.href).to.eq(`${baseUrl}/count`);
      expect(location.search).to.be.empty;
    });
  });

  it('increase count', () => {
    let currentValue;
    cy.get('.number')
      .invoke('text')
      .then((text1) => {
          currentValue = parseFloat(text1)
          cy.get('button:last').click();
          
          cy.get('.number')
            .should('have.text', (currentValue + 1).toString());
        });
  })

  it('reset count', () => {
    let currentValue;
    cy.get('.number')
      .invoke('text')
      .then((text1) => {
          currentValue = parseFloat(text1)
          cy.get('button:last').click();
          
          cy.get('.number')
            .should('have.text', (currentValue + 1).toString());

          cy.get('button:first').click();
          cy.get('.number')
            .should('have.text', '0');
      });
  })
});

export {};
