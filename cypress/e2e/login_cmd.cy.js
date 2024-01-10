// Test 1. 
describe('User can login to GoIT page', () => {
    // a. Test otworzy stronę https://www.edu.goit.global/account/login 
    beforeEach('go to page', () => {
        cy.visit('https://www.edu.goit.global/account/login');
    });

    // Asercja wyświetlania strony logowania
    it('successfully navigates to the GoIT page', () => {
        cy.url().should('include', 'account/login')
    });

    // b. Użyj polecenia logowania:
    it('successfully login to the GoIT page', () => {
        //I. Polecenie odnajdzie pole email i wpisze email user888@gmail.com.
        cy.get('#user_email').type('user888@gmail.com');
        // II. Wprowadzi hasło 1234567890
        cy.get('[name="password"]').type('1234567890');
        // III. Wciśnie przycisk Log in
        cy.get('button[type="submit"]').click();
        // Asercja poprawnego zalogowania się na stronę
        cy.url().should('include', 'homepage');
        // IV. Znajdzie przycisk w prawym górnym rogu
        // V. Otwiera menu strony
        cy.get('#open-navigation-menu-mobile').click();
        // VI. W menu znajduje przycisk **Log out**
        // VII. Klika na niego i wraca do strony logowania
        cy.wait(3000);
        cy.get(':nth-child(11) > .next-bve2vl').click();
        // Asercja poprawnego wylogowania
        cy.url().should('include', 'account/login');
    })

})