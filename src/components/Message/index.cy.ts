import Message from './index.vue'

describe('<Message />', () => {
  it('Renders variant correctly when passed', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Message, {
      props: {
        variant: 'success',
      },
    })

    cy.get('div').should('have.class', 'success')
  })
})
