import PropTypes from "prop-types";

const UserDetail = ({ user, index }) => {

    return (
        <>
            <tr className="user-detail-row">
                <td className="user-detail-index border px-8 py-4">{index}</td>
                <td className="user-detail-avatar border px-8 py-4">
                    <img className="rounded-full" src={user.avatar} alt="" />
                </td>
                <td className="user-detail-name border px-8 py-4">{user.name}</td>
                <td className="user-detail-credit border px-8 py-4">{user.credits}</td>
            </tr>
        </>
    )
}

UserDetail.defultProps = {
    user: null,
    index: 0,
}

UserDetail.PropTypes = {
    user: PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string,
        credits: PropTypes.number,
    }),
    index: PropTypes.number
}


export default UserDetail;