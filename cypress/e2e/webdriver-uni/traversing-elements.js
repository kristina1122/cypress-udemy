/// <reference types="Cypress" />
describe("Traversing DOM elements in Cypress", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
  })
  it("children() to get the children of DOM elements", () => {
    cy.get('.traversal-breadcrumb').children('.active').should('contain', 'Contact Us')
  }); // здесь из менб мы легко по классу .active выбрали табу Contact us, но непонятно, как выбрать табы, у которых нет класса эктив?

  it("closest() to validate the closest ancestor DOM element", () => {
    cy.get('.traversal-badge').closest('ul').should('have.class', 'list-group') //used to find element (значок)
  });

  it("eq() to retrieve a specific element based on index", () => {
    cy.get('.traversal-drinks-list > *').eq(2).should('contain', 'Milk') //помогает найти запись в списке
  });

  it("filter() to retrieve DOM elements that match a specific selector", () => {
    cy.get('.btn-group-toggle > *').filter('.active').should('contain', 'Button-1')

  });

  it("find() to retrieve DOM elements of a given selector", () => {
    // f.e for test pagination
    cy.get('.traversal-pagination').find('li').find('a').should('have.length', 7 )
    // 1 find - чтобы найти список, 2 find - чтобы захватить все опции с тагом "а"
  });

  it("first() to retrieve the first DOM element within elements ", () => {
    cy.get('.traversal-table > tbody > tr > td').first().should('contain', 'Andy')
    // этот способ чтобы найти первую запись в таблице. К таблице пробирались через классы
  });

  it("last() to retrieve the last DOM element within elements", () => {
    cy.get('.traversal-table > tbody > tr > td').last().should('contain', 'Scott')
    // этот способ чтобы найти последнюю запись в таблице. К таблице пробирались через классы
  });

  it("nextAll() to get all of the next sibling DOM elements within elements", () => {
    cy.get('.traversal-drinks-list').contains('Tea').nextAll().should('have.length', '3')
    //здесь мы проверили кол-во результатов (число) в списке после объекта Tea/ те в списке после Tea еще 3 записи

  });

  it("nextUntil() to get all of the next sibling DOM elements within elements until another element", () => {
    cy.get('#coffee').nextUntil('#milk').should('contain', 'Tea')

  // этот способ находил резельтат строку спрятанныую между строк. в этом примере, между кофе и милк находится чай

  });

  it("not() to remove DOM element(s) from the set of elements", () => {
    //find all btns and exclude btn wchich is disabled
    cy.get('.traversal-button-states > button').not('.disabled').should('not.have.class', 'disabled')
  });

  it("parent() To get parent DOM element of elements", () => {
    cy.get('.traversal-mark').parent().should('contain', 'Lorem ipsum dolor sit amet,')
    //здесь мы находим нужный элемент(выделенный текст, у него есть свой класс) в родительском домене
  });

  it("parents() to get parents DOM element of elements", () => {
    cy.get('.traversal-cite').parent().should('match', 'blockquote')
    // мы нашли текст через класс внутри родителя, у которого есть таг блоккуот
  });

  it("prev() to get the previous sibling DOM element within elements", () => {
    //найти то, что выше над нужным результатом (в списке, например)
    cy.get('#sugar').prev().contains('Espresso')
  });

  it("prevAll() to get all previous sibling DOM elements within elements", () => {
    cy.get('.sales').prevAll().should('have.length', 2)
    //здесь мы ищем общее количество результатов, которые находятся над элементом, который мы ищем

  });

  it("prevUntil() to get all previous sibling DOM elements within elements until other element", () => {
    cy.get('#veggie').prevUntil('#fruits').should('have.length', 5)
    // здесь результат это количество записей, которые находятся между овощами (они ниже) и фруктами (они вверху) используя команду, которая считает результаты над объектом до определенного объекта
  });

  it("siblings() To get all sibling DOM elements of elements", () => {
    cy.get('.traversal-button-other-states .active').siblings().should('have.length', 3)
    //siblings это смежные эелементы
  });
});
