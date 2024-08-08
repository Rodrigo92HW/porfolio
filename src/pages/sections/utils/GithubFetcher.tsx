import { useEffect, useState } from 'react';
import axios from 'axios';

interface Props {
    web: string;
}

export default function GithubFetcher({web}: Props) {
    const [repoInfo, setRepoInfo] = useState<string | null>(null);

    useEffect(() => {
        const fetchRepoInfo = async () => {
        try {
            const response = await axios.get(web);
            setRepoInfo(new Date(response.data.updated_at).toLocaleString());
        } catch (error) {
            console.error('Error fetching GitHub repository information:', error);
        }
        };

        fetchRepoInfo();
    }, [web]);

    return (
        <>
            {repoInfo}
        </>
    );
};