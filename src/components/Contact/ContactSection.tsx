import type { ContactFormValues, ContactFormHelpers } from '@@components/Forms/ContactForm';

import { Flex, Box } from 'reflexbox';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { Card, SocialIcon } from '@@components/Common';
import ContactForm from '@@components/Forms/ContactForm';

import { PERSONAL_LINKS } from '@@constants';

function ContactSection() {

    const onSubmit = (values: ContactFormValues, helpers: ContactFormHelpers) => {
        console.log(values, helpers);
    };
    
    return(
        <Flex>
            <Box className="w-3/6">
                <h1 className="font-bold text-6xl">
                    Let's build something 
                    <span className="text-transparent bg-gradient-to-br from-primary to-secondary bg-clip-text">
                        {" "}together
                    </span>
                </h1>
                <p className="mt-5 text-muted font-semibold w-4/6">
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
            <Box className="flex w-3/6 justify-center">
                <Card className="z-10 w-4/6">
                    <ContactForm onSubmit={onSubmit} />
                </Card>
                <div className="top-80 h-[28rem] w-[28rem] absolute bg-primary blur-2xl z-0 block duration-75 ease-in-out" />
            </Box>
        </Flex>
    );
};

export default ContactSection;