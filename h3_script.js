const object = {
    name: 'Mukhammed',
    last_name: 'Zainidinov',
    middle_name: 'Kubanychovich',
    age: 27,
    birth_date: {
        day: 20,
        month: 'October',
        year: 1996,      
    },
    birth_place: {
        village: 'Daroot-Korgon',
        district: 'Chon-Alai',
        region: 'Osh',
        country: 'Kyrgyzstan',       
    },
    nationality: 'Kyrgyzstan',
    ethnicity: 'Kyrgyz',
    gender: 'male',
    marital_status: 'married',
    home_address: {
        street: 'Oskonaliev',
        building: '4G',
        apartment: null,
        city: 'Osh',
        zip_code: 723505,
        region: 'null',
        country: 'Kyrgyzstan',
    },
    phone_number: {
        country_code: '+996',
        number: '550117400',
    },
    smoker: false,
    languages: [
        {
            language: 'Kyrgyz',
            mother_tongue: true,
            listening: 'C2',
            reading: 'C2',
            speaking: 'C2',
            writing: 'C2',
        },
        {
            language: 'Russian',
            mother_tongue: false,
            listening: 'C1',
            reading: 'C1',
            speaking: 'C1',
            writing: 'C1',
        },
        {
            language: 'English',
            mother_tongue: false,
            listening: 'C1',
            reading: 'C1',
            speaking: 'C1',
            writing: 'C1',
        },
        {
            language: 'Turkish',
            mother_tongue: false,
            listening: 'B2',
            reading: 'B1',
            speaking: 'B1',
            writing: 'B1',
        },
    ],
    soft_skills: ['Stata', 'EViews', 'Python', 'RStudio', 'MS Excel', 'MS Word', 'MS PowerPoint', 'MS Outlook'],
    work_experience: [
        {
            company_name: 'National Bank of The Kyrgyz Republic',
            position: 'Inspector, Supervision Department',
            period: '08/2022 - Present',
            address: {
                street: 'Kurmanzhan Datka',
                building: '192',
                apartment: null,
                city: 'Osh',
                zip_code: 723510,
                region: 'null',
                country: 'Kyrgyzstan',
            },
        },
        {
            company_name: 'Research & Consulting Agency "M-Vector"',
            position: 'Sociological Research Analyst',
            period: '06/2022 - 07/2022',
            address: {
                street: 'Kiev',
                building: '195',
                apartment: null,
                city: 'Bishkek',
                zip_code: 720001,
                region: 'null',
                country: 'Kyrgyzstan',
            },
        },
        {
            company_name: 'beeanco',
            position: 'Business Analysis Intern',
            period: '11/2021 - 05/2022',
            address: {
                street: 'Burghardtgasse',
                building: '21',
                apartment: '10',
                city: 'Vienna',
                zip_code: 1200,
                region: 'Vienna',
                country: 'Austria',
            },            
        },
        {
            company_name: 'Demir Kyrgyz International Bank',
            position: 'Retail Marketing Specialist',
            period: '05/2019 - 08/2019',
            address: {
                street: 'Kurmanzhan Datka',
                building: '191A',
                apartment: null,
                city: 'Osh',
                zip_code: 723510,
                region: 'null',
                country: 'Kyrgyzstan',
            }
        },
        {
            company_name: 'Public Foundation "El-Project"',
            position: 'Member',
            period: '02/2017 - 08/2019',
            address: {
                street: 'Akhunbaev',
                building: '145',
                apartment: null,
                city: 'Bishkek',
                zip_code: 720001,
                region: 'null',
                country: 'Kyrgyzstan',
            }
        },
    ],
    education: [
        {
            institution_name: 'Central European University',
            degree: 'Master',
            program: 'MA in Economic Policy in Global Markets',
            period: '09/2019 - 06/2021',
            gpa: '3.66/4.00',
            concentration: 'Economic Analysis, Data Analysis, Financial Analysis',
            thesis: 'How Much Does Fiscal Policy Contribute to Explaining Inflation in Kyrgyzstan?',
            address: {
                street: 'Quellenstrasse',
                building: '51',
                apartment: null,
                city: 'Vienna',
                zip_code: 1100,
                region: 'Vienna',
                country: 'Austria',
            }
        },
        {
            institution_name: 'Ala-Too International University',
            degree: 'Bachelor',
            program: 'Economics (World Economy)',
            period: '09/2015 - 06/2019',
            gpa: '92/100',
            concentration: 'Economics, Finance, Accounting',
            thesis: 'The Twin Deficit Hypothesis: The Case of the Kyrgyz Republic',
            address: {
                street: 'Ankara',
                building: '1/8',
                apartment: null,
                city: 'Bishkek',
                zip_code: 720001,
                region: 'null',
                country: 'Kyrgyzstan',
            }
        },
        {
            institution_name: 'Osh State Institution of Law',
            degree: 'Vacational',
            program: 'Law',
            period: '09/2012 - 06/2015',
            gpa: '5/5',
            concentration: 'Law',
            thesis: null,
            address: {
                street: 'Razzakov',
                building: '54',
                apartment: null,
                city: 'Osh',
                zip_code: 723500,
                region: 'null',
                country: 'Kyrgyzstan',
            },
        },
    ],
    family: [
        {
            relationship: 'Father',
            name: 'Kubanych',
            last_name: 'Zainidinov',
            middle_name: 'Koshbakovich',
            age: 59,
            birth_date: {
                day: 15,
                month: 'April',
                year: 1965,      
            },
            occupation: 'Civil Servant',
            marital_status: 'married',
            number_of_children: 4,
            languages: ['Kyrgyz', 'Russian'],
        },
        {
            relationship: 'Mother',
            name: "Mother's name",
            last_name: "Mother's last name",
            middle_name: "Mother's middle name",
            age: 50,
            birth_date: {
                day: 8,
                month: 'July',
                year: 1973,      
            },
            occupation: 'Retired',
            marital_status: 'married',
            number_of_children: 4,
            languages: ['Kyrgyz', 'Russian'],
        },
        {
            relationship: 'Spouse',
            name: "Spouse's name",
            last_name: "Spouse's last name",
            middle_name: "Spouse's middle name",
            age: 25,
            birth_date: {
                day: 1,
                month: 'September',
                year: 1998,      
            },
            occupation: 'House wife',
            marital_status: 'married',
            number_of_children: null,
            languages: ['Kyrgyz', 'Russian', 'English', 'German', 'Turkish'],
        },
        {
            relationship: 'Sister',
            name: "Sister's name",
            last_name: "Sister's last name",
            middle_name: "Sister's middle name",
            age: 31,
            birth_date: {
                day: 2,
                month: 'April',
                year: 1992,      
            },
            occupation: 'Teacher',
            marital_status: 'married',
            number_of_children: 4,
            languages: ['Kyrgyz', 'Russian', 'English'],
        },
        {
            relationship: 'Brother',
            name: "Brother's name",
            last_name: "Brother's last name",
            middle_name: "Brother's middle name",
            age: 30,
            birth_date: {
                day: 5,
                month: 'November',
                year: 1993,      
            },
            occupation: 'Civil servant',
            marital_status: 'married',
            number_of_children: 2,
            languages: ['Kyrgyz', 'Russian', 'English', 'Persian'],
        },
        {
            relationship: 'Sister',
            name: "Sister's name",
            last_name: "Sister's last name",
            middle_name: "Sister's middle name",
            age: 19,
            birth_date: {
                day: 26,
                month: 'December',
                year: 2004,      
            },
            occupation: 'Student',
            marital_status: 'single',
            number_of_children: null,
            languages: ['Kyrgyz', 'Russian', 'English', 'German', 'French'],
        },
    ],
    friends: [
        {
            name: 'Kabiru',
            last_name: 'Lawal',
            middle_name: 'Kehindle',
            age: 44,
            occupation: 'Economist',
            marital_status: 'married',
            number_of_children: 3,
            languages: ['English'],
            nationality: 'Nigeria',
            gender: 'male',
        },
        {
            name: 'Davide',
            last_name: 'Laschizza',
            middle_name: null,
            age: 31,
            occupation: 'Manager',
            marital_status: 'single',
            number_of_children: null,
            languages: ['Italian', 'English'],
            nationality: 'Italy',
            gender: 'male',
        },
        {
            name: 'Akhi',
            last_name: 'Nishat',
            middle_name: 'Tasnim',
            age: 28,
            occupation: 'Bank Specialist',
            marital_status: 'married',
            number_of_children: null,
            languages: ['Bengali', 'English'],
            nationality: 'Bangladesh',
            gender: 'female',
        },
        {
            name: 'Farid',
            last_name: 'Alizada',
            middle_name: null,
            age: 29,
            occupation: 'Financial Analyst',
            marital_status: 'single',
            number_of_children: null,
            languages: ['Azerbaijani', 'English', 'Russian'],
            nationality: 'Azerbaijan',
            gender: 'male',
        },
        {
            name: 'Anastasia',
            last_name: 'Atamanciuc',
            middle_name: null,
            age: 30,
            occupation: 'Research Analyst',
            marital_status: 'married',
            number_of_children: null,
            languages: ['Romanian', 'English', 'Russian'],
            nationality: 'Moldova',
            gender: 'female',
        },
        {
            name: 'Balint',
            last_name: 'Cocchioni',
            middle_name: null,
            age: 28,
            occupation: 'Economist',
            marital_status: 'single',
            number_of_children: null,
            languages: ['Hungarian', 'English'],
            nationality: 'Hungary',
            gender: 'male',
        },
        {
            name: 'Miroslav',
            last_name: 'Mittras',
            middle_name: null,
            age: 30,
            occupation: 'Financial Trader',
            marital_status: 'single',
            number_of_children: null,
            languages: ['Slovak', 'English'],
            nationality: 'Slovakia',
            gender: 'male',
        },
        {
            name: 'Nikola',
            last_name: 'Naumovski',
            middle_name: null,
            age: 32,
            occupation: 'Project Manager',
            marital_status: 'single',
            number_of_children: null,
            languages: ['Macedonian', 'English'],
            nationality: 'North Macedonia',
            gender: 'male',
        },
        {
            name: 'Ali',
            last_name: 'Asad',
            middle_name: 'Rashid',
            age: 35,
            occupation: 'Economist',
            marital_status: 'divorsed',
            number_of_children: null,
            languages: ['Urdu', 'English'],
            nationality: 'Pakistan',
            gender: 'male',
        },
        {
            name: 'Birgit',
            last_name: 'Rumpler',
            middle_name: null,
            age: 31,
            occupation: 'Accountant',
            marital_status: 'single',
            number_of_children: null,
            languages: ['German', 'English'],
            nationality: 'Austria',
            gender: 'female',
        },
    ],
}

console.log(object);