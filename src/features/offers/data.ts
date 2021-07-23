import {bars} from "../units/units";
import {rub} from "../currencies/data";
import {
    chocolateAndPeanutButter,
    chocolateChip,
    chocolateChipAndPeanutButter,
    crunchyPeanutButter, peanutButter,
    whiteChocolateMacadamia
} from "../products/data";
import {Offer} from "./model";

export const offers: Offer[] = [
    {
        id: '1',
        title: chocolateChip.title,
        content: [
            {
                product: chocolateChip,
                quantity: {
                    value: 1,
                    unitsCode: bars.code
                }
            }
        ],
        price: {
            value: 200,
            currencyCode: rub.code
        },
        validFrom: new Date().toISOString(),
        validUntil: new Date().toISOString(),
        images: [
            'https://cdn.shopify.com/s/files/1/0341/0637/6325/products/DTC_CLF_CHC_Web_1320x1076_cd0170ff-8c56-4e17-9b67-09eb3d2d95f1.png?v=1623970669'
        ]
    },
    {
        id: '2',
        title: crunchyPeanutButter.title,
        content: [
            {
                product: crunchyPeanutButter,
                quantity: {
                    value: 12,
                    unitsCode: bars.code
                }
            }
        ],
        price: {
            value: 1234521.214,
            currencyCode: rub.code
        },
        validFrom: new Date().toISOString(),
        validUntil: new Date().toISOString(),
        images: [
            'https://cdn.shopify.com/s/files/1/0341/0637/6325/products/DTC_CLF_CRP_Web_1320x1076_39c3618a-99f7-4c58-a98a-b2b9ded9631f.png?v=1612290930'
        ]
    },
    {
        id: '3',
        title: whiteChocolateMacadamia.title,
        content: [
            {
                product: whiteChocolateMacadamia,
                quantity: {
                    value: 12,
                    unitsCode: bars.code
                }
            }
        ],
        price: {
            value: 1500,
            currencyCode: rub.code
        },
        validFrom: new Date().toISOString(),
        validUntil: new Date().toISOString(),
        images: [
            'https://cdn.shopify.com/s/files/1/0341/0637/6325/products/DTC_Olym_WCN_Wrppr_Web_1320x1076_edcde890-879d-476a-9418-6f90ba9a0967.png?v=1612290203'
        ]
    },
    {
        id: '4',
        title: chocolateChipAndPeanutButter.title,
        content: [
            {
                product: chocolateChipAndPeanutButter,
                quantity: {
                    value: 12,
                    unitsCode: bars.code
                }
            }
        ],
        price: {
            value: 1500,
            currencyCode: rub.code
        },
        validFrom: new Date().toISOString(),
        validUntil: new Date().toISOString(),
        images: [
            'https://cdn.shopify.com/s/files/1/0341/0637/6325/products/DTC_CNB_CBU_Web_1320x1076_54d2709b-08f8-40b5-9c24-bc70f87c0d44.png?v=1619042204'
        ]
    },
    {
        id: '5',
        title: chocolateAndPeanutButter.title,
        content: [
            {
                product: chocolateAndPeanutButter,
                quantity: {
                    value: 12,
                    unitsCode: bars.code
                }
            }
        ],
        price: {
            value: 1500,
            currencyCode: rub.code
        },
        validFrom: new Date().toISOString(),
        validUntil: new Date().toISOString(),
        images: [
            'https://cdn.shopify.com/s/files/1/0341/0637/6325/products/FL_HERO_NBF_chp_R8_625x510_23f963ff-865e-4289-a125-c48ced979d74.png?v=1612550270'
        ]
    },
    {
        id: '6',
        title: peanutButter.title,
        content: [
            {
                product: peanutButter,
                quantity: {
                    value: 12,
                    unitsCode: bars.code
                }
            }
        ],
        price: {
            value: 1500,
            currencyCode: rub.code
        },
        validFrom: new Date().toISOString(),
        validUntil: new Date().toISOString(),
        images: [
            'https://cdn.shopify.com/s/files/1/0341/0637/6325/products/FL_HERO_NBF_cnb_R8B_625x510_112453b9-5359-461d-af2e-128f6798cf74.png?v=1612550370'
        ]
    },
]
