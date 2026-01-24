import PropTypes from "prop-types";
import '../../public/css/components/Table.css'

export function Table({ columns, data }) {

    return (
        <table id="example" className="text-nowrap table-centered mt-0 table" style={{width: "100%"}}>
            <thead className="bg-light">
            <tr>
                {columns.map((col, index) => (
                    <th key={index}>{col.header}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    {columns.map((col, colIndex) => (
                        <td key={colIndex} className="align-middle border-top-0">
                            {col.render ? col.render(row) : row[col.field]}
                        </td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    );
}

Table.propTypes = {
    columns: PropTypes.array,
    data: PropTypes.array,

};