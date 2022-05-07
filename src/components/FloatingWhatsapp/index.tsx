import React, { useState, useEffect } from "react";
import Link from "next/link";
import waIcon from "../../assets/lottie/whatsapp.json";
import { FloatingWhatsappContent } from "./styles";
import { Player } from "@lottiefiles/react-lottie-player";
import { useProduct } from "../../provider/AppContext";

const FloatingWhatsapp = () => {
    const [showMessage, setShowMessage] = useState(false);

    const hideWaMessage = () => {
        setTimeout(() =>{
            setShowMessage(false);
            showWaMessage();
        }, 10000);
    }

    const showWaMessage = () => {
        setTimeout(() =>{
            setShowMessage(!showMessage);
            hideWaMessage();
        }, 100000);
    }

    useEffect(() =>{

        setTimeout(() =>{
            setShowMessage(!showMessage);
            hideWaMessage();
        }, 5000)

        return () => {
            setShowMessage(false);
        }
    }, []);

    const { product, lang } = useProduct();

    return (
        <Link href={`http://wa.me/5514912345678?text=Gostaria%20de%20saber%20mais%20sobre%20o%20produto%20${product.name && product.name[lang.current]}`}>
            <a>
                <FloatingWhatsappContent>
                    <div className={`${showMessage&&'show_message'}`} data-tooltip="Precisa de ajuda?" data-flow="top">
                        <Player
                            autoplay
                            loop
                            src={waIcon}
                            style={{ height: "64px", width: "64px" }}
                        />
                    </div>
                </FloatingWhatsappContent>
            </a>
        </Link>
    );
};

export default FloatingWhatsapp;
