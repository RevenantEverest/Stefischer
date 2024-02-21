import type { FormikHelpers } from 'formik';

import { useFormik } from 'formik';
import { Flex } from 'reflexbox';
import { faEnvelope, faPhone, faUser, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import validator from 'validator';

import { TextInput, TextArea, Button } from '@@components/Common';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface ContactFormValues {
    name: string,
    email: string,
    phoneNumber: string,
    message: string
};

export type ContactFormHelpers = FormikHelpers<ContactFormValues>;

export interface ContactFormProps {
    onSubmit: (values: ContactFormValues, helpers: ContactFormHelpers) => void
};

function ContactForm(props: ContactFormProps) {
    
    const {
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldError,
        isSubmitting,
        values,
        errors
    } = useFormik({
        initialValues: {
            name: "",
            email: "",
            phoneNumber: "",
            message: ""
        },
        onSubmit: (values: ContactFormValues, helpers: ContactFormHelpers) => {
            let hasErrors = false;        

            if(!validator.isEmail(values.email)) {
                hasErrors = true;
                setFieldError("email", "Not a valid Email");
            }
            
            if(!validator.isMobilePhone(values.phoneNumber)) {
                hasErrors = true;
                setFieldError("phoneNumber", "Not a valid Phone Number");
            }

            if(values.message.length < 10) {
                hasErrors = true;
                setFieldError("message", "Please add more content to your message");
            }

            if(!hasErrors) {
                return props.onSubmit(values, helpers);
            }
        }
    });

    return(
        <Flex>
            <form className="w-full" onSubmit={handleSubmit}>
                <div className="my-3">
                    <TextInput
                        data-testid="contact-form-name-input"
                        id="name"
                        name="name"
                        type="text"
                        icon={faUser}
                        placeholder="Your Name"
                        label="Name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        errorMessage={errors.name}
                        required={true}
                    />
                </div>
                <div className="my-3">
                    <TextInput
                        data-testid="contact-form-email-input"
                        id="email"
                        name="email"
                        type="text"
                        icon={faEnvelope}
                        placeholder="example@example.com"
                        label="Email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        errorMessage={errors.email}
                    />
                </div>
                <div className="my-3">
                    <TextInput
                        data-testid="contact-form-phoneNumber-input"
                        id="phoneNumber"
                        name="phoneNumber"
                        type="text"
                        icon={faPhone}
                        placeholder="1 (555)-555-5555"
                        label="Phone Number"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phoneNumber}
                        errorMessage={errors.phoneNumber}
                    />
                </div>
                <div className="my-3">
                    <TextArea
                        data-testid="contact-form-message-input"
                        id="message"
                        name="message"
                        placeholder="Message here"
                        label="Message"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.message}
                        errorMessage={errors.message}
                        required={true}
                    />
                </div>
                <div className="mt-10 mb-5">
                    <Button 
                        data-testid="contact-form-submit-button"
                        className="w-full" 
                        color="secondary" 
                        type="submit"
                        disabled={isSubmitting} 
                        loading={isSubmitting} 
                        onClick={() => handleSubmit}
                    >
                        <p className="font-semibold">Submit</p>
                        <FontAwesomeIcon className="ml-2" icon={faPaperPlane} />
                    </Button>
                </div>
            </form>
        </Flex>
    );
};

export default ContactForm;