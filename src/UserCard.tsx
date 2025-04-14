import React from 'react';

/**
 * @interface UserCardProps
 * @description Interfaccia che definisce le proprietà del componente UserCard
 * @property {string} name - Nome dell'utente da visualizzare
 * @property {string} email - Indirizzo email dell'utente da visualizzare
 */
type UserCardProps = {
    name: string;
    email: string;
};

/**
 * @component UserCard
 * @description Componente che renderizza una card con le informazioni dell'utente
 * @param {UserCardProps} props - Proprietà del componente
 * @returns {JSX.Element} Card contenente nome e email dell'utente
 */
export const UserCard: React.FC<UserCardProps> = ({name, email}) => {
    // Rendering di una card contenente le informazioni dell'utente
    // Lo stile applica un bordo, padding e colore di sfondo
    return (
        <div style={{ border: '1xp soldi #ecc', padding: '1rem' }}>
            <h3>{name}</h3>
            <p>{email}</p>
        </div>
    )
};
