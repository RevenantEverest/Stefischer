import { useFormik } from 'formik';
import { Flex } from 'reflexbox';
import { faEnvelope, faPhone, faUser, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import type { FormikHelpers } from 'formik';

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

function ContactForm({ onSubmit }: ContactFormProps) {
    
    const {
        handleChange,
        handleBlur,
        handleSubmit,
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
        onSubmit
    });

    return(
        <Flex>
            <form className="w-full" onSubmit={handleSubmit}>
                <div className="my-3">
                    <TextInput
                        id="name"
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
                        id="email"
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
                        id="phoneNumber"
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
                        id="message"
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