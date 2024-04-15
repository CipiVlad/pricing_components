export type PricingModel = {
    mode: string,
    monthly: string,
    yearly: string,
    storage: string,
    users: string,
    send: string
}

export const basic: PricingModel = {
    mode: 'Basic',
    monthly: '19.99',
    yearly: '199.99',
    storage: '500 GB Storage',
    users: '2 Users Allowed',
    send: 'Send up to 3 GB'
}

export const professional: PricingModel = {
    mode: 'Professional',
    monthly: '24.99',
    yearly: '249.99',
    storage: '1 TB Storage',
    users: '5 Users Allowed',
    send: 'Send up to 10 GB'
}

export const master: PricingModel = {
    mode: 'Master',
    monthly: '39.99',
    yearly: '399.99',
    storage: '2 TB Storage',
    users: '10 Users Allowed',
    send: 'Send up to 20 GB'
}