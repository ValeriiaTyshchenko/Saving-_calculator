///<reference types = "Cypress"/>
import { data } from '../fixtures/params.json'

describe('location tests', () => {


    const select_state_field = '[name="nastates"]';
    const select_city_field = '[name="stage2"]'



    beforeEach(() => {
        cy.visit('https://consumersenergymanagement.ca/savings-calculator/')
        cy.url().should('eq', 'https://consumersenergymanagement.ca/savings-calculator/')
    })



    it('Positive test Jerusalem', () => {
        data.forEach(element => {


            cy.get(select_state_field).should('be.visible')
            cy.get(select_state_field).select(element.State, { force: true }).should('have.value', element.State).should('be.visible')
            cy.get(select_city_field).select(element.city).should('have.value', element.value).should('be.visible')
        })
    })
})