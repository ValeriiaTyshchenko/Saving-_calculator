///<reference types = "Cypress"/>

describe('navigate to main page', () => {
    
    const home_button = '[id="menu-item-31"]';
    const about_us_page = '[class="inn-tital"]';
    const menu_button = '[id="menu-item-36"]';
    const home_page = '[class="about-lrt"]';
    const products_button = '[id="menu-item-32"]';
    const products_page = '[class="inn-tital"]';
    const services_button = '[id="menu-item-34"]';
    const services_page = '[class="inn-tital"]';
    const tools_button = '[id="menu-item-35"]';
    const tools_page = '[class="inn-tital"]';
    const promotions_button = '[id="menu-item-673"]';
    const promotions_page = '[class="inn-tital"]';
    const careers_button = '[id="menu-item-1589"]';
    const careers_page = '[class="about_midd"]';
    const blog_button = '[id="menu-item-1725"]';
    const blog_page = '[class="inn-tital"]';
    const faq_button = '[id="menu-item-1727"]';
    const faq_page = '[class="inn-tital"]';
    const contact_button = '[id="menu-item-1726"]';
    const contact_page = '[class="inn-tital"]';
    beforeEach(() => {
      cy.visit('https://consumersenergymanagement.ca')
      cy.url().should('eq', 'https://consumersenergymanagement.ca/')
  
    })

    it('click on the Home menu', () => {
        cy.get(home_button).should('be.visible')
        cy.get(home_button).click()
        cy.get(home_page).should('be.visible').contains( ' About')
        cy.url().should('eq', 'https://consumersenergymanagement.ca/')
      })

      it('click on the About button', () => {
        cy.get(menu_button).should('be.visible')
        cy.get(menu_button).click()
        cy.get(about_us_page).should('be.visible').invoke('val', 'About Consumers Energy Management Inc.')
        cy.url().should('have.string', 'about-us')
      })

      it('click on the Products button', () => {
        cy.get(products_button).should('be.visible')
        cy.get(products_button).click()
        cy.get(products_page).should('be.visible').invoke('val', 'Products')
        cy.url().should('have.string', 'products')
      })
      it('click on the Services button', () => {
        cy.get(services_button).should('be.visible')
        cy.get(services_button).click()
        cy.get(services_page).should('be.visible').invoke('val', 'Services')
        cy.url().should('have.string', 'services')
      })

      it('click on the Tools button', () => {
        cy.get(tools_button).should('be.visible')
        cy.get(tools_button).click()
        cy.get(tools_page).should('be.visible'). invoke('val', 'Tools & Resources')
        cy.url().should('have.string', 'tools-resources')
      })

      it('click on the Promotions button', () => {
        cy.get(promotions_button).should('be.visible')
        cy.get(promotions_button).click()
        cy.get(promotions_page).should('be.visible').invoke('val', 'Promotions')
        cy.url().should('have.string', 'promotions')
      })

      it('click on the Career button', () => {
        cy.get(careers_button).should('be.visible')
        cy.get(careers_button).click()
        cy.get(careers_page).should('be.visible').invoke('val', 'Careers')
        cy.url().should('have.string', 'careers')
      })

      it('click on the Blog button', () => {
        cy.get(blog_button).should('be.visible')
        cy.get(blog_button).click()
        cy.get(blog_page).should('be.visible').invoke('val', 'Blog')
        cy.url().should('have.string', 'blog')
      })
      
      it('click on the FAQs button', () => {
        cy.get(faq_button).should('be.visible')
        cy.get(faq_button).click()
        cy.get(faq_page).should('be.visible').invoke('val', 'Frequently Asked Questions')
        cy.url().should('have.string', 'faq')
      })
      it('click on the Contact button', () => {
        cy.get(contact_button).should('be.visible')
        cy.get(contact_button).click()
        cy.get(contact_page).should('be.visible').invoke('val', 'Contact Us')
        cy.url().should('have.string', 'contact-us')
      })
  })