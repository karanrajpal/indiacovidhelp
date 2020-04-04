import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppReducerType } from '../state/AppReducer';

export type Business = {
    timestamp?: string;
    name: string;
    location: string;
    ownerName: string;
    email: string;
    phoneNumber: string;
    description: string;
    links: string[];
    imageUrl: string;
    verified: boolean;
};

const BusinessCard = (props: { business: Business }) => {
    const {
        timestamp,
        name,
        location,
        ownerName,
        email,
        phoneNumber,
        description,
        links,
        imageUrl,
        verified,
    } = props.business;
    return <div className='business-card'>
        <h3>{name}</h3>
        <h4>{location}</h4>
    </div>
};

type BusinessListProps = {
    businesses: Business[];
};

class BusinessList extends React.Component<BusinessListProps> {
    constructor(private props: BusinessListProps) {
        super(props);
    }

    render() {
        const {
            businesses
        } = this.props;
        return (
            <div className='business-list flex one center'>
                {businesses.map((business) => (
                    <BusinessCard
                        business={business}
                        key={`${business.name}_${business.ownerName}`}
                    />
                ))}
            </div>
        );
    }
}

export const ConnectedBusinessList = connect(
    (state: AppReducerType) => ({
        businesses: state.businesses,
    }),
    (dispatch) => ({
    })
)(BusinessList);
