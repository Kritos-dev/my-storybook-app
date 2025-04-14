// Importazione della libreria React necessaria per i componenti
import React from "react"

// Definizione dell'interfaccia per le props del componente Button
// label: testo da visualizzare sul pulsante
// onClick: funzione da eseguire quando il pulsante viene cliccato
type ButtonProps = {
    label: string;
    onClick: () => void;
};

// Componente Button che accetta label e onClick come props
// React.FC<ButtonProps> indica che è un Functional Component con props di tipo ButtonProps
export const Button: React.FC<ButtonProps> = ({ label, onClick}) => {
    // Rendering di un elemento button HTML con le props passate
    return <button onClick={onClick}>{label}</button>
}