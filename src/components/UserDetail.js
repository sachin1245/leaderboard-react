import PropTypes from "prop-types";
import BigNumber from "bignumber.js";

const UserDetail = ({ user, index }) => {

    return (
        <>
            <tr className="user-detail-row">
                <td className="user-detail-index border px-2 md:px-4 py-4">{index}</td>
                <td className="user-detail-avatar border px-2 md:px-4 py-4">
                    <img className="rounded-full" src={user.avatar} alt="" />
                </td>
                <td className="user-detail-name border px-2 md:px-4 py-4 ellipsis">{user.name}</td>
                <td className="user-detail-credit border px-2 md:px-4 py-4 ellipsis">{new BigNumber(user.credits).toFixed()}</td>
            </tr>
        </>
    )
}

UserDetail.defultProps = {
    user: null,
    index: 0,
}

UserDetail.propTypes = {
    user: PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string,
        credits: PropTypes.number,
    }),
    index: PropTypes.number
}


export default UserDetail;