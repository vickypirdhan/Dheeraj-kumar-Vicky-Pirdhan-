// Simple slider
document.addEventListener('DOMContentLoaded', function(){
  const slider = document.querySelector('[data-slider]');
  if(slider){
    const slides = slider.querySelector('.slides');
    const total = slides.children.length;
    let idx = 0;
    const prev = slider.querySelector('.prev');
    const next = slider.querySelector('.next');
    function update(){ slides.style.transform = `translateX(-${idx*100}%)`; }
    prev.addEventListener('click',()=>{ idx = (idx-1+total)%total; update(); });
    next.addEventListener('click',()=>{ idx = (idx+1)%total; update(); });
    // Auto play
    setInterval(()=>{ idx = (idx+1)%total; update(); }, 4500);
  }

  // Chart.js demo
  const ctx = document.getElementById('visitorsChart');
  if(ctx){
    const visitorsChart = new Chart(ctx.getContext('2d'), {
      type: 'doughnut',
      data: {
        labels: ['Facebook','WhatsApp','Google','Instagram'],
        datasets:[{
          data: [120,90,150,70],
          backgroundColor: ['#4267B2','#25D366','#4285F4','#E1306C'],
          borderColor:'#0b0b0b',
          borderWidth:2
        }]
      },
      options:{
        responsive:true,
        maintainAspectRatio:false,
        plugins:{
          legend:{ position:'bottom', labels:{ color:'#fff' } },
          title:{ display:false }
        },
        animation: {
          animateRotate: true,
          duration: 1200
        }
      }
    });
  }
});