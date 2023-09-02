import HouseCard from "./HouseCard";

const House = ({ house}) => {
    if (house) {
        const { image, name, description } = house;
        return (
            <>
                <img src={image} alt={name} style={{ width: '150px' }} />
                <div className='m-4'>
                    <h5 className='fw-bold'>{house.name}</h5>
                    {description}
                </div>
            </>
        );
    }
    return null;
};

export default House;
