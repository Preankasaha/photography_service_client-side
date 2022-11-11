import React, { useEffect } from 'react';

//title hook
const useTitle = title => {
    useEffect(() => {
        document.title = title;
    }, [title])
};


export default useTitle;