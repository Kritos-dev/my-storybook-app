import React from 'react';

// Definizione dell'interfaccia per le props del componente UserCard
// name: nome dell'utente da visualizzare
// email: indirizzo email dell'utente da visualizzare
type UserCardProps = {
    name: string;
    email: string;
};

// Componente UserCard che accetta name e email come props
// React.FC<UserCardProps> indica che è un Functional Component con props di tipo UserCardProps
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