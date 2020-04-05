import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { Business } from './BusinessList';
import { AppReducerType } from '../state/AppReducer';

import '../styles/business-detail.scss';
import { setSelectedBusinessId } from '../state/actions';

const BusinessDetail = (props: { business: Business, className?: string }) => {
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
    const { className } = props;
    return <div className={`business-detail flex one two-600 ${className ? className : ''}`}>
        <div className='business-detail__info'>
            <div className='business-detail__description-header'>
                <h4>{name}</h4>
                <span>{location}</span>
            </div>
            <div className='business-detail__description-story'>
                <h4>Our Story</h4>
                <span>{description}</span>
                <div className='business-detail__payment-options'>
                    {
                        phoneNumber && <a href="https://paytm.com" className='business-detail__payment-option flex two'>
                            <span className='business-detail__paytm third'><img src='https://upload.wikimedia.org/wikipedia/commons/4/42/Paytm_logo.png' alt='PayTM' /></span>
                                <span className='business-detail__number two-third'>{phoneNumber}</span>
                        </a>
                    }
                </div>
            </div>
            </div>
            <div className='business-detail__image-box'>
                <img className='business-detail__image' src={imageUrl} />
            </div>
        </div>
};

type BusinessDetailPageProps = {
            selectedBusiness: Business;
    match: any;
    setSelectedBusinessId: (businesses: Business[]) => {};
};

class BusinessDetailPage extends React.Component<BusinessDetailPageProps> {
            constructor(private props: BusinessDetailPageProps) {
                super(props);
    }

    componentDidMount() {
        // Get the business id from the url and then set the selected business
        const businessId = this.props.match.params.businessId;
        this.props.setSelectedBusinessId(businessId);
    }

    render() {
        const {
                selectedBusiness
            } = this.props;

        return (
            <div className='detail-page flex one center'>
                <section className='navigation'>
                    <Header />
                </section>
                <section className='main'>
                    {selectedBusiness && <BusinessDetail
                        business={selectedBusiness}
                    />}
                </section>
            </div>
        );
    }
}

export const ConnectedBusinessDetailPage = connect(
    (state: AppReducerType) => ({
                selectedBusiness: state.businesses.find((business) => business.uniqueId === state.selectedBusinessId),
    }),
    (dispatch) => ({
                setSelectedBusinessId: (selectedBusinessId: string) => {
                dispatch(setSelectedBusinessId({ selectedBusinessId }));
        },
    })
)(BusinessDetailPage);
