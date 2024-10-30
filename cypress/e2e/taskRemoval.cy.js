describe("Task Removal", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit("http://localhost:3000");
    cy.window().then((win) => {
      win.localStorage.setItem(
        "TO_DO_LIST",
        JSON.stringify([{ toDo: "Sample Task", isCompleted: false }])
      );
    });
    cy.reload();
  });
  it("should remove task from list", () => {
    cy.get("[data-testId='toDo']").contains("Sample Task").should("exist");

    cy.get("[data-testId='toDo']")
      .contains("Sample Task")
      .find("[data-cy='remove-button']")
      .click();

    cy.get("[data-testId='toDo']").contains("Sample Task").should("not.exist");

    cy.window().then((win) => {
      const tasks = JSON.parse(win.localStorage.getItem("TO_DO_LIST"));
      const completedTask = tasks.find((task) => task.toDo === "Sample Task");
      expect(completedTask).to.be.undefined;
    });
  });
});
