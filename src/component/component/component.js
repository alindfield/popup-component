import React from 'react';
import './component.css';

const Component = props => {
    return (
        <div className="component">
            <h2>A Title</h2>
            <div className="componentTable">
                <table>
                    <thead>
                        <tr>
                            <th>
                                Some Value
                            </th>
                            <th>
                                Where
                            </th>
                            <th>
                                When
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                1
                            </td>
                            <td>
                                Row 1
                            </td>
                            <td>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                2
                            </td>
                            <td>
                                Row 2
                            </td>
                            <td>
                                
                            </td>
                        </tr>
                        <tr>
                            <td>
                                3
                            </td>
                            <td>
                                Row 3
                            </td>
                            <td>
                                
                            </td>
                        </tr>
                        <tr>
                            <td>
                                4
                            </td>
                            <td>
                                Row 4
                            </td>
                            <td>
                                
                            </td>
                        </tr>
                        <tr>
                            <td>
                                5
                            </td>
                            <td>
                                Row 5
                            </td>
                            <td>
                                
                            </td>
                        </tr>    
                        <tr>
                            <td>
                                6
                            </td>
                            <td>
                                Row 6
                            </td>
                            <td>
                                
                            </td>
                        </tr>    
                        <tr>
                            <td>
                                7
                            </td>
                            <td>
                                Row 7
                            </td>
                            <td>
                                
                            </td>
                        </tr>        
                        <tr>
                            <td>
                                8
                            </td>
                            <td>
                                Row 8
                            </td>
                            <td>
                                
                            </td>
                        </tr>                                                                                                
                    </tbody>
                </table>
            </div>
            <div className="componentButton">
                <button onClick={props.clicked}>Close</button>
            </div>
        </div>
    );
};

export default Component;