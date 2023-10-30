import ApiMixinFactory from './mixins/apiMixin'
import tableMixin from './mixins/tableMixin'
import { paginationMixin } from './mixins/paginationMixin'
import React from 'react'
import createReactClass from 'create-react-class'
import Pagination from './Pagination'
import $ from 'jquery'

var apiMixin = new ApiMixinFactory().getApiMixin($.ajax)

var App = createReactClass({
    mixins: [
        tableMixin,
        paginationMixin,
        apiMixin
    ],
    render() {
        var self = this
        var start = (this.state.itemsPerPage * (this.state.activePage - 1))
        var end = (start + this.state.itemsPerPage)
        var universities = this.state.universities.slice(start, end)
        var table = self.renderTable(universities)
        return (
            <div>
                <label htmlFor="#search">Поиск</label>
                <input
                    id="search"
                    onChange={this.handleSearchChange}
                    type="string"
                    value={this.state.value}
                />
                <div>
                    {table}
                </div>
                <Pagination
                    itemsPerPage={10}
                    totalItems={this.state.universities.length}
                    onPageChange={self.handleClick}
                />
                <div>{this.state.color}</div>
            </div>
        )
    }
})

export default App 