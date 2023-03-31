///<reference types="Cypress"/>
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
import { data1} from '../fixtures/params.json'
import { data2} from '../fixtures/params.json'
describe('Heat price calculation', () => {

    const select_state_field = '[name="nastates"]';
    const select_city_field = '[name="stage2"]';
    const stories_field = '[name="stories"]';
    const square_feet_field = '[name="squarefeet"]';
    const years_field = '[name="houseage"]';
    const heat_type_field = '[name="heattype"]';
    const current_heating_cost_field = '[id="CHC"]';
    const new_heat_type_field = '[name="heatingtype"]';
    const new_heating_cost_field = '[id="NHC"]';
    const annual_heating_cost_field = '[id="AHS"]';
    const total_saving_column = '[id="VTAS"]';
    const ten_yers_saving_column = '[id="VTES"]';


    before(() => {
        cy.visit('https://consumersenergymanagement.ca/savings-calculator/')
        cy.url().should('eq', 'https://consumersenergymanagement.ca/savings-calculator/')


    })

    it('Populate all field', () => {
        cy.get(select_state_field).should('be.visible')
        cy.get(select_state_field).select('Ontario').should('contain', 'Ontario').should('be.visible')
        cy.get(select_city_field).select('Toronto').should('contain', 'Toronto').should('be.visible')
        cy.get(stories_field).select('3').should('have.value', '3').should('be.visible')
        cy.get(square_feet_field).select('1500').should('have.value', '1500').should('be.visible')
        cy.get(years_field).type('20{enter}').should('have.value', '20').should('be.visible')

    

    
    })

    it('Verify choosing each Current Heating type change price in Current Heating Cost column', () => {
        
        
        cy.get(heat_type_field).should("be.visible").children().first().should("have.text", "Current Heater")
        cy.get(current_heating_cost_field).invoke("text").should("eq", "$0.00")
        
        data1.forEach(element => {
    
            cy.get(heat_type_field).select(element.cur_heat).invoke('val').should('eq', element.value)
    
            cy.get(current_heating_cost_field).should("have.text", element.price).should("be.visible")
         
        })


    })

    it('Verify choosing each New Heating type change price in New Heating Cost column', () => {
        
        
        cy.get(new_heat_type_field).should("be.visible").children().first().should("have.text", "New Heater")
        cy.get(new_heating_cost_field).invoke("text").should("eq", "$0.00")
        
        data2.forEach(element => {
    
            cy.get(new_heat_type_field).select(element.new_heat).invoke('val').should('eq', element.value)
    
            cy.get(new_heating_cost_field).should("have.text", element.price).should("be.visible")
         
        })


    })
    
    it('Verify choosing each New Heating type change price in New Heating Cost column', () => {
        
        

        cy.get(heat_type_field).select("Natural Gas").invoke('val').should('eq', 'aNaturalGas')
        cy.get(new_heat_type_field).select("Oil").invoke('val').should('eq', 'Oil')
        cy.get(annual_heating_cost_field).should("have.text", "-$5,363.69").should("be.visible")
        
        cy.get(heat_type_field).select("Propane").invoke('val').should('eq', 'Propane')
        cy.get(new_heat_type_field).select("Electric").invoke('val').should('eq', 'Electric')
        cy.get(annual_heating_cost_field).should("have.text", "$7,901.18").should("be.visible")
      


    })

    
    it('Verify when new and old type are choosen, total saving are update', () => {
        
        

        cy.get(heat_type_field).select("Natural Gas").invoke('val').should('eq', 'aNaturalGas')
        cy.get(new_heat_type_field).select("Oil").invoke('val').should('eq', 'Oil')
        cy.get(total_saving_column).should("have.text", "-$5,363.69").should("be.visible")
        cy.get(ten_yers_saving_column).should("have.text", "-$53,636.87").should("be.visible")
        
        cy.get(heat_type_field).select("Propane").invoke('val').should('eq', 'Propane')
        cy.get(new_heat_type_field).select("Electric").invoke('val').should('eq', 'Electric')
        cy.get(total_saving_column).should("have.text", "$7,901.18").should("be.visible")
        cy.get(ten_yers_saving_column).should("have.text", "$79,011.83").should("be.visible")
      


    })




})
