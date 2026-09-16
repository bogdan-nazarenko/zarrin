import { useState, useEffect } from "react";

export default function useMediaQuery(bp) {
    const [matches, setMatches] = useState(() => {
        return window.matchMedia(`(${bp})`).matches;
    });

    useEffect(() => {
        const mql = window.matchMedia(`(${bp})`);
        const handler = () => setMatches(mql.matches);

        mql.addEventListener("change", handler);

        return () => mql.removeEventListener("change", handler);
    }, [bp]);

    return matches;
}
