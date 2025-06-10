import {render, screen} from "@testing-library/react"
import Contact from "../Contact";


describe("Contact Us Page Test Case", () => {

    test("Should load Contact Us component", () => {
    
        render(<Contact />)
    
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
        
    });
    
    test("Should load button inside Contact component", () => {
    
        render(<Contact />)
    
        const button = screen.getByText("Submit");
    
        expect(button).toBeInTheDocument();
        
    });
    
    test("Should load input box inside Contact component", () => {
    
        render(<Contact />)
    
        const input = screen.getByPlaceholderText("name");
    
        expect(input).toBeInTheDocument();
        
    });
    
    test("Should load 2 input boxes on the Contact component", () => {
    
        render(<Contact />)
    
        const inputBoxes = screen.getAllByRole("textbox");
    
        console.log(inputBoxes.length);
    
        expect(inputBoxes.length).toBe(2);
        
    });
})