
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
};



window.addEventListener('DOMContentLoaded', function() {
  const ctx = document.getElementById('skillsPieChart').getContext('2d');
  new Chart(ctx, {
      type: 'pie',
      data: {
          labels: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'], 
          datasets: [{
              label: 'Skills',
              data: [40, 30, 15, 10, 5], 
              backgroundColor: ['#ff5733', '#33ff57', '#3357ff', '#f1c40f', '#8e44ad'], 
              borderColor: ['#fff', '#fff', '#fff', '#fff', '#fff'], 
              borderWidth: 2
          }]
      },
      options: {
          responsive: true,
          plugins: {
              legend: {
                  position: 'top',
              },
              tooltip: {
                  callbacks: {
                      label: function(tooltipItem) {
                          return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                      }
                  }
              }
          }
      }
  });
});
const xvalue=['Python','Java','Cpp','Networking','DBMS'];
const yvalue=[89,65,74,59,88];
const barcolor=['yellow','pink','red','green','blue','violet'];
const layout={title:"CSE Subject Marks"};
// const data=[{labels:xvalue,values:yvalue,type:'pie'}];
const data=[{labels:xvalue,values:yvalue,type:'pie',marker:{colors:barcolor}}];
Plotly.newPlot('chart',data,layout);

// new Chart('chart', {
//     type: 'pie',
//     data: {
//         labels: xvalue,
//         datasets: [{
//             backgroundColor: barcolor,
//             data: yvalue
//         }]
//     },
//     options: {
//         legend: { display: false },
//         title: {
//             display: true,
//             text: "CSE Subject Marks"
//         }
//     }
// });