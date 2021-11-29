import { Document } from 'mongoose';

export interface ICountriesDocument extends Document {
    deleted:                 boolean;
    fundVisaChecklist:       string[];
    flagImage:               FlagImage[];
    mapImage:                MapImage[];
    mediaFiles:              string[];
    id:                      number;
    countryCode:             string;
    countryName:             string;
    currencyName:            string;
    currencyRate:            number;
    uid:                     number;
    time:                    string;
    complete:                number;
    __v:                     number;
    enrollmentBasic:         string;
    enrollmentProcedure:     string;
    enrollmentRemarks:       string;
    airTicketPrice:          number;
    airTicketType:           string;
    child1PermitFee:         number;
    child1Vfs:               number;
    child2PermitFee:         number;
    child2Vfs:               number;
    child3PermitFee:         number;
    child3Vfs:               number;
    child4PermitFee:         number;
    childrenAboveAge:        number;
    familyEstimatedCost:     number;
    livingCostChild1:        number;
    livingCostChild2:        number;
    livingCostMainApplicant: number;
    livingCostSpouse:        number;
    mainApplicantPermitFee:  number;
    mainApplicantVfs:        number;
    singleEstimatedCost:     number;
    spousePermitFee:         number;
    spouseVfs:               number;
    stageApplication:        number;
    stageVisaApproval:       number;
    stageVisaFilling:        number;
    travelCostChild:         number;
    travelCostMainApplicant: number;
    travelCostSpouse:        number;
    visaFeeChild1:           number;
    visaFeeChild3:           number;
    visaFeeChild4:           number;
    visaFeeMainApplicant:    number;
    visaFeeSpouse:           number;
    fundAcceptable:          string;
    fundEducation:           string;
    fundRefundable:          string;
    fundSponsors:            string;
    AHM:                     string;
    NIB:                     string;
    allainze:                string;
    buppa:                   string;
    dualOSHC:                number;
    embassyAddress:          string;
    embassyContacts:         string;
    embassyEmail:            string;
    familyOSHC:              number;
    interview:               string;
    interviewType:           string;
    mainCities:              string;
    mainStates:              string;
    mediBank:                string;
    singleOSHC:              number;
    tutionFeeReq:            string;
    vfsttsAddress:           string;
    vfsttsContacts:          string;
    vfsttsEmail:             string;
    videoUrl:                string;
    visaCategory:            string;
    visaFillingBy:           string;
    visaProcessingTime:      string;
    createdByUser:           createdByUser;
    updatedByUser:           updatedByUser;
    totalConsultancyFee:     number;
    totalPermitFee:          number;
    totalVfsFee:             number;
}

export interface createdByUser {
    _id:    string;
    name:   string;
    userId: string;
    time:   string;
}


export interface updatedByUser {
    _id:    string;
    name:   string;
    userId: string;
    time:   string;
}


export interface FlagImage {
    _id:  string;
    name: string;
    path: string;
    url:  string;
    uid:  string;
}


export interface MapImage {
    _id:  string;
    name: string;
    path: string;
    url:  string;
    uid:  string;
}