import moment from 'moment';

const expensesfixtures = [{
    id: '1',
    description: 'gum',
    note: '',
    amount: 190,
    createdAt: 0
}, {
    id: '2',
    description: 'plastic bags',
    note: '',
    amount: 280,
    createdAt: moment(0).subtract(4, 'days').valueOf()
 },{
    id: '3',
    description: 'rent',
    note: '',
    amount: 195000,
    createdAt: moment(0).add(4, 'days').valueOf()
},{
    id: '4',
    description: 'Car spare parts',
    note: '',
    amount: 102000,
    createdAt: moment(0).add(3, 'months').valueOf()
}//,{
//     id: '5',
//     description: 'school fees',
//     note: '',
//     amount: 320000,
//     createdAt: -21000
// },{
//     id: '6',
//     description: 'medical bills',
//     note: '',
//     amount: 21300,
//     createdAt: 40089
// },{
//     id: '7',
//     description: 'transportation',
//     note: '',
//     amount: 19500,
//     createdAt: 39488890
// }
];

export default expensesfixtures;