import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "Name",
                Location: "Tenkasi",
                avatar_url: "NM",
            },
            
        }
        console.log("Child's - Constructor");
    }
  async componentDidMount() {
            const Git_api = await fetch("https://api.github.com/users/mustaqeem-m");
            const data = await Git_api.json();
            // console.log(data);

            this.setState({
                userInfo: data,
            });
            console.log(this.props.name + "Child's - componentDidMount");
    }
    
    componentDidUpdate() {
        console.log("child's ComponentDidUpdate");
    }

    componentWillUnmount() {
        console.log("Child's Component unmounted")
    }
        render() {
            const { name, login, avatar_url } = this.state.userInfo;
            console.log( "Child's - Render");
            return (
              <div className="user-card">
                <img src={avatar_url} />
                <h2>{name}</h2>
                <h3>LoginId: {login}</h3>
                <h3>Contact: +91 8610679543</h3>
                <h3>mail: mmmusatqeem1910@gmail.com</h3>
              </div>
            );
        }
    
}

export default UserClass;

/**
 * -> //? Mounting 
 * Contructor()
 * Render() 
 *  -- <HTML updated with default or dummy data in cinstructor's local state variable (i.e) DOM is updated with dummy data>
 * componentDidMount()
 * --<Make API call>
 * --<setState> -> Here values in local state variable get updated with values from API-> triggers //? Updating 
 * Render()
 * -- <HTML updated (i.e) DOM is updated with data from API so user can see actual data>
 * componentDidMount ()
 *--it called after update phase completd  
 //? Unmounting 
 * 
 * componentWillUnmount();
 * -> will called when a component is unmounted|removed from the page
 */
