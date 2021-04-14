import React from 'react';
import PropTypes from "prop-types";
import UserDetail from './UserDetail';

const Leaderboard = ({ userData }) => {
    return (
        <section className="leaderboard-container">
            <table className="leaderboard-table shadow-lg bg-white mb-6 mt-8">
                <thead>
                    <tr>
                        <th className="bg-blue-100 border text-center px-8 py-4">#</th>
                        <th className="bg-blue-100 border text-center px-8 py-4">Avatar</th>
                        <th className="bg-blue-100 border text-center px-8 py-4">Name</th>
                        <th className="bg-blue-100 border text-center px-8 py-4">Credits</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData.map((user, index) => {
                            return (
                                <UserDetail key={index} user={user} index={index + 1} />
                            )
                        })
                    }
                </tbody>
            </table>
        </section>
    )
}

Leaderboard.defaultProps = {
    userData: null
}

Leaderboard.propTypes = {
    userData: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        avatar: PropTypes.string,
        credits: PropTypes.number,
    })),
}


export default Leaderboard;