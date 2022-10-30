export interface Invoices {
    clientAddress: {
        city: string;
        country: string;
        postCode: string;
        street: string;
    }
    city: string;
    country: string;
    postCode: string;
    street: string;
    clientEmail: string;
    clientName: string;
    createdAt: string;
    description: string;
    id: string;
    items: object[];


}
