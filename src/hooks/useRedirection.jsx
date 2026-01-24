import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useRedirection = (path, delay = 5000) => {
    const navigate = useNavigate();

    useEffect(() => {
        let timer;

        const resetTimer = () => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                navigate(path);
            }, delay);
        };

        // Detectar eventos de actividad
        const activityEvents = ['mousemove', 'keydown', 'mousedown', 'touchstart'];

        activityEvents.forEach(event =>
            window.addEventListener(event, resetTimer)
        );

        resetTimer();

        return () => {
            clearTimeout(timer);
            activityEvents.forEach(event =>
                window.removeEventListener(event, resetTimer)
            );
        };
    }, [navigate, path, delay]);
};

export default useRedirection;
