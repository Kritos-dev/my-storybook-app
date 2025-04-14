/**@file Button.stories.tsx
 * @description Definisce le storie per il componente Button in Storybook, mostrando esempi di utilizzo.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button'

/**
 * @type {Meta<typeof Button>}
 * @description Configurazione del componente Button per Storybook.
 * @property {string} title - Percorso del componente nella navigazione di Storybook.
 * @property {string[]} tags - Abilita la generazione automatica della documentazione.
 */
const meta: Meta<typeof Button> = {
    component: Button,
    title: 'Components/Button',
    tags: ['autodocs'],
};
export default meta;


type Story = StoryObj<typeof Button>;

/**
 * @type {Story}
 * @description Storia "Primary": Caso d'uso principale del pulsante.
 * @property {Object} args - Proprietà predefinite per questa variante.
 * @property {string} args.label - Testo visualizzato sul pulsante.
 * @property {Function} args.onClick - Funzione eseguita al click del pulsante.
 */
export const Primary: Story = {
    args: {
        label: 'Click me',
        onClick: () => alert ('Clicked!'),
    },
};
