import Index from './index.vue'

describe('<Advent1 />', () => {
  it('fetch some products', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Index)

    cy.get('input').type('phone')
    cy.get('ul').children().should('have.length', 23)
  })

  it('show an alert when no products are found', () => {
    // Arrange
    cy.intercept(`https://dummyjson.com/products/search*`, {
      body: {
        products: [],
      },
    })

    cy.on('window:alert', (val) => {
      expect(val).to.eq('No products were found. Please try again.')
    })
    // Act

    cy.mount(Index)
    // Assert
    cy.get('input').type('dog')
    cy.get('ul').children().should('have.length', 0)
  })
})
