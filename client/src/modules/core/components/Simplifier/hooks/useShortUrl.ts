import { useState } from 'react'; 

export const useShortUrl = () => {
    const [short, setShort] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = Object.fromEntries(new FormData(e.currentTarget).entries());

        setShort('');
        setError('');
        setLoading(true);

        try {
            const res = await fetch('/api/url', {
                method: 'post',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            });
            const data = await res.json();

            setLoading(false);

            if (data.short) {
                setShort(data.short);
            }

            if (data.error) {
                setError(data.error);
            }
        } catch(e) {
            setError('Something went wrong');
            setLoading(false);
        }
    };

    return {
        short,
        error,
        loading,
        onSubmit
    };
};
