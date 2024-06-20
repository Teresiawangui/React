
const UserCard = ({image, fullName})=>{
    return (
        <div id="user-image">
            <img src={image} alt={`${fullName}user-image`}/>
            <h3>{fullName}</h3>
        </div>
    );
};
export default UserCard;