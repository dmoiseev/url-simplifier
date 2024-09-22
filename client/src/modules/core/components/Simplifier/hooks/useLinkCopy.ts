import { useState } from 'react'; 

export const useLinkCopy = (short: string) => {
    const [clicked, setClicked] = useState(false);
    const url = `/api/${short}`;

    const onClick = async () => {
        await navigator.clipboard.writeText(`${window.location.origin}${url}`);
        setClicked(true);

        setTimeout(() => {
            setClicked(false);
        }, 2000);
    };

    return {
        url,
        clicked,
        onClick,
    };
};
