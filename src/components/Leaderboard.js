import React from 'react';
import UserDetail from './UserDetail';

const Leaderboard = ({ userData }) => {
    return (
        <>
            <section className="leaderboard-container">
                <table className="leaderboard-table shadow-lg bg-white mb-6 mt-8">
                    <thead className="table-header">
                        <tr>
                            <th className="bg-blue-100 border text-left px-8 py-4">#</th>
                            <th className="bg-blue-100 border text-left px-8 py-4">Avatar</th>
                            <th className="bg-blue-100 border text-left px-8 py-4">Name</th>
                            <th className="bg-blue-100 border text-left px-8 py-4">Credits</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userData.map((user, index) => {
                                return (
                                    <UserDetail key={index} user={user} i={index + 1} />
                                )
                            })
                        }
                    </tbody>
                </table>
            </section>
        </>
    )
}

export default Leaderboard;