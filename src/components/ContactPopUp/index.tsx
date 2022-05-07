import React, { useState, useEffect } from 'react';
import ContactForm from "../ContactForm";
import {
    PopUpCloseButton,
    PopUpContainer,
    PopUpContent,
    PopUpDescription,
    PopUpHeader,
    PopUpMain,
    PopUpTitle,
    PupUp,
    PupUpBackdrop,
} from "./styles";
import { FiX } from "react-icons/fi";

const PopUpContact = () => {

    const [showPopUp, setShowPopUp] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            setShowPopUp(!showPopUp);
        }, 5000);

        return ()=>{
            setShowPopUp(false);
        }
    }, []);

    return (
        <>
            {showPopUp && (
                <PupUp>
                    <PupUpBackdrop />
                    <PopUpContainer>
                        <PopUpCloseButton onClick={() => setShowPopUp(!showPopUp)}>
                            <FiX />
                        </PopUpCloseButton>
                        <PopUpContent>
                            <PopUpHeader>
                                <PopUpTitle>Quer saber mais?</PopUpTitle>
                                <PopUpDescription>
                                    Preencha o formularo que entraremos em contato com
                                    você
                                </PopUpDescription>
                            </PopUpHeader>
                            <PopUpMain>
                                <ContactForm />
                            </PopUpMain>
                        </PopUpContent>
                    </PopUpContainer>
                </PupUp>
            )}
        </>
    );
};

export default PopUpContact;
