import type { ContactFormValues, ContactFormHelpers } from '@@components/Forms/ContactForm';

import { useRef, useState, useEffect } from 'react';
import { Flex, Box } from 'reflexbox';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-hot-toast';

import { Card, SocialIcon, ToastError, ToastSuccess } from '@@components/Common';
import ContactForm from '@@components/Forms/ContactForm';

import * as services from '@@services';

import { useWindowDimensions } from '@@hooks';
import { PERSONAL_LINKS } from '@@constants';

function ContactSection() {

    const cardRef = useRef<HTMLDivElement>(null);
    const windowDimensions = useWindowDimensions();
    const [cardDimensions, setCardDimensions] = useState({
        width: 0,
        height: 0
    });

    useEffect(() => {
        if(!cardRef.current) {
            return;
        }
        setCardDimensions({
            width: cardRef.current.offsetWidth,
            height: cardRef.current.offsetHeight
        });
    }, [windowDimensions]);

    const onSubmit = async (values: ContactFormValues, helpers: ContactFormHelpers) => {
        const [res, err] = await services.formCarry.send({
            name: values.name,
            email: values.email,
            phoneNumber: values.phoneNumber,
            message: values.message
        });

        helpers.setSubmitting(false);

        if(err || !res) {
            let errorMessage = "Unable to send form submission";

            if(err?.code === "ERR_NETWORK") {
                errorMessage = err.message;            
            }

            if(err?.response) {
                if(err.response.status === 429) {
                    errorMessage = err.response.data.message;
                }   
            }

            console.error("Contact Form Submission Error => ", err);
            return toast((t) => (
                <ToastError toast={t} message={errorMessage} />
            ));
        }

        helpers.setValues({ name: "", email: "", phoneNumber: "", message: "" });

        toast((t) => (
            <ToastSuccess toast={t} message="Contact Submission Successful!" />
        ));
    };
    
    return(
        <Flex className="flex-col xl:flex-row gap-10 xl:gap-0 flex-wrap justify-center items-center">
            <Box className="w-full xl:w-3/6">
                <h1 className="font-bold text-6xl">
                    Let's build something 
                    <span className="text-transparent bg-gradient-to-br from-primary to-secondary bg-clip-text">
                        {" "}together
                    </span>
                </h1>
                <p className="mt-5 text-muted font-semibold w-full lg:w-4/6">
                    Ready to turn your vision into reality? Drop me a message, and let's connect to start building together.
                </p>
                <div className="my-8">
                    <Flex>
                        <Box className="w-full">
                            <Flex className="items-center gap-2">
                                <FontAwesomeIcon className="text-3xl" icon={faEnvelope} />
                                <p className="font-semibold -mt-1 text-lg">{PERSONAL_LINKS.EMAIL}</p>
                            </Flex>
                        </Box>
                    </Flex>
                </div>
                <div className="flex items-center gap-3 mb-10">
                    <div className="h-1.5 w-12 bg-secondary rounded-full mr-3" />
                    <SocialIcon gradient brand="GitHub" size="md" />
                    <SocialIcon gradient brand="LinkedIn" size="md" />
                    <SocialIcon gradient brand="Facebook" size="md" />
                    <SocialIcon gradient brand="Instagram" size="md" />
                </div>
                
            </Box>
            <Box className="flex flex-col w-full lg:w-5/6 xl:w-3/6 items-center justify-center">
                <div ref={cardRef} className="w-full xl:w-4/6 z-10">
                    <Card className="w-full">
                        <ContactForm onSubmit={onSubmit} />
                    </Card>
                </div>
                <div 
                    className="absolute bg-primary blur-2xl z-0 block duration-75 ease-in-out"
                    style={{ 
                        height: `${cardDimensions.height - 20}px`, 
                        width: `${cardDimensions.width - 40}px` 
                    }} 
                />
            </Box>
        </Flex>
    );
};

export default ContactSection;