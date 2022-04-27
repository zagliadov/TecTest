import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Expenses } from "./Expenses";

describe("Expenses component", () => {
  it("Expenses render", async () => {
    render(<Expenses />);
    await screen.findByText(/Logged in as/i);
    expect(screen.queryByText(/Searches for React/)).toBeNull();

    userEvent.type(screen.getByRole('textbox'), "React");
    expect(screen.getByText(/Searches for React/)).toBeInTheDocument();
  });
});

describe("events", () => {
  it("checkbox click", () => {
    const handleChange = jest.fn();
    const { container } = render(
      <input type="checkbox" onChange={handleChange} />
    );
    // eslint-disable-next-line testing-library/no-node-access
    const checkbox = container.firstChild;
    expect(checkbox).not.toBeChecked();
    userEvent.click(checkbox); //Клик по checkbox
    userEvent.click(checkbox, { ctrlKey: true, shiftKey: true}); //Проверяем были ли нажаты соответсвующие кнопки
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(checkbox).toBeChecked();
  });
  it("input focus", () => {
    const { getByTestId } = render(
      <input type="text" data-testid="simple-input" />
    );
    // const input = getByTestId("simple-input");
  });
});
