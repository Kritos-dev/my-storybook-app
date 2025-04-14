// Importazione della libreria React necessaria per i componenti
import React from "react"

/**
 * @interface ButtonProps
 * @description Interfaccia che definisce le proprietà del componente Button
 * @property {string} label - Testo da visualizzare sul pulsante
 * @property {() => void} onClick - Funzione da eseguire quando il pulsante viene cliccato
 */
type ButtonProps = {
    label: string;
    onClick: () => void;
};

/**
 * @component Button
 * @description Componente che renderizza un pulsante cliccabile
 * @param {ButtonProps} props - Proprietà del componente
 * @returns {JSX.Element} Elemento button con label e gestore click
 */
export const Button: React.FC<ButtonProps> = ({ label, onClick}) => {
    // Rendering di un elemento button HTML con le props passate
    return <button onClick={onClick}>{label}</button>
}
