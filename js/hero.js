var text, start, el, demo, i;

i = 0;
start = 'http://mywebsite.com/page.html';
text = '#edit';

// initialize
el = document.getElementById('edit-text');
demo = document.getElementById('flip-demo');
el.innerHTML = start;

function startOver(){
    demo.removeAttribute('hero-card-flipped');
    demo.removeAttribute('active', '');
    el.innerHTML = start;
    i=0;

    setTimeout(type, 500);
}

// flip
function flip(){
    var el;

    demo = document.getElementById('flip-demo');

    // toggle attribute
    if(demo.hasAttribute('hero-card-flipped')){
      demo.removeAttribute('hero-card-flipped');

    }
    else{
      demo.setAttribute('hero-card-flipped', '');

      setTimeout(startOver, 10000);
    }
}

function type(){

    if(el.innerHTML.length < (start.length + text.length)){

      // add text
      el.innerHTML = el.innerHTML + text.charAt(i);
      i++;

      setTimeout(type, 80);
    }
    else{

      setTimeout(function(){
        demo.setAttribute('active', '');
      }, 300);

      setTimeout(flip, 800);
    }

}

setTimeout(type, 500);