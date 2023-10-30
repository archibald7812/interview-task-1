import React from 'react';

var tableMixin = {
    setTable(res) {
        this.setState({ universities: res, totalItems: res.length, itemsPerPage: 10, activePage: 1 })
    },
    handleClick(page) {
        this.setState({
            activePage: page
        })
    },
    renderTable(rows = []) {
        if (!this.state.universities.length) {
            return null
        }
        return (
            <table>
                <thead>
                    <tr>
                        <th>University name</th>
                        <th>Country code</th>
                        <th>Domains</th>
                    </tr>
                </thead>
                <tbody >
                    {rows.map(university => (
                        <tr key={university.name}>
                            <td>{university.name}</td>
                            <td>{university.alpha_two_code}</td>
                            <td>{university.domains.map(d => <a href={`https://${d}`} target="_blank"> {d} </a>)}</td>
                        </tr>
                    )
                    )}
                </tbody>
            </table>
        )
    }
}

export default tableMixin