const UserDetail = ({ user, i }) => {

    return (
        <>
            <tr className="user-detail-row">
                <td className="user-detail-index border px-8 py-4">{i}</td>
                <td className="user-detail-avatar border px-8 py-4">
                    <img className="rounded-full" src={user.avatar} alt="" />
                </td>
                <td className="user-detail-name border px-8 py-4">{user.name}</td>
                <td className="user-detail-credit border px-8 py-4">{user.credits}</td>
            </tr>
        </>
    )
}

export default UserDetail;