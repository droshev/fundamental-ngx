// BEING UPDATED WITH THE SAP-COMPONENT SCHEMATIC; DO NOT MODIFY THE STRUCTURE!
import { SectionInterface, SectionInterfaceContent } from '@fundamental-ngx/docs/shared';

export const guides: SectionInterfaceContent[] = [
    { url: 'cx/home', name: 'Home' },
    { url: 'cx/new-component', name: 'New Component' }
];

export const components: SectionInterfaceContent[] = [
    {
        url: 'cx/side-navigation',
        name: 'Side Navigation'
    }
];

export const sections: SectionInterface[] = [
    {
        header: 'Guides',
        content: guides
    },
    {
        header: 'Components',
        content: components
    }
];
