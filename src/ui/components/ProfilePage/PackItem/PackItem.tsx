import React from 'react';

const PackItem = () => {
    return (
        <div>
            <div>
                <button>Back</button>
                <h3>Pack Name</h3>
            </div>
            <input placeholder='search'/>
            <table>
                <tr>
                    <th>Questions</th>
                    <th>Answers</th>
                    <th>Last Update</th>
                    <th>Grade</th>
                </tr>
                <tr>
                    <th> </th>
                    <th> </th>
                    <th> </th>
                    <th> </th>
                </tr>
                <tr>
                    <th> </th>
                    <th> </th>
                    <th> </th>
                    <th> </th>
                </tr>
            </table>
        </div>
    );
};

export default PackItem;