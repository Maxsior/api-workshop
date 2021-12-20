import React from "react";
import "./Table.css";

export default ({cars, onSubmit}) => (
    <form onSubmit={onSubmit}>
        <table className="table">
            <thead>
                <th>id</th>
                <th>mark</th>
                <th>model</th>
                <th>max_speed</th>
                <th>release_date</th>
                <th></th>
            </thead>
            <tbody>
                {cars.map(car => (
                    <tr>
                        <td>{car.id}</td>
                        <td>{car.mark}</td>
                        <td>{car.model}</td>
                        <td>{car.max_speed}</td>
                        <td>{car.release_date}</td>
                        <td>
                            <input type="button" value="x" />
                        </td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <td></td>
                    <td>
                        <input placeholder="mark" />
                    </td>
                    <td>
                        <input placeholder="model" />
                    </td>
                    <td>
                        <input placeholder="max_speed" type="number" />
                    </td>
                    <td>
                        <input placeholder="release_date" type="date" />
                    </td>
                    <td>
                        <input type="button" value="+" />
                    </td>
                </tr>
            </tfoot>
        </table>
    </form>
);
