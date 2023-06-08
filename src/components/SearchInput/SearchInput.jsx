import { nanoid } from "nanoid"
import React, { Component } from "react"
import css from "./SearchInput.module.css"

export class SearchInput extends Component {
    state = {
        filter: "",
    }

    finderInputId = nanoid();

    handleSetState =  (e) =>  {
        const {name, value} = e.currentTarget
        e.preventDefault();
        this.setState(
            {[name]: value}, () =>
            {this.props.onFilter(this.state.filter)})
        
    }

    render () {
        const {filter} = this.state
        return (
            <>
            <label className={css.search_title} htmlFor={this.finderInputId}>Find contacts by name</label>
            <input
                className={css.search_input}
                type="text" 
                name="filter"   
                id={this.finderInputId}
                value={filter}
                onChange={this.handleSetState}
                required
            />
            </>
        )
    }
}
