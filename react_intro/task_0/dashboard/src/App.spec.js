import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders School Dashboard heading", () => {
    render(<App />);
    const headingElement = screen.getByRole("heading", { level: 1, name: /School Dashboard/i });
    expect(headingElement).toBeInTheDocument();
  });

test("renders correct text in App-body and App-footer", () => {
    render(<App />);
    const bodyText = screen.getByText("Login to access the full dashboard");
    const footerText = screen.getByText("Copyright 2020 - holberton School");
    expect(bodyText).toBeInTheDocument();
    expect(footerText).toBeInTheDocument();
});

test('renders an image element', () => {
    render(<App />);
    const imgElement = screen.getByRole('img');
    expect(imgElement).toBeInTheDocument();
  });

