function smoothScroll(target, duration){
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset();
    var distancePosition = targetPosition - startPosition;
    var startTime = null;

    console.log(targetPosition);
}

