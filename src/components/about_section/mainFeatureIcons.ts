import { faUsers, faTasks, faVoteYea } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const icons: mainFeatureData[] = [
    {
        icon: faTasks,
        name: 'Goal oriented',
    },
    {
        icon: faUsers,
        name: 'Team player',
    },
    {
        icon: faVoteYea,
        name: 'Efficient',
    },
];

type mainFeatureData = {
    icon: IconProp,
    name: string,
}

export default icons;