exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('project').del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {name: 'University of Phoenix Stadium', address: '1 Cardinals Dr, Glendale, AZ 85305', description:'Glendale Pedestrian bridge project was constructed in 2018 to connect the new "black" parking lot to the University of Phoenix Stadium. The pedestrian bridge and tunnel will carry passengers across Bethany Home Road and over the Grand Canal.', img_url:'https://slack-imgs.com/?c=1&url=https%3A%2F%2Fres.cloudinary.com%2Fsimpleview%2Fimage%2Fupload%2Fcrm%2Fphoenix%2F58801_9171_UofP-Stadium-with-Great-Lawn-View_b8c57ff9-5056-b3a8-4994ce8f703ae694.jpg'},
        {name: 'Ehrenberg Port of Entry', address: 'Ehrenberg, AZ 85334', description:'Ehrenberg Port of Entry Phase 1 and Phase 2 constructed a new operations building and credentials booth. Also added an auxilliary lane on EB I-10.', img_url: 'https://images.unsplash.com/photo-1458236987605-990022dbce63?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b3d3a2e1473ce5a7a7300fc23bc5bb25&auto=format&fit=crop&w=1951&q=80'},
        {name: 'Arizona State Route 303', address: 'West Valley, Arizona', description:'Loop 303 Outfall drainage system was constructed for Maricopa County Flood Control District in 2015. It was a 4.5 mile concrete reinforced channel which also included thirteen box culverts, storm draining improvements spanning from Southern Ave. to Van Buren Rd. along the 303 corridor.', img_url: 'https://www.phoenix.gov/econdevsite/MediaAssets/Highway.jpg'},
        {name: 'Tanger Outlets', address: '4250 W Anthem Way, Phoenix, AZ 85086', description:'', img_url:'https://res.cloudinary.com/simpleview/image/fetch/c_fill,f_auto,h_600,q_75,w_1500/https://res.cloudinary.com/simpleview/image/upload/crm/scottsdale/Outlets-at-Anthem-3fe0e8ba5056b3a_3fe0ea71-5056-b3a8-49dae48d4ef73e60.jpg'},
      ]);
    });
};
