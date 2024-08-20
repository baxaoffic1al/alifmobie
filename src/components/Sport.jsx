import React, { useEffect, useState } from 'react';

const Card = ({  name,  imageSports }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 w-96 h-96">
            <img className="w-full" src={imageSports} alt={name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
            </div>
        </div>
    );
};

const CardList = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://66c471f5b026f3cc6cef6144.mockapi.io/baxa79api/store')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data);
            })
            
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [data]);

    if (!data) {
        return <div className='h-[100vh]'>Loading...</div>;
    }

    return (
        <div className="container ms-auto flex flex-wrap justify-center items-center">
            {data.map(item => (
                <Card
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    imageSports={item.imageSports} 
                />
                
            ))}
        </div>
    );
};

export default CardList;
