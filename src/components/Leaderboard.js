import React from 'react';
import PropTypes from "prop-types";
import UserDetail from './UserDetail';

const Leaderboard = ({ userData, sortUserData }) => {
    return (
        <section className="flex flex-wrap leaderboard-container">
            <table className="leaderboard-table shadow-lg bg-white mb-6 mt-8">
                <thead>
                    <tr>
                        <th className="bg-blue-100 border text-center px-2 md:px-8 py-4">#</th>
                        <th className="bg-blue-100 border text-center px-2 md:px-8 py-4">Avatar</th>
                        <th className="bg-blue-100 border text-center md:px-8 py-4 sortable-field" onClick={() => sortUserData('name')}>
                            <span>Name</span> 
                            <span className="float-right">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" />
                                </svg>
                            </span> 
                        </th>
                        <th className="bg-blue-100 border text-center md:px-8 py-4 sortable-field" onClick={() => sortUserData('credits')}>
                            <span>Credits</span> 
                            <span className="float-right">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" />
                                </svg>
                            </span> 
                        </th>
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