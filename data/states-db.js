const states = [
    {state: 'Oregon', traveled: true},
    {state: 'California', traveled: true},
    {state: 'Texas', traveled: false},
    {state: 'Iowa', traveled: true},
    {state: 'Colorado', traveled: true},
    {state: 'Montana', traveled: false},
    {state: 'Idaho', traveled: true},
    {state: 'New York', traveled: false},
    {state: 'Nebraska', traveled: true},
    {state: 'Wyoming', traveled: true},
    {state: 'New Mexico', traveled: false}

];
module.exports = {
    getAll: function() {
        return states;
    }
};