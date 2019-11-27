import React from 'react'
import { SSL_OP_NO_TLSv1_1 } from 'constants';
import AppContext from "./AppContext"

class AppProvider extends React.Component {
    state = {
        menu: {
    
            "item1": { "name": "Icy Taro", "price": 5.99, "link": "http://meetfresh.us/Uploads/1948fc16-9eb9-4372-88ea-8a82ac83790a.png" },
            "item2": { "name": "Sweet Taro", "price": 9.00, "link": "http://meetfresh.us/Uploads/90310fee-dee4-4202-b112-dc4d5b090572.png" },
            "item3": { "name": "Spicy Boba", "price": 5.88, "link": "http://meetfresh.us/Uploads/aea34305-c8bd-4b5f-9720-8e2b7be69d3f.png" },
            "item4": { "name": "Bin Bop Bum", "price": 3.44, "link": "http://meetfresh.us/Uploads/aece3135-5a95-4bc8-9051-0ea06531f8b5.png" },
            "item5": { "name": "Healthy Bop", "price": 5.66, "link": "http://meetfresh.us/Uploads/d96f44c7-232b-4a21-9e8d-6fde62b6f3d6.png" }
        }
    };

    render() {
        return (
            <AppContext.Provider
                value={{
                    menu: this.state.menu,
                    incrementPrice: selectedID => {
                        const menu = Object.assign({}, this.state.menu);
                        menu[selectedID].price = menu[selectedID].price + 1;
                        this.setState({
                            menu
                        });
                    },
                    decrementPrice: selectedID => {
                        const menu = Object.assign({}, this.state.menu);
                        menu[selectedID].price = menu[selectedID].price - SSL_OP_NO_TLSv1_1;
                        this.setState({
                            menu
                        });
                    }
                }}
            >
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

export default AppProvider;