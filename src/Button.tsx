// Importazione della libreria React necessaria per i componenti
import React, { useState } from "react"

/**
 * @interface ButtonProps
 * @description Interfaccia che definisce le proprietà del componente Button
 * @property {string} label - Testo da visualizzare sul pulsante
 * @property {() => void} onClick - Funzione da eseguire quando il pulsante viene cliccato
 * @property {boolean} disabled - Nuova proprietà per la disabilitazione
 */
type ButtonProps = {
    label: string;
    onClick: () => void;
    disabled?: boolean;
};

/**
 * @component Button
 * @description Componente che renderizza un pulsante cliccabile
 * @param {ButtonProps} props - Proprietà del componente
 * @returns {JSX.Element} Elemento button con label e gestore click
 */
export const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false }) => {
    // Stato per gestire la disabilitazione del bottone
    const [isDisabled, setIsDisabled] = useState(disabled);

    const handleClick = () => {
        // Se il bottone è disabilitato dalla prop o dallo stato, non eseguire nulla
        if (isDisabled) return;
        
        // Disabilita il bottone
        setIsDisabled(true);
        
        // Esegui l'azione dopo 5 secondi
        setTimeout(() => {
            onClick();
            
            // Riabilita il bottone dopo l'esecuzione
            setIsDisabled(false);
        }, 5000);
    };

    return (
        <button onClick={handleClick} disabled={isDisabled}>{label}</button>
    );
};



/**
 * Nuova Story per il bottone. ✓
 * Modificare il componente "Button" per supportare la disabilitazione. ✓
 * Aggiungere una proprietà per disabiltarlo. ✓
 * Se la proprità è "null",  gestire all'onClick prima la disabilitazione. ✓
 * Simulare l'operazione del click con un setTimeout di 5 secondi. ✓
 */
