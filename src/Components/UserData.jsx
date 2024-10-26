const UserData = ({ users }) => {
    return (
        <>
            {users.map((curUser) => {
                const { id, title, price, category, description, image } = curUser;

                return (
                    <tr key={id}>
                        <td>{id}</td>
                        <td>{title}</td>
                        <td>${price}</td>
                        <td>{category}</td>
                        <td>{description}</td>
                        <td>
                            <img src={image} alt={title} style={{ width: '50px', height: '50px' }} />
                        </td>
                    </tr>
                );
            })}
        </>
    );
};

export default UserData;
