import { Component } from 'react';

export class CustomerTable extends Component {
    static displayName = CustomerTable.name;

    constructor(props) {
        super(props);
        this.state = { customers: [], loading: true };
    }

    componentDidMount() {
        this.populateCustomersData();
    }

    static renderCustomersTable(customers) {
        return (
            <table className="table table-striped" aria-labelledby="tableLabel">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>DateOfBirth</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map(customer =>
                        <tr key={customer.id}>
                            <td>{customer.id}</td>
                            <td>{customer.firstName}</td>
                            <td>{customer.lastName}</td>
                            <td>{customer.dateOfBirth}</td>
                            <td><button>Update Customer</button></td>
                            <td><button>Delete Customer</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : CustomerTable.renderCustomersTable(this.state.customers);

        return (
            <div>
                <button onClick={this.addCustomers}>Add Customers</button>
                <h1 id="tableLabel">Customers</h1>
                {contents}
            </div>
        );
    }

    addCustomers = async () => {
        // Implement the POST request to add a new customer here
        this.populateCustomersData();
    }

    async populateCustomersData() {
        const response = await fetch('customers'); // Adjust endpoint as needed
        //if (!response.ok) {
        //    console.error('Failed to fetch customer data:', response.statusText);
        //    return;
        //}
       // console.log('Response:', response);
        const data = await response.json();
        //console.log('Customer data:', data); // Check if data structure matches
        this.setState({ customers: data, loading: false });
    }
}

//export default CustomerTable;
