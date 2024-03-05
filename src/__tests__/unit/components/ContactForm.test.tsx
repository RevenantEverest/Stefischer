import '@testing-library/jest-dom';
import '../../mocks/intersectionObserver';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Provider } from 'react-redux';
import { store } from '@@store/index';

import ContactForm from '@@components/Forms/ContactForm';

type InputName = "name" | "email" | "phoneNumber" | "message";
type InputElements = Record<InputName | "submit", HTMLElement>;

type ErrorElements = Record<InputName, HTMLElement | null>;

type FormValues = Record<InputName, string>; 

const FORM_VALUES: Record<"VALID" | "INVALID", FormValues> = {
    VALID: {
        name: "John Doe",
        email: "example@example.com",
        phoneNumber: "1234567890",
        message: "some message"
    },
    INVALID: {
        name: "---0098912jd11",
        email: "invalid email",
        phoneNumber: "abcdefghijklmnopqrstuvwxyz",
        message: "a"
    }
};

describe("Contact Form", () => {
    const setup = (): InputElements => {
        render(
            <Provider store={store}>
                <ContactForm onSubmit={() => null} />
            </Provider>
        );

        const nameInput = screen.getByTestId(/contact-form-name-input/i);
        const emailInput = screen.getByTestId(/contact-form-email-input/i);
        const phoneNumberInput = screen.getByTestId(/contact-form-phoneNumber-input/i);
        const messageInput = screen.getByTestId(/contact-form-message-input/i);
        const submitInput = screen.getByTestId(/contact-form-submit-button/i);

        return { 
            name: nameInput, 
            email: emailInput, 
            phoneNumber: phoneNumberInput,
            message: messageInput,
            submit: submitInput
        };
    };

    const getErrorElements = (): Omit<ErrorElements, "name"> => {
        const emailError = screen.queryByText(/Not a valid Email/i);
        const phoneNumberError = screen.queryByText(/Not a valid Phone Number/i);
        const messageError = screen.queryByText(/Please add more content to your message/i);

        return {
            email: emailError,
            phoneNumber: phoneNumberError,
            message: messageError
        };
    };

    test("form values", async () => {
        const inputs = setup();
        const user = userEvent.setup();

        await user.type(inputs.name, FORM_VALUES.VALID.name);
        expect(inputs.name).toHaveValue(FORM_VALUES.VALID.name);

        await user.type(inputs.email, FORM_VALUES.VALID.email);
        expect(inputs.email).toHaveValue(FORM_VALUES.VALID.email);

        await user.type(inputs.phoneNumber, FORM_VALUES.VALID.phoneNumber);
        expect(inputs.phoneNumber).toHaveValue(FORM_VALUES.VALID.phoneNumber);

        await user.type(inputs.message, FORM_VALUES.VALID.message);
        expect(inputs.message).toHaveValue(FORM_VALUES.VALID.message);

        await user.click(inputs.submit);

        const errors = getErrorElements();

        expect(errors.email).not.toBeInTheDocument();
        expect(errors.phoneNumber).not.toBeInTheDocument();
        expect(errors.message).not.toBeInTheDocument();
    });

    test("form validation", async () => {
        const inputs = setup();
        const user = userEvent.setup();
        
        await user.type(inputs.name, FORM_VALUES.INVALID.name);
        expect(inputs.name).toHaveValue(FORM_VALUES.INVALID.name);

        await user.type(inputs.email, FORM_VALUES.INVALID.email);
        expect(inputs.email).toHaveValue(FORM_VALUES.INVALID.email);

        await user.type(inputs.phoneNumber, FORM_VALUES.INVALID.phoneNumber);
        expect(inputs.phoneNumber).toHaveValue(FORM_VALUES.INVALID.phoneNumber);

        await user.type(inputs.message, FORM_VALUES.INVALID.message);
        expect(inputs.message).toHaveValue(FORM_VALUES.INVALID.message);

        await user.click(inputs.submit);

        const errors = getErrorElements();

        expect(errors.email).toBeInTheDocument();
        expect(errors.phoneNumber).toBeInTheDocument();
        expect(errors.message).toBeInTheDocument();
    });
});