import * as React from 'react';
import Dropdown from 'react-dropdown';

const App = () => {

 const [france, setFrance] = React.useState('France');

 const [Tunisie, setTunisie] = React.useState('Tunsie');

 const [Egypt, setEgypt] = React.useState('Egypt');

 const handleFranceChange = (event) => {

   setFrance(event.target.value);

 };

 const handleTunisieChange = (event) => {

   setTunisie(event.target.value);

 };
 const handleEgyptChange = (event) => {

  setEgypt(event.target.value);

};

 return (

   <div>

     <Dropdown
    

       label="Pays" 

       options={[

         { label: 'Nice', value: 'Nice' },

         { label: 'Paris', value: 'Paris' },

         { label: 'Nantes', value: 'Nantes' },

       ]}

       value={france}

       onChange={handleFranceChange}

     />

     <Dropdown

       label="Tunisie"

       options={[

         { label: 'Monastir', value: 'Monastir' },

         { label: 'Bizerte', value: 'Bizerte' },

         { label: 'Nabeul', value: 'Nabeul' },

       ]}

       value={Tunisie}

       onChange={handleTunisieChange}

     />
     
     <Dropdown

       label="Egypt"

       options={[

         { label: 'Caire', value: 'Caire' },

         { label: 'Eskandaria', value: 'Eskandaria' },

         { label: 'saaiid', value: 'saiid' },

       ]}

       value={Egypt}

       onChange={handleEgyptChange}

     />


   </div>

 );

};

export default App;