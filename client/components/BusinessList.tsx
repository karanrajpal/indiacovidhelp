import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppReducerType } from '../state/AppReducer';

import '../styles/business-list.scss';

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
    uniqueId: string;
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
        uniqueId,
    } = props.business;
    return <Link to={`/business/${uniqueId}`}>
        <div className='business-card'>
            <img className='business-card__image' src={imageUrl} />
            <div className='business-card__description'>
                <h4>{name}</h4>
                <span>{location}</span>
            </div>
        </div>
    </Link>
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
            <div className='business-list flex one three-800'>
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
