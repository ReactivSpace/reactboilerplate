import React from 'react';
import classnames from 'classnames';


class UserForm extends React.Component {

    state = {
        id: this.props.user ? this.props.user.id : null,
        userFullName: this.props.user ? this.props.user.userFullName :'',
        userFirstName: this.props.user ? this.props.user.userFirstName :'',
        userLastName: this.props.user ? this.props.user.userLastName :'',
        userName: this.props.user ? this.props.user.userName :'',
        emailAddress: this.props.user ? this.props.user.emailAddress :'',
        UserRoleId: this.props.user ? this.props.user.UserRoleId :'',
        errors: {},
        loading:false
       
    }
 
    componentWillReceiveProps=(nextProps)=>{
        this.setState({
            id:nextProps.user.id,
            userFullName:nextProps.user.userFullName,
            userFirstName:nextProps.user.userFirstName,
            userLastName:nextProps.user.userLastName,
            userName:nextProps.user.userName,
            emailAddress:nextProps.user.emailAddress,
            UserRoleId:nextProps.user.UserRoleId
        });
           console.log(nextProps);
    }
    

    handleChange = (e) => {
        if (!!this.state.errors[e.target.name]) {

            let errors = Object.assign({}, this.state.errors);
            delete errors[e.target.name];
            this.setState({
                [e.target.name]: e.target.value,
                errors
            });
        } else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        //validation
        let errors = {};
        if (this.state.title === '') 
            errors.title = "Can't be empty";
        if (this.state.cover === '') 
            errors.cover = "Can't be empty";
        this.setState({errors});
        const isValid = Object.keys(errors).length === 0;
        if (isValid) {
            const {id,title, cover} = this.state;
            this.setState({loading:true});
         this.props.saveUser({id,title,cover})
         .catch((err)=>err.response.json().then(({errors}) => this.setState({errors,loading:false})))
        }
    }

    render() {
        const form=( <form className={classnames('ui', 'form',{loading:this.state.loading})} onSubmit={this.handleSubmit}>
                <h1>Add New Users</h1>
              {!!this.state.errors.global &&<div className="ui negative message"><p>{this.state.errors.global}</p> </div>}
                <div
                    className={classnames('field', {
                    error: !!this.state.errors.title
                })}>
                    <label htmlFor="title">Title</label>
                    <input
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                        id="title"/>
                    <span>{this.state.errors.title}</span>
                </div>

                <div
                    className={classnames('field', {
                    error: !!this.state.errors.cover
                })}>
                    <label htmlFor="cover">Cover</label>
                    <input
                        name="cover"
                        value={this.state.cover}
                        onChange={this.handleChange}
                        id="cover"/>
                    <span>{this.state.errors.cover}</span>
                </div>
                <div className="field">
                    {this.state.cover !== '' && <img src={this.state.cover} alt="cover" className="ui small bordered image"/>}

                </div>
                <div className="field">
                    <button className="ui primary button">Save</button>

                </div>
            </form>);
        return (
           <div>
               {form}
           </div>
        );
    }
}

export default UserForm;