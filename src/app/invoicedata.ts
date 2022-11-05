import { AppRoutingModule } from "./app-routing.module";

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
    paymentDue: string;
    paymentTerms: number;
    senderAddress: {
        city: string;
        country: string;
        postCode: string;
        street: string;
        
    }
    status: string;
    total: number;
    
}
