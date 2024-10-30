describe("Task Addition", () => {
  beforeEach(() => {
    cy.clearLocalStorage();

    cy.visit("http://localhost:3000");
  });
  it("adds a new task", () => {
    cy.get("[data-cy=input-todo]").type("Learn E2E Testing");
    cy.get("[data-cy=button-add]").click();

    cy.contains("Learn E2E Testing").should("be.visible");
    cy.get("[data-testId='toDo']")
      .contains("Learn E2E Testing")
      .should("exist");

    cy.window().then((win) => {
      const tasks = JSON.parse(win.localStorage.getItem("TO_DO_LIST"));
      const completedTask = tasks.find(
        (task) => task.toDo === "Learn E2E Testing"
      );
      expect(completedTask.isCompleted).to.be.false;
    });
  });
});
