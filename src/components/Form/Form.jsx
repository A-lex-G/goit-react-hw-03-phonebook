import css from "./Form.module.css"
import { Component } from "react";
import { nanoid } from "nanoid";


export class Form extends Component {
    state = {
        name: "",
        number: "",
    };

    nameInputId = nanoid();
    numberInputId = nanoid();
  
    handleSetState = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };
  
    handleSubmitForm = (e) => {
        e.preventDefault();
        const { name, number } = this.state;
  
        if (name !== "" && number !== "") {
            const contactId = nanoid();
            const formData = {
                name: name,
                number: number,
                contactId: contactId,
            };
  
        this.props.onDataSubmit(formData);
        this.reset();
        } 
    };
  
    reset = () => {
        this.setState({
            name: "",
            number: "",
        });
    };
  
    render() {
        const { name, number } = this.state;
  
        return (
            <>
                <form className={css.form} onSubmit={this.handleSubmitForm} action="">
                    <label className={css.input_title} htmlFor={this.nameInputId}>Name</label>
                    <input
                        className={css.form_input}
                        name="name"
                        id={this.nameInputId}
                        type="text"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        value={name}
                        onChange={this.handleSetState}
                        required
                    />
                    <label className={css.input_title} htmlFor={this.numberInputId}>Number</label>
                    <input
                        className={css.form_input}
                        name="number"   
                        id={this.numberInputId}
                        type="tel"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        value={number}
                        onChange={this.handleSetState}
                        required
                    />
                    <button className={css.submit_Btn} type="submit">Add contact</button>
                </form>
            </>);
        }
    }