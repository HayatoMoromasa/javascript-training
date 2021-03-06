const thumbs = document.querySelectorAll('.thumb');

thumbs.forEach(function(item,index){
    item.onmouseover = function() {
        document.querySelector('.bigimg').src = this.dataset.image;
    }
});
