const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Dummy backend data
const VyduData = {
  userName: 'Vydu',
  claimNumber: 'VYDU123',
  prescription: [
    ['Crocin', '2024-04-01', 'Apollo Pharmacy', '$10'],
  ],
  otc: [
    ['Vitamin C', '2024-04-02', '$5', 'Medical Store A', 'Cold relief']
  ],
  supplies: [
    ['Wrist Brace', '2024-04-03', 'Yes', '$20', 'MediEquip']
  ],
  parking: [
    ['Hospital Street 1', '2024-04-04', '$3', 'Yes']
  ],
  mileage: [
    ['2024-04-04', 'Home', 'Clinic', '5 km']
  ],
  fare: [
    ['2024-04-05', 'Clinic', 'Home', 'Taxi', '$15']
  ]
};

const VyduryaData = {
  userName: 'Vydurya',
  claimNumber: 'VYDURYA123',
  prescription: [
    ['Paracetamol', '2024-04-01', 'HealthPlus', '$12'],
  ],
  otc: [
    ['Cough Syrup', '2024-04-02', '$6', 'Medical Hub', 'Cough relief']
  ],
  supplies: [
    ['Knee Support', '2024-04-03', 'No', '$18', 'HealthMart']
  ],
  parking: [
    ['Clinic Street 5', '2024-04-04', '$2', 'No']
  ],
  mileage: [
    ['2024-04-04', 'Home', 'Hospital', '7 km']
  ],
  fare: [
    ['2024-04-05', 'Hospital', 'Home', 'Bus', '$2']
  ]
};

const users = {
  Vydu: VyduData,
  Vydurya: VyduryaData
};

// Home route
app.get('/', (req, res) => {
  res.render('home');
});

// Dynamic user route (case-insensitive)
app.get('/:username', (req, res) => {
  const usernameParam = req.params.username.toLowerCase();
  
  // Find user data by case-insensitive match
  const data = Object.values(users).find(user => user.userName.toLowerCase() === usernameParam);

  if (!data) return res.status(404).send('User not found');
  res.render('index', { data });
});

app.listen(3000, () => {
  console.log('Server started at http://localhost:3000');
});
